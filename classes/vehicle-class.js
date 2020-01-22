'use strict';

class Car {
    constructor(name){
        this.name = name;
    }
    drive(){
        return 'Moving Forward';
    }
    stop(){
        return 'Stopping';
    }
}

class Motorcycle extends Car {
    wheelie(){
        return 'Not Safe';
    }
}

module.exports = {Car, Motorcycle};