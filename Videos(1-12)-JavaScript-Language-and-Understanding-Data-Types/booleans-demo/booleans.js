let subscribersCount = 3000;
const isPopular = subscribersCount> 2500;
console.log(isPopular);

// always prefer === over == .Using == is always generally a bad practice.
console.log(subscribersCount === 3000);
console.log(2===2);
// === is used for strict equality comparison (we are checking for both the type and the value
// of the things that we are comparing)
// == is used for loose equality comparison (we are concerned only with the value and not with the types)
console.log(2 == 2);
console.log('2' == 2);
console.log('2' === 2);

