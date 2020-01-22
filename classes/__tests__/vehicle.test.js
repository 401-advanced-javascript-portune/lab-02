'use strict';

const VehicleConstructor = require('../vehicle-constructor.js');
const VehicleClass = require('../vehicle-constructor.js');

let types = ['Constructor', 'Class'];

function getVehicle(type, vehicle) {
  switch(vehicle) {
    case 'car':
      switch(type) {
        case 'Constructor':
          return new VehicleConstructor.Car('foo');
        case 'Class':
          return new VehicleClass.Car('Mfoo');
        default:
          return {};
      }
    case 'motorcycle': {
      switch(type) {
        case 'Constructor':
          return new VehicleConstructor.Motorcycle('foo');
        case 'Class':
          return new VehicleClass.Motorcycle('Mfoo');
        default:
          return {};
      }
    }
  }
}

describe('Vehicles', () => {
  describe('Car', () => {  
    types.forEach( type => {
      let car = getVehicle(type, 'car');
      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });
      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });
      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });
      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      }); 
    });
  });

  describe(`Motorcycle`, () => {
    types.forEach( type => {
      let motorcycle = getVehicle(type, 'motorcycle');
      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });
      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });
      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });
      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });
    });
  });
});
