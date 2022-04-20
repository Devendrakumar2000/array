let studentRecords = [  
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
] ;

// "Question 1 

let namesOfStudents = studentRecords.map(x => x.name.toUpperCase());
console.log(namesOfStudents);


//"Question 2


let getDetails = studentRecords.filter(x => x.marks > 50);
console.log(getDetails);

//Question 3
let getDetailsId = studentRecords.filter((x) =>x.marks > 50 && x.id > 120);
console.log(getDetailsId);

//Question 4

let totalMarks = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log(totalMarks);

//Question 5

let nameOfFirst = studentRecords.filter(x => x.marks > 50);
for(let i = 0; i<nameOfFirst.length; i++){
console.log(nameOfFirst[i].name);
}

// Question 6

let checkId = studentRecords.filter(x => x.id > 120);
let sumMarks = checkId.reduce((accu, curr) => accu + curr.marks,0);
console.log(sumMarks);

//Question 7

for(let x of studentRecords){
if(x.marks<50){

x.marks = x.marks + 15;
}
}

let checkMarks = studentRecords.filter(x => x.marks > 50);
let addMarks = checkMarks.reduce((accu, curr) => accu + curr.marks,0);
console.log(addMarks);


//Question 8

let student1 = {
name : "Srikanth",
class : 12,
roll_no : 254
}

let student2 = {
name : "Prudvi",
class : 12,
roll_no : 251
}
let student3 = {
name : "Santhosh",
class : 12,
roll_no : 252
}

let student4 = {
name : "Bhanu",
class : 12,
roll_no : 255
}
let student5 = {
name : "Manasa",
class : 12,
roll_no : 256
}

let student6 = {
name : "Prem Raj",
class : 12,
roll_no : 291
}
let allStudents =[{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(allStudents);