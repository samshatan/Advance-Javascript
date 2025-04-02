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

let addtwonumberswitharrowfunction = (x,y) => console.log(x+y);
addtwonumberswitharrowfunction(5,4)