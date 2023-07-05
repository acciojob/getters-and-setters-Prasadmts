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
		console.log(`${student.name} is studing`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${teacher.name} is teaching`);
	}
}

const person = new Person("John", 25);
console.log(person.name);
person.age = 25;

const student = new Student("John", 30);
console.log(student.name);
console.log(student.study());

const teacher = new Teacher("Alice", 30);
console.log(teacher.name);
console.log(teacher.teach());
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
