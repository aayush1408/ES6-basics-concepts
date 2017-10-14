"use strict";

//Uncomment to see every concept

//Let and var 
/*
function try1(){
    var a = 50;
    if(true){
        var a=30;
        console.log(a);
    }
    console.log(a);
}
try1();

function try2(){
    let a = 30;
    if(true){
        let a = 50;
        console.log(a);
    }
    console.log(a);
}
try2();
*/

//Classes and Inheritance
/*
class User {
    constructor(username,email){
        this.username = username;
        this.email = email
    }
    static users(){
        console.log('There are 50 users');
    }
     register(){
        console.log(this.username);
    }
}
let bob = new User('bob','bob@gail.com');
bob.register();
User.users();

class Members extends User {
    constructor(username,email,password){
        super(username,email);
        this.password = password;
    }
    display(){
        console.log(this.username +' '+ this.password);
    }
}
let mike = new Members('mike','steve','motherf');
mike.display();
*/

//TEMPLATES
/*
let name = 'John';
let a = `<h1>Hello ${name}</h1>`;
document.getElementById('template').innerHTML = a;
*/

//Strings 
/*
let theString = "ES6 is very interesting";
console.log(theString.endsWith('interesting'));
console.log(theString.startsWith('My'));
console.log(theString.includes('is'));
*/

//Parameters
/*
function greeting(greet = "Hello there"){
    console.log(greet)
}
greeting();
*/

//Spread Operator
/*
let args =[1,2,3];
function display(){
    console.log(args);
}
display(...args);
*/

//Set
/*
let myArray = [10, 23, 11, 11,78];
let mySet = new Set(myArray);
mySet.add({a:1,b:2});
mySet.add('100');
mySet.delete(23);
console.log(mySet);
*/

//Maps
/*
let myMap = new Map([['a1','Aayush'],['b2','Mahesh']]);
myMap.set('c3','derek');
myMap.delete('a1');
console.log(myMap);
console.log(myMap.size);
*/

//Arrow functions
/*let add = function (a,b){
    let sum = a+b;
    console.log(sum);
}
add(2,3);
*/
/*
let add = (a,b) =>{
    let sum = a+b;
    console.log(sum);
}
add(2,3);
*/






