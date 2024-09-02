"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Engine started");
    }
}
const car = new Car("toyota", 'cRH', 5);
car.start();
