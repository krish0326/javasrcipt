// 1.  Named Function
// 2.  Anonymous Function
// 3.  Arrow Function
// 4.  Immediately Invoked Function Expression
// 5.  Constructor Function
// 6.  Generator Function
// 7.  Async Function
// 8.  Function with Default Parameters
// 9.  Rest Parameters Function
// 10. Higher-Order Function



// 1.Named Function

// function greet(age) {
//     console.log(`Hello ${age}!`);
// }

// greet("World");     // Output: Hello , World!



// 2. Anonymous Function


// const greet = function(surname,name,age) {
//     console.log(`Hello , ${name}!`);
//     console.log(`Hello , ${surname}!`);
//     console.log(`Hello , ${age}!`);
// };

// greet("vaghasiya","bhautik","21"); // Output: Hello , World!



// 3. Arrow Function

// const greet = (name) => {
//     console.log(`Hello , ${name}!`);
// };

// greet("World"); // Output: Hello , World!



// 4. Immediately Invoked Function Expression (IIFE)

// (function (name = "SwickTech") {
//     console.log("Hello, World! " + name + "!");
// })();         // Output: Hello, World!


// 5. Constructor Function

// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const personObj = new person("utsav", 20);
// console.log(personObj.name);       // Output: utsav
// console.log(personObj.age);        // Output: 17


// 6. Generator Function

// function* simpleGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = simpleGenerator();
// console.log(generator.next().value); // Output: 1
// console.log(generator.next().value); // Output: 2
// console.log(generator.next().value); // Output: 3



// 7. Async Function

// async function SayHello(name  ) {
//     return name="utsav";
// }

// SayHello().then((data) => console.log(data)); // Output: Data fetched!



// 8. Function with Default Parameters



// function greet(name = "World") {
//     console.log(`Hello, ${name}!`);
// }

// greet(); // Output: Hello, World!
// greet("Even"); // Output: Hello, Eve!


// 9. Rest Parameters Function


// function sum(...numbers) {
//     return numbers.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 6)); // Output: 15



// 10. Higher-Order Function
// function double(x) {
//     return x * 2;
// }

// function triple(y) {
//     return y * 3;
// }

// function applyFunction(a, func) {
//     return func(a);
// }

// console.log(applyFunction(5,double)); // Output: 10
// console.log(applyFunction(3,triple)); // Output: 15


