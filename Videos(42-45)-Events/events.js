const button = document.querySelector('button');

const handleClick = event => {
  console.log(event.target);
}

// Register an event listener for the click event
button.addEventListener('click', handleClick);

// Unregister the event listener for the click event]
button.removeEventListener('click', handleClick);

function handleMouseEnter(event) {
  console.log(event.clientX);
  console.log(event.clientY);
}

// mousemove event
button.addEventListener('mousemove', handleMouseEnter);
button.removeEventListener('mousemove', handleMouseEnter);

// Registering an event listener on the window object

window.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  console.log('The application got initialized and setup is now donw');
  console.log('loaded');
}

const form = document.querySelector('form');
form.addEventListener('submit', () => {
  console.log(event);
  event.preventDefault();
});

const specialButton = document.querySelector('.special');

specialButton.addEventListener('click', eventObject => {
  eventObject.stopPropagation();
  console.log('button element got clicked');
  console.log(eventObject);
})

const wrapperDiv = document.querySelector('.wrapper-div');
const parentWrapperDiv = document.querySelector('.p-wrapper-div');
const grandParentDiv = document.querySelector('.gp-wrapper-div');

wrapperDiv.addEventListener('click', eventObject => {
  console.log('wrapper div element got clicked');
  console.log(eventObject);
});

parentWrapperDiv.addEventListener('click', eventObject => {
  console.log('parent wrapper div element got clicked');
  console.log(eventObject);
});

grandParentDiv.addEventListener('click', eventObject => {
  console.log('grand parent wrapper div element got clicked');
  console.log(eventObject);
});


// const foodListItems = document.querySelectorAll('li');

// for (const food of foodListItems) {
//   food.addEventListener('click', event => {
//     event.target.classList.toggle(`${event.target.id}`);
//   });
// }

const foods = document.querySelector('ol');
foods.addEventListener('click', event => {
  event.target.classList.toggle(`${event.target.id}`);
});
