window.addEventListener('DOMContentLoaded', initializeApp);

let form;
let list;

async function initializeApp() {
  console.log('inside the initialize app call..');
  setReferences();
  bindEvents();
  await fetchPosts();
}

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then(error => {
        console.log(error);
        const ex = new Error('Something went wrong');
        throw ex;
      })
    }
  }).catch(err => {
    console.log(err);
    const error = new Error('Something went wrong');
    throw error;
  });
}

function renderUI(posts) {
  posts.forEach(post => {
    // console.log(post);
    const postItem = document.createElement('li');
    postItem.className = 'list-group-item';
    postItem.id = post.id;
    const postTitle = document.createElement('h1');
    postTitle.textContent = post.title;
    const postDescription = document.createElement('p');
    postDescription.textContent = post.body;
    postItem.appendChild(postTitle);
    postItem.appendChild(postDescription);
    list.appendChild(postItem);
  });
}


// Fetch the lists of posts from the backend
async function fetchPosts() {
  try {
      const posts = await sendHTTPRequest('GET','https://jsonplaceholder.typicode.com/posts');
      // console.log(posts);
      renderUI(posts);
  } catch (error) {
     console.log(error);
     const ex = new Error('Something went wrong');
     throw ex;
  }
}

function setReferences() {
  form = document.querySelector('form');
  list = document.querySelector('.list-group')
}

async function createPost(event) {
  event.preventDefault();
  clearError(event);
  // document.querySelector('.error-feedback').classList.remove('error');
  try {
    if (form.title.value.trim().length === 0 || form.description.value.trim().length === 0) {
      document.querySelector('.error-feedback').textContent = 'Please provide the required data';
      document.querySelector('.error-feedback').classList.add('error');
      return;
    }
    const newPostTitle = form.title.value;
    const newPostDescription = form.description.value;
    const newPost = {
      id: Math.floor(Math.random() * 10000),
      title: newPostTitle,
      body: newPostDescription
    }
    await sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify(newPost));
    form.title.value = '';
    form.description.value = '';
  } catch (ex) {
    console.log(ex);
    const error = new Error('Something went wrong');
    throw error;
  }
}

async function deleteFromServer(id) {
  try {
    await sendHTTPRequest('DELETE', `http://jsonplaceholder.typicode.com/posts/${id}`)
    document.querySelector('.success-feedback').textContent = '1 Post got deleted';
    document.querySelector('.success-feedback').classList.add('success');
    setTimeout(() => {
      document.querySelector('.success-feedback').classList.remove('success');
    }, 2000);
  } catch (error) {
    console.log(error);
    const ex = new Error('Something went wrong');
    throw ex;
  }
}


async function deletePost(event) {
  const postItem = event.target.closest('li');
  await deleteFromServer(postItem.id);
  //remove the clicked li from the UI
  event.target.closest('li').remove();
}

function clearError(event) {
  if (event.target.value) {
    document.querySelector('.error-feedback').classList.remove('error');
  }
}

function bindEvents() {
  form.addEventListener('submit', createPost);
  form.addEventListener('keyup', clearError);
  list.addEventListener('click', deletePost);
}
