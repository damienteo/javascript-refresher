import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// var -> function
// let -> block (should use let keyword when you need to re-assign variables)
// const -> block

// function sayHello() {
// 	for (var i = 0; i < 5; i++) {
// 		console.log(i);
// 	}
// 	console.log(i);
// }

// sayHello();
// //values stored in var are still accessible outside of the curly braces

// function sayHello() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 	}
// 	console.log(i);
// }

// sayHello();
// //values stored in let are also available within the curly braces block

// const x = 1;
// x = 2;
// //x is now read-only, cannot be re-defined

//objects in javascript are collections of key-value pairs

// const person = {
// 	name: 'john',
// 	walk: function(){}
// 	talk() {} //easier way to define method with ES6
// }

// walk is a method within the person object.

// person.talk();
// person.name = '';
// person['name'] = 'John';
// //We use bracket when we don't know ahead of time what property or method we are going to access.

// const targetMember = 'name';
// person[targetMember.value] = 'John';

// const person = {
// 	name: 'john',
// 	walk: function(){
// 		console.log(this);
// 	}
// }

// person.walk();
//this will refer to const person

// const walk = person.walk;
// walk(); //this will be undefined

//if we call a function as a method in an object, 'this' will be a reference to the object. If we call a function as a standalone, 'this' will refer to the window

//The bind method will return a new instacne of the function, and set 'this' to point to the object.

// const walk = person.walk.bind(person);
// walk(); 

// const square = function(number) {
// 	return number*number;
// }

// const square = (number) => {
// 	return number*number;
// }

// const square = number => {
// 	return number*number;
// }

// const square = () => {
// 	return number*number;
// } //no paremeters

// const square = number => {
// 	number*number;
// }

// const square = number => number*number;

// console.log(square(5));

// const jobs = [
// 	{ id: 1, isActive: true },
// 	{ id: 2, isActive: true },
// 	{ id: 3, isActive: false }
// ];

// // const activeJobs = jobs.filter(function(job){return job.isActive});

// const activeJobs = jobs.filter(job => job.isActive);

// arrow functions do not re-bind 'this'

// const person  = {
// 	talk() {
// 		console.log("this", this);
// 	}
// }

// person.talk();
//'this' will refer to the object

// const person  = {
// 	talk() {
// 		setTimeout(function() {
// 			console.log("this", this);
// 		}, 1000);
// 	}
// }

// person.talk();
// 'this' will refer to window, sd talk() will be a standalone function



// const person  = {
// 	talk() {
// 		var self = this;
// 		setTimeout(function() {
// 			console.log("self", self);
// 		}, 1000);
// 	}
// }

// person.talk();
//one way to settle the 'this' issue

// const person  = {
// 	talk() {
// 		setTimeout(() => {
// 			console.log("this", this);
// 		}, 1000);
// 	}
// }

// person.talk();
// or we can use the arrow function, which does not re-bind the 'this' keyword

// const colors =['red', 'green', 'blue'];

// // const items = colors.map(function(color) {
// // 	return ('<li> + color + </li>')
// // });

// const items = colors.map(color => `li>${color}</li>`);
// //${} is an argument placeholder. 
// console.log(items);

// const address = {
// 	street: '',
// 	city: '',
// 	country: ''
// }

// const street = address.street;
// const city = address.city;
// const country = address.country;

// const { street, city, country } = address; // this line is equivalent to the previous three lines

// const { street: st } = address;
// const st = address.street;
// // this is objectd destructuring

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combine = first.concat(second); //old way of combining

// // const combine = [...first, 'a', ...second, 'b']; 
// //the spread operator is used with '...'. it also allows us to add additional elements in the center, as well as other places.

// //Using the spread operator, we can also clone arrays.

// const clone = [...first];
// console.log(first);
// console.log(clone);

// const first = { name: 'John' };
// const second = { job: 'Driver'};

// const combined = {...first, ...second, location: 'Earth'};

// console.log (combined);

// const person = {
// 	name: "John",
// 	walk() {
// 		console.log("walk");
// 	}
// }

// const person2 = {
// 	name: "John",
// 	walk() {
// 		console.log("walk");
// 	}
// } //duplication of the wlak method

// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	walk() {
// 		console.log("walk");
// 	}
// }

//for class, the first letter is capital

// const person = new Person('John');

// console.log(person);
// person.walk();

// const person2 = new Person('James');
// console.log(person2);

// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	walk() {
// 		console.log("walk");
// 	}
// }

// class Teacher {
// 	teacher() {
// 		console.log("teacher");
// 	}
// }

//All teachers should be able to walk, but how? We can use inheritance or composition.

//We can have the teacher class inherit from the person class.

//we  can also import external modules

// import { teacher } from './teacher';
//curly braces are use to import named exports. If we have defined a class as a default export, we can remove the curly braces.
import Teacher, { promote } from './teacher';

const teacher = new Teacher ('John', 'phd');

console.log(teacher);
teacher.teach();
teacher.walk();

//Default = import ... from '';
//Namedt = import { ... } from '';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
