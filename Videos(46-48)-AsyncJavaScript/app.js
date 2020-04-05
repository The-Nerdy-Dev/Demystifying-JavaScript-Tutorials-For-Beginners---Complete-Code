// Asynchronous JavaScript Code

// Running Sync and Async Code and seeing the
// output

console.log('LOC 1 ran');
setTimeout(() => {
  console.log('LOC 3 ran');
}, 2000);
console.log('LOC 5 ran');

const playGame = () => console.log('We are playing games, nothing productive to do these days..');

const writeCode = () => console.log('Enough of playing games...let us write some code..');

setTimeout(() => {
  writeCode();
}, 1000);

playGame();

// Creating a Promise using the Promise Constructor
const arrangeItemsOnPlate = (plate = {}) => {
  return new Promise((resolve, reject) => {
    if (Object.keys(plate).includes('water')) {
      reject("Don't have water with the plate. If you want to have water, always have it before a meal");
    }
    setTimeout(() => {
      resolve(plate);
    }, 2000);
  })
}
console.log(arrangeItemsOnPlate());

// Working with Promises and Error Handling
// in Promises

arrangeItemsOnPlate()
  .then(data => console.log(data))
  .catch(error => console.log(error));

arrangeItemsOnPlate({ tomato: 1 })
  .then(plate => {
    console.log(plate);
    return arrangeItemsOnPlate({ pepper: 1 });
  }).then(plate => {
    console.log(plate);
    return arrangeItemsOnPlate({ pepper: 1, tomato: 1 });
  }).then(plate => {
    console.log(plate);
    return arrangeItemsOnPlate({ water: 1})
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Finally all the plates are ready to be displayed'));

// Promise.race

Promise.race([
  arrangeItemsOnPlate({ pepper: 2, tomato: 1 }),
  arrangeItemsOnPlate({ salt: 1, cucumber: 2 })
]).then(data => console.log(data));

// Promise.all
Promise.all([
  arrangeItemsOnPlate({ pepper: 2, tomato: 1,water:1 }),
  arrangeItemsOnPlate({ salt: 1, cucumber: 2 })
]).then(data => console.log(data)).catch(error => {
  console.log(error);
});

// Promise.allSettled
Promise.allSettled([
  arrangeItemsOnPlate({ pepper: 2, tomato: 1, water: 1 }),
  arrangeItemsOnPlate({ salt: 1, cucumber: 2 })
]).then(data => console.log(data)).catch(error => {
  console.log(error);
});


// Converting our Promise based implementation
// to Async & Await

async function init() {
 try {
   const plateWithTomato = await arrangeItemsOnPlate({ tomato: 1 });
   console.log(plateWithTomato);
   const plateWithPepper = await arrangeItemsOnPlate({ pepper: 1 });
   console.log(plateWithPepper);
   const plateWithPepperAndTomato = await arrangeItemsOnPlate({ pepper: 1, tomato: 1 });
   console.log(plateWithPepperAndTomato);
   const plateWithWater = await arrangeItemsOnPlate({ water: 1 })
   console.log(plateWithWater);
 } catch (error) {
   console.error(error);
 } finally {
   // resource deallocation and memory freeing
   console.log('Finally all the valid plates are ready to be displayed');
 }
}

init();
