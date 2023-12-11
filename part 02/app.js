//---------template strings-using backticks----------

// console.log(`My
// name is
// SITHUM JEEVANTHA`);

// //******************* */
// const firstName = "Sithum";
// const lastName = "Jeevantha";

// function info() {
//   return `My name is ${firstName} ${lastName}`;
// }

// console.log(`${info()}`);

//
//
//

//---------Arrow functions( shorter way to define a function )----------

// function greet(name) {
//   return `Hello ${name}`;
// }

// const greet = (name) => `Hello ${name}`;
// console.log(greet("Sithum"));

// const double = (num) => num * 2;
// console.log(double(5));

// setTimeout(function () {
//   console.log("Hello");
//   setTimeout(function () {
//     console.log("I am Sithum");
//     setTimeout(function () {
//       console.log("I am a web developer");
//       setTimeout(function () {
//         console.log("I am a javascript developer");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// setTimeout(() => {             //arrow function
//   console.log("Hello");           //setTimeout(function(){},2000)
//   setTimeout(() => {
//     console.log("I am Sithum");
//     setTimeout(() => {
//       console.log("I am a web developer");
//       setTimeout(() => {
//         console.log("I am a javascript developer");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

//
//
//

//---------enhanced objecat literals(syntax for defining objects)----------

// function user(name, age, work) {            //function constructor
//   return {                                  //object
//     name, //name:name
//     age, //age:age
//     work, //work:work
//     intro() {         //intro:function(){}
//       return `My name is ${name} and I am ${age} years old. I am a ${this.work}`;
//     },
//   };
// }

// user1 = user("Sithum", 21, "Web Developer");
// user2 = user("jeevantha", 28, "Web Developer");
// console.log(user1.intro());

//

// const lib = {                   //lib is an object
//   sum: (a, b) => a + b,         //sum is a function
//   sub: (a, b) => a - b,
//   mul: (a, b) => a * b,
//   div: (a, b) => a / b,
// };

// console.log(lib.sum(5, 5));
// console.log(lib.sub(5, 5));
// console.log(lib.mul(5, 5));
// console.log(lib.div(5, 5));

//
//
//

//---------default function parameters-----------

// function countTO5(count = true) {
//   if (count === true) {
//     for (let i = 1; i <= 5; i++) {
//       console.log(`count is ${i}`);
//     }
//   }
// }
// countTO5();

// function rating(rate = 0) {
//   if (rate === 1) {
//     console.log("Bad");
//   } else if (rate === 2) {
//     console.log("Good");
//   } else if (rate === 3) {
//     console.log("Very Good");
//   } else if (rate === 0) {
//     console.log("give a value");
//   } else {
//     console.log("Invalid");
//   }
// }
// rating(3);
// rating(2);
// rating(1);
// rating();

//
//
//
//

//---------spread opearators(...)-----------------------------

// function nikan(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }
// nikan(1, 2, 3, 4);

// const arr = ["red", "green", "blue", "yellow"];
// nikan(...arr); //spread operator

//
// const num1 = ["one", "two", "three", "four"];
// const num2 = ["five", "six", "seven", "eight"];
// const num3 = [...num1, ...num2, "nine", "ten"];
// console.log(num3);

//

// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const obj3 = { obj1, obj2 };
// const obj3 = { ...obj1, ...obj2 };     //spread operator
// console.log(obj3);

//

// const person = {
//   name: "Sithum",
//   age: 21,
//   work: "Web Developer",
// };
// const clone = { ...person };  //clone is a new object
// console.log(clone);

//

//
//
//
//

//--------rest parameter syntax,allows multiple arguments(...)-----------------------------

// function user(name, ...args) {  //rest parameter
//   console.log(name);
//   console.log(args);
// }
// user("Sithum", 21, "Web Developer", "Sri Lanka");

//
//
//
//

//--------destructing(unpack values from data structures)-----------------------------

// const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [a, b, c, d, e, f, g, h, i, j] = foo;
// console.log(a);
// console.log(b);
// console.log(g);
// console.log(j);

// let a, b;
// [a = 12, b = 56] = [100];
// console.log(a);
// console.log(b);

// function f() {
//   return [1, 2, 3];
// }
// const [a, , b] = f();
// console.log(a);
// console.log(b);

// const [a, ...b] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a);  //1
// console.log(b);  //[2,3,4,5,6,7,8]

// const student = {
//   name: "Sithum",
//   age: 21,
//   work: "Web Developer",
//   country: "Sri Lanka",
// };
// const { name, age, ...work } = student;
// console.log(name);
// console.log(age);
// console.log(work);

// const num = { x: 100, y: 200 };
// const { x: newx, y: newy } = num;  //newx and newy are new variables
// console.log(x);  //error
// console.log(y);  //error
// console.log(newx);  //100
// console.log(newy);  //200

// const student = {
//   name: "Sithum",
//   age: 21,
//   work: "Web Developer",
//   country: "Sri Lanka",
// };
// function user({ name, age, work, country }) {
//   console.log(`name ${name}`);
//   console.log(`age ${age}`);
//   console.log(`work ${work}`);
//   console.log(`country ${country}`);
// }
// user(student);

// let options = {
//   title: "Menu",
//   items: ["Item1", "Item2"],
// };
// function showMenu({
//   title = "Untitled",
//   width: w = 200,
//   height: h = 100,
//   items: [item1, item2],
// }) {
//   console.log(`${title} ${w} ${h}`);
//   console.log(`${item1} ${item2}`);
// }
// showMenu(options);

//------nested destructing----------------

// const songs = [
//   { name: "song1", singer: "singer1", duration: 3.45 },
//   { name: "song2", singer: "singer2", duration: 4.45 },
//   { name: "song3", singer: "singer3", duration: 5.45 },
//   { name: "song4", singer: "singer4", duration: 2.45 },
//   { name: "song5", singer: "singer5", duration: 5.25 },
// ];
// const [, , , { name, singer: s }] = songs;
// console.log(name);
// console.log(s);

//
//
//
//

//--------ternary operator(condition?exprTRUE:expreFALSE)-----------------------------
// function checkPassword(password) {
//   return password === 1 ? "Correct" : "Incorrect";
// }
// console.log(checkPassword(2));

//
//
//
//

//--------for in--------------------
// let person = {
//   name: "Sithum",
//   age: 21,
//   work: "Web Developer",
//   country: "Sri Lanka",
// };
// for (let key in person) {
//   console.log(key, person[key]);
// }

//
//
//
//

//--------for-of------------------
//helps to loop through an array

// let person = ["sithum", "koshal", "nimanthi", "samantha", "samanthi"];
// for (let key of person) {
//   console.log(key);
// }

// const name = "jellow";
// for (const char of name) {
//   console.log(char);
// }

//
//
//
//----------------------forEach--------------------------
//helps to loop through an array

// const colors = ["red", "green", "blue", "yellow"];
// colors.forEach((color) => console.log(color));

// const words = ["sithum", "koshal", "nimanthi", "samantha", "samanthi"];
// words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.slice(1);
// });
// console.log(words);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// numbers.forEach((number) => {
//   sum += number;
// });
// console.log(sum);

//or we can use following method
// function adder(num) {
//   sum += num;
// }
// numbers.forEach(adder);
// console.log(sum);

//
//

//--------------------map() create a new array---------------------------
//helps to create a new array by performing a function on each element in an array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr = numbers.map((number) => number * 2);  //map() returns a new array
// console.log(numbers);
// console.log(arr);

//
//
//
//----------------------------filter------------------------------
//helps to filter out elements in an array that matches a condition

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr = numbers.filter((number) => number % 2 === 0); //filter() returns a new array
// console.log(numbers);
// console.log(arr);

//
//
//
//----------------------------find()------------------------------
//helps to find the first element in an array that matches a condition

// const people = [
//   { name: "sithum", age: 21 },
//   { name: "koshal", age: 22 },
//   { name: "nimanthi", age: 23 },
//   { name: "samantha", age: 24 },
//   { name: "samanthi", age: 25 },
// ];
// const person = people.find((person) => person.age === 24);
// console.log(person);

//
//
//
//---------------------every() and some()---------------
//every() returns true if all elements in an array pass a test
//some() returns true if at least one element in an array pass a test

// const people = ["sithum", "kos", "nimanthi", "samantha", "samanthi"];
// const all = people.every((person) => person.length > 4);
// console.log(all);  //false
// const some = people.some((person) => person.length > 4);
// console.log(some);  //true

//
//
//
//---------------------reduce()---------------
//reduce() executes a reducer function on each element of an array, resulting in a single value

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = numbers.reduce((p, c) => {
//   //reduce() returns a single value
//   console.log(`previos value is ${p}`);
//   console.log(`current value is ${c}`); //p=previous value,c=current value
//   return p + c;
// }, 0);
// console.log(sum); //45

//
//
//
//------------------------map-----------------------------------

// const map = new Map(); //map is an object
// const key1 = "name";
// const key2 = {};
// const key3 = function () {};
// map.set(key1, "Sithum");
// map.set(key2, "Koshal");
// map.set(key3, "This is a function");
// console.log(map);
// console.log("===============================");
// console.log(map.keys());
// console.log(map.values());
// for (let [key, value] of map) {
//   console.log(`${key} : ${value}`);
// }
//
// for (let key of map.keys()) {
//   console.log(key);
// }
//
//
//
//
//
//-------------------------------sets--------------------------------
// const values = [1, 2, 3, 4, 5, 66, 6, 6, 6, 8];
// const set1 = new Set(values);
// set1.add("apple");
// console.log(set1.has("banana"));
// set1.delete("apple");
// console.log(set1);

// for (let i of set1) {
//   console.log(i);
// }
//
//
//
//
//---------------symbols(unique and immutable primitive data types)----------------

// const symbol1 = Symbol("name");
// const symbol2 = Symbol("name");
// console.log(typeof symbol1);
// const obj = {};
// obj[symbol1] = "value 1";
// obj[symbol2] = "value 2";
// console.log(obj);
