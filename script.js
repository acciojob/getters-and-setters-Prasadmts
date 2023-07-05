//complete this code
class Person {
	name: "prasad",
	age: "24"
}

class Student extends Person {
	study() {
		console.log(Person.name + " is studing");
	}
}

class Teacher extends Person {
	teach() {
		console.log(Person.name + " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
