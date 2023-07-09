// Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false. 

const myFunc = (mark,exam) => {
  if( exam ){
    return mark > 89;
  }
  return (mark >= 89 && mark <= 100);
}

console.log(myFunc("90", "true "));
console.log(myFunc("89", "true "));
console.log(myFunc("99", "true "));