async function init() {
 try {
  //  const results = await Promise.all([
  //    fetch('localjson/mobiles.json').then((response) => response.json()),
  //    fetch('localjson/mobile.json').then((response) => response.json()),
  //    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()),
  //  ].map(promise => promise.catch(error => error)));
   const results = await Promise.allSettled(
     [
       fetch('localjson/mobiles.json').then((response) => response.json()),
       fetch('localjson/mobile.json').then((response) => response.json()),
       fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
         response.json()
       ),
     ]);
   console.log(results);
 } catch (error) {
   console.error(error);
 }

}
init();
