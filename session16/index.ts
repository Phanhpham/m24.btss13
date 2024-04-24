abstract class Eployee{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    // khai bao phuong thuc doi voi abstract
    // getFullName (){
    //     return this.name;
    // }
    abstract getFullName():void;
    abstract getAge():void;
    // doi voi phuong thuc trong abstract thi chi ten phuong thuc, kieu du lieu tra ve va khong co phan body
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
class Std extends Eployee{
    private age :number;
    constructor(name:string, age:number){
        super(name);
        this.age = age;
    }
    getFullName(): void {
        return 
    }
    getAge(): void {
        
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