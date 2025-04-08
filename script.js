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
