console.log("Arrays==================================");
// Create a array students with  5 students

console.log(studentsData);

// map
// - add role:'student' prop to each obj using map
// - assign to 'updatedStudents' variable and log
const updatedStudents = studentsData.map(function (student) {
  student.role = "student";
  return student;
});
console.log(updatedStudents); // role:'student' is added

// filter
// - filter array and return only score >= 80
// - assign to 'highScores' variable
const highScores = studentsData.filter(function (student) {
  if (student.score >= 80) {
    return student; // val that coerces to true
  }

  // another way
  // if (student.score >= 80) return student;

  // another way
  // return student.score >= 80;
});
console.log(highScores);

// find
// we get back obj (cuz our items in studentData are objects)
// - find specific id in array
// - assign to 'specificId' and log
const specificId = studentsData.find(function (student) {
  return student.id === 3;
});
console.log(specificId); // returns an object
// {id: 3, studentName: 'sachin', score: 30, favSub: 'History', age: 20, …}

// reduce
// - sum all scores with reduce
// - divide by length of the student array
// - assign to 'averageScore' and log

const averageScore = studentsData.reduce(function (acc, curr) {
  // print score of the current student
  console.log(`Current:${curr.score}`);

  // calc total
  //   acc += curr.score;
  console.log(`Total:${acc}`);

  // average
  const avg = acc / studentsData.length;
  console.log(`Average is : ${avg}`);

  return acc; // (do not ret avg here else ansers will change)
}, 0);

console.log(averageScore);

// list fav subs using reduce
// {
//   english: 1;
//   history: 1;
//   math: 3;
// }
// assign to survey and log
console.log("=======================================");
const survey = studentsData.reduce(function (acc, curr) {
  const fav = curr.favSub;

  if (acc[fav]) {
    acc[fav] += 1;
  } else {
    acc[fav] = 1;
  }
  // Note: we can also do -> curr[fav] += 1, since we are returning acc, we do with it;

  return acc;
}, {});

console.log(survey);
