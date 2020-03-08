/// Sets
// The order of elements are not guaranteed,duplicates are not allowed,
// no index based access

// Maps
// Store key-value data of any kind and length
// order is guaranteed,duplicate keys are not allowed, order is guaranteed,
//key based access

const enrollmentNumbers = new Set([
  12220802715,
  12220802715,
  12220802715,
  12220802732,
  12220802733,
  12220802515,
  12220802732,
  12220802713
]);
console.log(enrollmentNumbers);
console.log(enrollmentNumbers.has(12223232320802713));

enrollmentNumbers.add(
  12220802714
);
console.log(enrollmentNumbers);

// Iterating over the set entries
for (const enrollmentNumber of enrollmentNumbers.entries()) {
  console.log(enrollmentNumber);
}
// Iterating over the set values
for (const enrollmentNumber of enrollmentNumbers.values()) {
  console.log(enrollmentNumber);
}
// Check whether the set has a particular
// value if it does delete it.
if (enrollmentNumbers.has(12220802714)) {
  enrollmentNumbers.delete(12220802714);
}

console.log(enrollmentNumbers);

// Maps
const seanObjectTwo = {
  name: 'Sean',
  isGamer: true
}

const gamerMap = new Map([
  [seanObjectTwo, [{ game: 'Counter Strike', datePlayed: '22/10/2006' }]]
])
console.log(gamerMap);

// Get the value pertaining to a key of the map
console.log(gamerMap.get(seanObjectTwo));

// Set a value to a key of the map
gamerMap.set('The Nerdy Dev', 'The Witcher');

console.log(gamerMap);

// Iterating over the keys of the map

for (const gamerObjectKey of gamerMap.keys()) {
  console.log(gamerObjectKey);
}

// Iterating over values pertaining to the keys
// of the map

for (const gamerObjectValue of gamerMap.values()) {
  console.log(gamerObjectValue);
}

// Log the size of the map

console.log(gamerMap.size);
