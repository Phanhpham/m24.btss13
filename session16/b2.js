"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log("các loai cong viec", this.type);
    }
}
class FullTime extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
        return 10.000;
    }
}
class PartTime extends Job {
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
