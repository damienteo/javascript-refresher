import { Person } from './person.js';
// ./ refers to current folder

export function promote () {};

export default class Teacher extends Person{
	constructor(name, degree) {
		super(name);
		this.degree = degree;
	}

	teach() {
		console.log("teach");
	}
}
//whenever we add a constructor in the child class, we need to call the constructor of the parent class. super() references the parent class