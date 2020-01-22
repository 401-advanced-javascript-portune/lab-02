'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const PersonClass = require('./person-class.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const mustang = new VehicleClass.Car('Shelby Mustang');
console.log(mustang.name, mustang.drive(), mustang.stop());

const ninja = new VehicleClass.Motorcycle('Kawasaki Ninja');
console.log(ninja.name, ninja.wheelie(), ninja.stop());

//Implement for Person Class

let susanClass = new PersonClass.PersonRules(PersonClass.susanObj);
console.log(susanClass.required(susanClass));
let fredClass = new PersonClass.PersonRules(PersonClass.fredObj);
console.log(fredClass.required(fredClass));

// console.log(susanClass.type(susanClass));
