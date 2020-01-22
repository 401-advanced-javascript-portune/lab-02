'use strict'

let personClass = require('../person-class.js');

let susan = new personClass.PersonRules(personClass.susanObj);
let fred = new personClass.PersonRules(personClass.fredObj);

let person = [susan, fred];


describe('Person Validator', () => {
    describe('Person Object Check', () => {
        person.forEach(ele => {
            let test = typeof(ele);
            it(`${ele.name} is an Object`, () => {
                expect(test === 'object').toBeTruthy();
            });
            it(`${ele.name} is a function`, () => {
                expect(test === 'function').toBeFalsy();
            });
            it(`${ele.name} is a string`, () => {
                expect(test === 'string').toBeFalsy();
            });
            it(`${ele.name} is a number`, () => {
                expect(test === 'number').toBeFalsy();
            });
        });
    });
    describe('Person required field check', () => {
        person.forEach(ele => {
            if(ele.id, ele.name, ele.age){
                it(`${ele.name} has required fields`, () => {
                    expect(ele.required(ele)).toBeTruthy();
                })
                it(`${ele.name} all types correct`, () => {
                    expect(ele.type(ele)).toBeTruthy();
                })
            } else {
                it(`${ele.name} does not have required fields`, () => {
                    expect(ele.required(ele)).toBeFalsy();
                })
                it(`${ele.name} mis-match a type`, () => {
                    expect(ele.type(ele)).toBeFalsy();
                })
            }
        })
    })
})