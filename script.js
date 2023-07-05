//complete this code
class Person {
	constructor(name, age) {
		this._name = name,
		this._age = age
	}
	get name() {
		return this._name;
	}
	set age(age) {
		this._age = age;
	}
}

class Student extends Person {
	study() {
		console.log(`${this.name} is studing`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

const person = new Person("Prasad", 24);
console.log(person.name);
person.age = 25;

const student = new Student("jakob", 24);
console.log(student.name);
student.study();

const teacher = new Teacher("Dom", 24);
console.log(teacher.name);
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
