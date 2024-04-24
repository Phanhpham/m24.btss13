"use strict";
class Student4 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students3 = [];
    }
    addStudent(student) {
        this.students3.push(student);
    }
    showStudents() {
        console.log("danh sach hoc sinh trong lớp:");
        this.students3.forEach((Student) => {
            console.log(`ID: ${Student.getId()}, Name: ${Student.getName()}`);
        });
    }
}
const students3 = [
    new Student(1, "phanh"),
    new Student(2, "Binh"),
    new Student(3, "Cuong"),
    new Student(4, "Duong"),
    new Student(5, "hai"),
    new Student(6, "phu")
];
const class1 = new Classroom();
const class2 = new Classroom();
for (const students4 of students) {
    class1.addStudent(students4);
    class2.addStudent(students4);
}
console.log("Class 1 students:");
class1.showStudents(1);
class1.showStudents(2);
class1.showStudents(3);
console.log("\nClass 2 students:");
class2.showStudents(4);
class2.showStudents(5);
class2.showStudents(6);
