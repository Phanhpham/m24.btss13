"use strict";
/*
Abstract Method:
Abstract method là một phương thức trong một lớp trừu tượng mà không có cài đặt (implementation) cụ thể trong lớp đó.
Khi một lớp chứa một phương thức trừu tượng, lớp đó phải được đánh dấu là abstract.
Abstract method được định nghĩa để yêu cầu các lớp con kế thừa phải triển khai (implement) nó.
Abstract method thường được sử dụng khi chúng ta muốn định nghĩa một hành động chung cho các lớp con, nhưng cách thực hiện của nó có thể khác nhau.
*/
// VÍ DỤ:
class Shape2 {
}
class Rectangle2 extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius2) {
        super();
        this.radius2 = radius2;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
/**
 Method:
Method là một hành động hoặc chức năng cụ thể của một đối tượng hoặc lớp.
Method có thể có một cài đặt (implementation) cụ thể trong lớp đó.
Method được sử dụng để thực hiện các hành động cụ thể và có thể được gọi từ bên ngoài để thực hiện các tác vụ cụ thể.
*/
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
}
const calculator = new Calculator();
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
