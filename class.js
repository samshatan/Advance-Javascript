// This development reduces the complexitity of application and increased maintainability by a huge margin
// Object-Oriented Programming
// OOP is a very programming paradigm wherein code is structed in objects, leading to more maintainable and reusable code
// class ClaasName{
//    constructor(prop1, prop2){
//        this.prop1 = prop1;
//        this.prop2 = prop2;
//    }
// }
// let obj = new ClaasName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);
//  // This 'this' keyword refers to the objext it belongs to, so it is first property of the instance of ClassName

// class Dog{
//     constructor(dogName, Weight, Color, Breed){
//         this.dogName = dogName;
//         this.Weight = Weight;
//         this.Color = Color;
//         this.Breed = Breed;
//     }
// }
// let dog = new Dog("JavaScript",2.4,"Brown","chihuahua");
// console.log(dog);
// console.log(dog.dogName, "is a",dog.Breed, "and weighs",dog.Weight);

// Classes 
// It is the convention to start class names with a capital letter.

// elements of class:-

// Constructors

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("Sameer","Maurya");
// console.log("Hi",p.firstname);

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("Sameer");
// console.log("Hi",p.firstname,p.lastname);

// class Person{
//     constructor(firstname,lastname="Maurya"){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("Sameer");
// console.log("Hi",p.firstname,p.lastname);

// Methods
// User Defined Functions on a class are called methods. When defining these methods, we don't use the function keyword

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstname);
//     }
// }
// let p = new Person("Sameer","Maurya");
// console.log("Hi",p.firstname,p.lastname);
// p.greet();

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstname);
//     }
//     compliment(name,object){
//         return "That's a wonderful "+object+", "+name;
//     }
// }
// let p = new Person("Sameer Maurya");
// let compliment = p.compliment("Tanmay","Maurya");
// console.log(compliment);

// Properties 
// Properties, Sometimes also called fields, hold the data of the class
// attributes can only be acces through methods

// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
    
// }
// let p = new person("Sammer", "Maurya");
// console.log(p.firstname);

// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         if(firstname.startsWith("M")){
//             this.#firstname = firstname;
//         }
//         else{
//             this.#firstname = "M"+firstname;
//         }
//         this.#lastname = lastname;
//     }
// }
// let p = new person("Sameer", "Maurya");
// console.log(p.firstname);

// Getters and setters  these are type of attributes

// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
    
//     get firstname(){
//         return this.#firstname;
//     }
    
//     set firstname(firstname){
//         this.#firstname = firstname;
//     }

//     get lastname(){
//         return this.#lastname;
//     }

//     set lastname(lastname){
//         this.#lastname = lastname;
//     }
// }
// let p = new person("Sameer","Maurya");
// console.log(p.firstname);
// console.log(p.lastname);
// p.firstname="Tanmay";
// console.log(p.firstname);
// p.lastname="Maurya";
// console.log(p.lastname);

// Inheritance
// It is the concept that classes can have child classes that inherit the properties and methods from the parent class
// instance variable is object
// this keyboard to intialize instance variable
// On object creation constructor is called

// class vehicle{
//     constructor(color, currentSpeed, maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//         console.log("Moving at", this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }

// class motorcycle extends vehicle{
//     constructor(color, currentSpeed, maxSpeed, fuel){
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel");
//     }
// }

// With the extends keyword we specify that a certain class is the child of another class

// let obj = new motorcycle("Red", 0, 180, "gasoline");
// console.log(obj.color);
// obj.accelerate(50);
// obj.move();

// We cannot acces any motorcycle specific properties or methods in our vechiles class
// This is because not all vechiles are motorcycles

// Prototypes
// A prototyoes is the mechanism in javascript that makes it possible to have objects.
// When Nothing is specified when creating a class, the objects inherit from the Object.prototype Prototype;

class person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(){
        console.log("Hi there");
    }
}
person.prototype.intro = function (){
    console.log("Hi I'm", this.firstname);
};
person.prototype.color = "Green";

let obj = new person("Sameer", "Maurya");
obj.intro();
obj.greet();
console.log(obj.color);