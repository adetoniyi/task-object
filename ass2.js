#!/usr/bin/env node

let student = {
  name: "Adeniyi Pelumi",
  age: 37,
  grade: "2nd Grade"
};

student.age = 27;
student.school = "Ekiti State University";
delete student.grade;
console.log(student);

