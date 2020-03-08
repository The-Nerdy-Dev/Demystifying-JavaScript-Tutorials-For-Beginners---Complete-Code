//Reduce Method

// Let us find the percentage of the student
// given the marks of the student in six subjects

const studentMarksOutOf100PerSubject = [56.2, 98.8, 67.2, 33.4, 44.4, 100];

// 1st approach: Using the forEach method
let totalMarks = 0;
studentMarksOutOf100PerSubject.forEach(subjectMarks => {
  totalMarks += subjectMarks;
});
console.log(totalMarks);
const percentageSecured = ((totalMarks / 6) / 100) * 100;
console.log(percentageSecured);

// 2nd approach: Using the reduce method
// Reduce is used when you want to reduce a
// collection of values into a single consolidated
// value 
const studentTotalMarks = studentMarksOutOf100PerSubject.
  reduce((accumulator, subjectMarks) => {
    return subjectMarks + accumulator;
  }, 0);

console.log(studentTotalMarks);
const percentageObtained = ((studentTotalMarks / 6) / 100) * 100;
console.log(percentageObtained);
