"use strict";
class Shape1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape1 {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getName() {
        return super.getName();
    }
    getSize() {
        console.log("chieu rong:", this.width);
        console.log("chieu dai:", this.height);
    }
}
const rectangle = new Rectangle("hinh chu nhat", 9, 10);
console.log(rectangle.getName());
rectangle.getSize();
