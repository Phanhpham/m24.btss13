"use strict";
class Eployee {
    constructor(name) {
        this.name = name;
    }
}
// cachs khoi tao doi tuong abstraction
// them tu khoa abstract vao dau class
// let epm1 = new Eployee("hfdfe");
//emp1 duoc goi la 1 intance cua class Employee
// doi voiw abstract thi khong cho phep khoi tao doi tuong
/*
    tao 1 class con ke thua class Eployee
    implement : trien khai
    bat buoc phai trien khai tat ca phuong thuc
*/
class Std extends Eployee {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    getFullName() {
        return;
    }
    getAge() {
    }
}
// class PersonA{
//     name: string;
//     constructor(name:string){
//         this.name = name;
//     }
// }
// class Per1 extends PersonA{
//     // nếu triển khai phương thức của class cha thì gọi là và overrding (ghi đè phương thức)
// }
