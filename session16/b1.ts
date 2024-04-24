abstract class Shape1 {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getSize(): void;

  getName(): string {
    return this.name;
  }
}

class Rectangle extends Shape1 {
  private width: number;
  private height: number;

  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
   
}
  getName(): string {
    return super.getName();
}
  getSize(): void {
    console.log("chieu rong:", this.width);
    console.log("chieu dai:", this.height);
  }
}
const rectangle = new Rectangle("hinh chu nhat", 9, 10);
console.log(rectangle.getName());
rectangle.getSize();
