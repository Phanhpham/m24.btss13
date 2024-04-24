abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log("các loai cong viec",this.type);
    }
    abstract calculateSalary(): number;
}
class FullTime extends Job {
    constructor(){
        super("Full-time");
    }
    calculateSalary(): number {
        return 10.000; 
    }
}

class PartTime extends Job {
    private workingHour: number;

    constructor(workingHour: number){
        super("Part-time");
        this.workingHour = workingHour;
}
calculateSalary():number {
    return 30000 * this.workingHour;
}
}