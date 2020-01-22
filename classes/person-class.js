'use strict';

class PersonRules {
    constructor(obj){
        this.id = obj.id;
        this.name = obj.name;
        this.age = obj.age;
        this.children = obj.children;
    }
    required(obj){
        if(obj.id, obj.name, obj.age){
            this.type(obj.id, obj.name, obj.age);
            return true;
        } else {return false};
    }
    type(obj){
        let test = [obj.id, obj.name, obj.age];
        let typeTest = false;
        test.forEach(ele => {
            switch(typeof ele){
                case 'string':{
                    return typeTest = true;
                }
                case 'number':{
                    return typeTest = true;
                }
                default: {
                    return typeTest = false;
                }
            }
        });
        return typeTest;   
    }
};

const susanObj = {
    id: '123-45-6789',
    name: 'Susan McDeveloperson',
    age: 37,
    children: [],
};
const fredObj = {
    id: 38,
    name: 'Freddy McCoder',
    children: [],
};

module.exports = {PersonRules, susanObj, fredObj};
