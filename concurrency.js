//concurrency=asynchronous code and some points for multitasking with code.
//Callbacks=it is just a function takes the another function as an argument
// function doSomething(Callback)
// {
//     Callback();
// }
// function sayHi(){
//     console.log("Hi!");
// }
// console.log(doSomething(sayHi));

// function judge(grade){
//     switch(true){
//         case grade=="A":
//             console.log("You got an",grade,": amazing!");
//             break;
//         case grade=="B":
//             console.log("You got an",grade,": well done!");
//             break;
//         case grade=="C":
//                 console.log("You got an",grade,": alright!");
//                 break;
//         case grade=="D":
//             console.log("You got an",grade,": hmm...");
//             break;
//         default:
//             console.log("An",grade, "! what?!");
//     }
// }
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//             case score>=60:
//             grade="D";
//             break;
//         default:
//             grade="fail!";
//     }
//     callback(grade);
//     console.log("Sana You are amazing");
// }
// getGrade(95,judge);

//Callbacks become really valuable  in an asynchronous context for example  when one function is still waiting for the results of a call to the database before calling the callback function that is going to process the data.
// setInterval(encourage,500);
// function

//Promises = with promises we can organize the sequence of our code in a slightly easier to maintain way. This function needs two parameters and these parameters are callbacks.we have called them resolve and reject here.
//when resolve() is called, the promise is presumed to be successful and whatever is between the arrows is returned and used as input for the then method on the promise object.
// if reject() is called the promise failed and the catch() method on the promise object(if present) is executed with the argument of the reject()function.
// let promise= new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("Too low");
//     }
// });
// promise.then(
//     function (value){
//         console.log("Success:", value);
//     },
//     function(error){
//         console.log("Error",error);
//     }
// );

// const promise = new Promise((resolve,reject)=>{
//     //resolve("success");
//     reject("fail");
// })
// .then(value =>{
//     console.log(value);
//     return "we";
// })
// .then(value =>{
//     console.log(value);
//     return "can";
// })
// .then(value =>{
//     console.log(value);
//     return "chain";
// })
// .then(value =>{
//     console.log(value);
//     return "promises";
// })
// .then(value =>{
//     console.log(value);
// })
// .catch(value =>{
//     console.log(value);
// })

//Async and await= with the async keyword, we can make a function return a promise. this makes the promises nicer to read and look a lot like synchronous(non concurrent) code. Await keyword to wait until the promise is done. await only works in an asynchronous function.
// function saySomething(x)
// {
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve("something" +x);
//         },2000);
//     });
// }
// async function talk(x){
//     const words=await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//Event loop= javascript is a single threaded language. a thread in this context means a path of execution. if there is only a single path, this means that tasks will have to wait for one another and only one thing can happen at a time. this single executor is the event loop. it is a process that executes the actual work.
//call stack and callback queue = the event loop is a process that is constantly monitoring this call stack and whenever there are tasks to do the event loop does them one by one . the tasks on top get executed first.
// console.log("Hi There");
// add(4,5);
// function add(x,y){
//     return x+y;
// }

// console.log("Hi There");
// setTimeout(() => console.log("sorry I'm late"),1000);
// console.log(add(4,5));
// function add(x,y){
//     return x+y;
// }
//The setTimeOut() task gets outsourced to the browsers web API when its done this appers in a special place. the callback queue. when the call stack is empty, the event loop will check the callback queue for work to do.
// console.log("Hi There");
// setTimeout(() => console.log("sorry I'm late"),0);
// console.log(add(4,5));
// function add(x,y){
//     return x+y;
// }