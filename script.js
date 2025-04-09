// function sayHello(){
//     let you = prompt("What is your name");
//     console.log("Helllo" + you + "!");
// }
// sayHello();

// let varContainingFunction = function(){
//     let varInFunction="I'm in a function";
//     console.log("hi there!",varInFunction);
// };
// varContainingFunction();

// function tester(p1,p2){
//     return p1+" "+p2;
// }
// const ag1 = "Arguments1";
// const ag2 = "Arguments2";
// console.log(tester(ag1,ag2));

// function addtwonumbers(x,y){
//     console.log(x+y);
// }
// let x1 = parseInt(prompt("Ente rthe first number"));
// let x2 = parseInt(prompt("Enter the second number  "));
// addtwonumbers(x1,x2);

// function addtwonumbersdefault(x,y=3){
//         console.log(x+y);
// }
// addtwonumbersdefault(4,5);

// function addtwonumbersmoreargument(x,y=3){
//     console.log(x+y);
// }
// addtwonumbersmoreargument(4,4,5,3);

// arrow functiins are great for sending functions around as parameters and using shorter notations

// (p1,p2) => console.log(p1+p2);

// () => console.log();

// p1 => console.log(p1);

// (p1,p2) =>{
//     console.log(p1,p2);
// };

// x => console.log(x);

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Greet ");

// let addtwonumberswitharrowfunction = (x,y) => console.log(x+y);
// addtwonumberswitharrowfunction(5,4)

// const arr = ["squirrel","alpaca","nuddy"];
// arr.forEach(e=> console.log(e));

// let spread = ["so","much","fun"];
// let message = ["Javascript","is",...spread,"and","Very","powerful"];
// console.log(message);

// spread function position is function calling

// function addtwonumbersUsingSpread(x,y){
//     console.log(x+y);
// }
// let arr =[4,5];
// addtwonumbersUsingSpread(...arr);

// function addFourNumber(x,y,z,w){
//     console.log(x+y+z+w);
// };
// let arr = [5,9];
// let arr2 = [6,7];
// addFourNumber(...arr,...arr2);

// rest operator  usinf in fucntion defition
// function someFunction(p1,p2){
//     console.log(p1,p2);
// }
// someFunction("Hi", "There ","How are you ");

// function someFunctionUsingRest(p1,...p2){
//     console.log(p1,p2);
// }
// someFunctionUsingRest("Hi", "There ","How are you ");

// Returning function values
// unintialized variable return undefined value
// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let result = addTwoNumbers(4,5);
// console.log(result);

// let addTwoNumbers = (x,y) =>(console.log(x+y));
// console.log(addTwoNumbers(4,5));

// let addTwoNumbers = (x,y) =>(x+y);
// console.log(addTwoNumbers(4,5));

// let resultarr = [];
// for(let i=0;i<10;i++){
//     let result = addTwoNumbers(i,i*2);
//     resultarr.push(result);
// }
// console.log(resultarr)

// Variables scope in function

// function testAvailiability(x){
//     console.log("Avialable here :",x);
// }
// testAvailiability("Hi");
// console.log("Not Avaiable here: ",x);

// function testAvailiability(){
//     let y = "Local Variable"
//     console.log("Avialable here :",y);
// }
// testAvailiability();
// console.log("Not Avaiable here: ",y);

// function testAvailiability(){
//     let y = "I'll return";
//     console.log("AVailable here:",y);
//     return y;
// }
// let z = testAvailiability();
// console.log("Outside the function: ",z);
// console.log("Not Avaiable here: ",y);

// let versus var variable

// function doingStuff(){
//     if(true){
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x = "local";
//     }
// }
// doingStuff();

// constant scope 

// function doingStuff(){
//     if(true){
//         const x ="Local";
//         console.log(x);
//     }
//     console.log(x);
// }
// doingStuff();

// global variable

// let globalvariable = "Accessible Everywhere";
// console.log("Outside Function ",globalvariable);
// function creatingNewScope(x){
//     console.log("Acces to global vars inside function ",globalvariable);
// }
// creatingNewScope("Some parameter");
// console.log("Still Available",globalvariable);

// let x = "global"
// function doingStuff(){
//     let x = "local";
//     console.log(x);
// }
// doingStuff()
// console.log(x);

// let x = "global";
// function doingStuff(x){
//     console.log(x);
// }
// doingStuff("param");
// console.log(x);

// function confuseReader(){
//     x = "Guess my scope";
//     console.log("Inside the function ",x);
// }
// confuseReader();
// console.log("Outside the fuction ",x);

// Immegiately Invoked Fuction Expression (IIFE is a way of expressing a function so that it gets invoked immediately. It is anonymous, it doesnt have a name, and it is self-executing

// (function () {
//     console.log("IIFE");
// })
// ();

// (()=>{
//     console.log("run right away");
// })();

// (function (x,y){
//     console.log(x+y);
// })(4,5);

// Recursive Function 

// function getRecursive(nr){
//     console.log(nr);
//     if(nr>0){
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

// function logRecursive(nr){
//     console.log("Started Function ",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//     }
//     else{
//         console.log("DOne with recursion");
//     }
//     console.log("Ended function",nr);
// }
// logRecursive(3);