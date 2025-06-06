// // In case of object key can be of only of type string
// // But in map it can be of any type

// // Creation of map

// // const fruits = new Map([["apples",500],["Bananas", 300],["oranges",200]]);
// // console.log(fruits);

// // Using Set Methods

// const fruits = new Map();
// fruits.set("Apples",500);
// fruits.set("Bananas",200);
// fruits.set("Oranges",100);
// console.log(fruits);
// fruits.set("Apples",600);
// console.log(fruits);

// // Get Methods

// console.log(fruits.get("Apples"));

// // type methods 

// console.log(typeof(fruits));
// console.log(typeof fruits);

// // Map.size

// console.log(fruits.size);

// // Delete Methods

// // fruits.delete("Apples");
// console.log(fruits.size);
// console.log(fruits);

// // Clear Methods

// // fruits.clear();
// // console.log(fruits);

// // Map.has()

// console.log(fruits.has("Bananas"));

// // Map.forEach()

// let text = "";
// fruits.forEach(function(values,key){
//     text += key +'='+ values + " ";
// })
// console.log(text);

// // Map.entries()

// let newtext = "";
// for(const x of fruits.entries()){
//     newtext +=x+" "; // delimiter which extinguish one elements from another element
// }
// console.log(newtext);

// // Map.keys()

// let newkeys = "";
// for(const x of fruits.keys()){
//     newkeys +=x+" ";
// }
// console.log(newkeys);

// // Map.values()

// let newvalues = "";
// for(const x of fruits.values()){
//     newvalues +=x+" ";
// }
// console.log(newvalues);

// let newvaluestotal = 0;
// for(const x of fruits.values()){
//     newvaluestotal +=x;
// }
// console.log(newvaluestotal);

// // Objects as Keys

// const apples = {name:'Apples'};
// const bananas = {name:'Bananas'};
// const oranges = {name:'Oranges'};

// const fruits = new Map();

// fruits.set(apples,500);
// fruits.set(bananas,200);
// fruits.set(oranges,100);

// console.log(fruits);

// console.log(fruits.get("apples"));
// console.log(fruits.get(apples));

// Destructuring 

// const person = {
//     firstName: "Sameer",
//     lastName: "Maurya",
//     age: 20
// };
// Order of the object does not matter
// let {firstName, lastName} = person;
// let {lastName, firstName} = person;
// console.log(firstName);
// console.log(lastName);
// Destucting does not change the original object

// let {firstName, lastName, country="India"} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(country);

// // allias creation

// let {lastName: name} = person;
// console.log(name);

//// Sana Will tell from here

//String Destructuring
// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5);

// const fruits=["Bananas","Oranges","Apples","Mangoes"];
//let[fruits1,fruits2]=fruits;
// console.log(fruits1,fruits2);
// let[fruits1,,,fruits2]=fruits;
// console.log(fruits1,fruits2);
// let{[0]:fruits1,[3]:fruits2}=fruits;
// console.log(fruits1,fruits2);

//Rest property=store all remaining value into new array
// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers;
// console.log(a,b,...rest);

//Destrcturing in Map
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);

//swaping the two elements
// let firstName="sana";
// let lastName="saifi";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName,lastName);

//JavaScript Exponential
// let x=5;
// let z=x**2
// console.log(z);
// let p=Math.pow(x,2);
// console.log(p);
// console.log(x**=2);

//Array includes()=it gives boolean value
// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// console.log(fruits.includes("Mangoes"));
// console.log(fruits.includes("Bananas",3));

//Trailing commas=it gives the teminal point and only use one comma
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// console.log(arr.length);

// const person={
//     firstName: "Sana",
//     lastName: "Saifi",
//     age:20,
// }
// console.log(person);

//example of sparsh matrices
// const person={
//     firstName: "Sana",
//     ,
//     age:20,
// }
// console.log(person);