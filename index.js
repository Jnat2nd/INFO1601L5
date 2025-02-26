//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course){
  let avgGrade = 0,sum = 0;
  for (let item of student.transcript){
    if (item.course === course){
      for (let grades of item.grades){
        sum += grades;
      }
      avgGrade = sum/(item.grades.length);
      return avgGrade;
    }
  }
  return -1;
}

function getAssignmentMark(student, course, num){
  for (let item of student.transcript){
    if (item.course === course){
      let mark = item.grades[num - 1];
      return mark;
      }
  }
  return -1;
}

//Given an array of students, a course code and an assignment number.
//Return the average of all the students mark for that assignment of that course.
function averageAssessment (students, courseName, assignment){
  let avgmrk, totalmrk = 0, count = 0;
  for (let student of students){
    for(let record of student.transcript){
      if (record.course === courseName){
        totalmrk += record.grades[assignment - 1];
        count += 1;
      }
    }
  }
  avgmrk = totalmrk/count;
  return avgmrk;
}

console.log(getAverageGrade(bob, 'INFO 1601'));
console.log(getAssignmentMark(paul, 'INFO 1600', 1));
console.log(averageAssessment(students, 'INFO 1603', 2));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

// for(let i=0; i< arr.length; i++){
//   console.log(arr[i])
// }

// let radius = 7;
// const pi = 3.14;

// let area = radius * radius * pi;

// console.log(area);

// let str1 ="Hello World";
// let str2 = 'Hello World';
// let str3 = `
//     hello 
//     world
// `;// template literal (backtick above tab key)

// console.log(str1, str2, str3);

// let name = "bob";
// let age = 24;

// console.log(typeof(name))//string
// console.log(typeof(age))//number

// console.log(`Hello my name is ${name}, I'm ${age} years old`);
// //Hello my name is bob, I'm 24 years old.

// console.log(`I was born in ${2020 - age}`)
// //I was born in 1966

// console.log('1' == 1); //true
// console.log(1 == true); //true
// console.log("false" == false); // "false" is not false
// console.log("false" == true); // "false" is not true either

// if("false")
//    console.log("Hello false!") //but "false" is true enough here

// console.log('1' === 1); //false
// console.log(1 === true); //false
// console.log("true" === true); //false
// console.log("\n\n");

// for(let i=0; i< 50; i++){
//   if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?
//     console.log('fizzbuzz');
//   }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
//     console.log('fizz');
//   }else if(i%5 === 0){ //no? what about just 5 then?
//     console.log('buzz');
//   }else{              //so its not divisible by 3 or 5 then
//     console.log(i);
//   }
// }

// console.log("\n\n");
// function happyPrint(string){
//   console.log("😀: "+string);
//  }
 
//  function sadPrint(string){
//   console.log("😢: "+string);
//  }
 
//  //This high-order function adds 2 parameters and passes the answer to the callback
//  function add(a, b, callback){
//     let ans = a + b;
//     callback(ans);// call the callback and pass the answer to it
//  }
 
//  //call add passing the callbacks to it
 
//  add(5, 10, happyPrint);
//  add(11, 12, sadPrint);
//  console.log("\n\n");

//   //prints current date
// function printDate(){
//   console.log(new Date().toLocaleTimeString());
// }
     
// //setInterval(printDate, 1000);

// console.log("\n\n");

// let arr = [ -5, 16, 33, 42, 103, 344];

// console.log(arr.includes(-5));//true

// arr.push(11);//adds item to the end

// console.log(arr)//[ -5, 16, 33, 42, 103, 344, 11];

// let lastItem = arr.pop();//removes last item

// console.log(lastItem, arr);//11, [ -5, 16, 33, 42, 103, 344]

// arr.unshift(22);//adds item to the front

// console.log(arr);//[22, -5, 16, 33, 42, 103, 344]

// let firstItem = arr.shift();//removes first item
// console.log(firstItem, arr);//22, [-5, 16, 33, 42, 103, 344]

// let reversed = arr.reverse();//creates a new array in reverse order 
// console.log(reversed);//[344, 103, 42, 33, 16, -5]
// console.log(arr.join('XD'));//"-5-103-16-33-344-42" joins array with provided separator

// let arr = [12, 33, 4, 5, -4, 8, 19, 25];
                
// //map() creates a new array from the elements of one without changing the old one
// function double(num){
//   return num * 2;
// }

// let doubledArr = arr.map(double); 
// console.log(doubledArr);

// function isOdd(num){
//   return num%2 !== 0; 
// }
// //Filter takes a test condition and returns only the element which 
// //make the condition true
// let odds = arr.filter(isOdd);
// console.log(odds);

// //Returns true or false if any of the elements of the array 
// //meets a specified condition
// function has5Factor(ele){
//   return ele % 5 === 0;
// }

// let hasFiveFactor = arr.some(has5Factor);
// console.log(hasFiveFactor);

// function intCompare(a, b){
//  return a - b;
// }

// //sort function must return either 0, +ve, -ve
// let ascending = arr.sort(intCompare);
// console.log(ascending);

// console.log("\n\n");

// //Create a constructor a functions which builds object for us
// function createPerson(name, height, weight) {
//   return { name: "name", height: "height", weight: "weight" };
// }

// function calcBMI(weight, height) {
//   return weight / (height * height);
// }

// function avgBMI(people) {
//   let sum = 0;
//   for (let person of people) {
//     //sum the bmi of each person
//     sum += calcBMI(person.weight, person.height);
//   }
//   //calculate average
//   return sum / people.length;
// }

// //create a collection of people
// let people = [
//   createPerson("Sally", 60, 2.5),
//   createPerson("Ben", 81, 3),
//   createPerson("Shelly", 50, 1.7)
// ];

// console.log(avgBMI(people));