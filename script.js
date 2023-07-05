//complete this code
class Person {
	constructor(name, age) {
		this.name = name,
		this.age = age
	}
	get name() {
		return this.name;
	}
	set age() {
		this.age = age;
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
	const student = new Student("John Doe", 20);
    const teacher = new Teacher("Jane Smith", 35);

    console.log(student.name); // Output: John Doe
    student.age = 21;
    console.log(student.age); // Output: 21

    student.study(); // Output: John Doe is studying.
    teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
