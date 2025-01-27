// 1 at()

//  let arr = [10, 20, 30, 40, 50];
//  console.log(arr.at(3));


// 2 concat()   join to array elements

// let arr = [10, 20, 30, 40, 50];
// let arr2 = [60, 70, 80, 90, 100];
// console.log(arr.concat(arr2));  


// 3 copywithin()

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.copyWithin(1,2, 4));


// 4 entries()

// const arr = ['a', 'b', 'c'];
// const iterator = arr.entries();

// console.log(iterator.next().value); 
// console.log(iterator.next().value); 
// console.log(iterator.next().value); 


// 5 every()  t-f

// let arr = [10, 20, 30, 40, 50];
// let result = arr.every((value)=> value>=20);
// console.log(result);

// *6   fill()

// let arr = [10, 20, 30, 40, 50];
// console.log(  arr.fill(11,3,4));



// 7 filter()

// let arr = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },];
// let result = arr.filter((value) => value.name.startsWith('E'));
// console.log(result);


// 8 find()

// let arr = [10, 20, 30, 40, 50];
// let result =arr.find((value)=> value>20);
// console.log(result);

// 9 findIndex()q

// let arr = [10, 20, 30, 40, 50];
// let result = arr.findIndex((value)=> value>30);
// console.log(result);

// 10 findlast()

// let arr = [10, 20, 30, 40, 50];
// let result = arr.findLast((value)=> value%2===0);
// console.log(result);

// 11 findlastindex()

// let arr = [10, 20, 30, 40, 50];
// let result = arr.findLastIndex((value)=> value%2===0);
// console.log(result);

// 12 flat()

// let arr = [10, [20, 30,] ,[40, 50]];
// console.log(arr.flat(2));


// *13 flatmap()

//   let arr = [10, 20, 30, 40, 50];
//   let result = arr.flatMap((value)=> value * 2);
//   console.log(result);


// 14  forEach()

// const arr =[1,2,3,4,5];
// let arr1 =arr.forEach((value)=>{console.log(value)});


// 15 includes()

// let arr = ["apple","banana","orange"];
// console.log(arr.includes("apple"));


// 16 indexof()

// let arr=["apple","banana","orange"];
// console.log(arr.indexOf("orange"));


// 17 join()

// const arr = ["apple", "banana", "orange"];
// console.log(arr.join(' - '));

// const arr = ["apple", "banana", "orange"];
// console.log(arr.join('\n'));


// 19 lastindexof()

// let arr = ["apple","banana","orange","orange"];
// console.log(arr.lastIndexOf("orange"));

// 20 map()

// let arr = [10, 20, 30, 40, 50];
// let result = arr.map((value)=> value*2);
// console.log(result);

// 21 pop()   last element show useing pop

// let arr = [10, 20, 30, 40, 50];
// arr.pop();
// console.log (arr);


// 22 push()  last element add useing push

// let arr = [10, 20, 30];
// let arr1= (arr.push(40,50,60));
// console.log(arr);
// console.log(arr1); // number to element

//  *23 reduce()

// let arr = [10, 20, 30, 40, 50];
// let result = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(result);

// *24 reduceRight()

// let arr = [10, 20, 30, 40, 50];
// let result = arr.reduceRight((accumulator, currentValue) => accumulator + currentValue);
// console.log(result);


// 25 reverse()

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.reverse());

// 26 shift()

// let arr = [10, 20, 30, 40, 50];
// let arr1= arr.shift();
// console.log(arr1);
// console.log(arr);

// 27 slice()

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(1, 4));

// 28   some()    t-f

// let arr = [11, 21, 30, 41, 51];
// let result = arr.some((value)=> value%2===0);
// console.log(result);


// 29 sort()   element sort a-z / 1-00

// let arr = [ 30, 40, 50,10, 20,60,80,90,70,];
// console.log(arr.sort());
// arr.sort((b,a)=> a-b);
// console.log(arr);



// let arr =["banana","orange","apple"]
// console.log(arr.sort());


// 30 splice()

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.splice(1,4));


// 32 toString()

// let arr = [156956.67,67677,7677];
// console.log(arr.toString());

// 33 toreverse()

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.toReversed());

// 34 tosorted()

// const numbers = [3, 1, 4, 1, 5, 9, 2];
// console.log (numbers.toSorted());

// 35 tosliced()

// const fruits = ['apple', 'banana', 'cherry', 'date'];
// const newFruits = fruits.toSpliced(1, 2);
// console.log(newFruits);

// 36 unshift()

// let arr = [10, 20, 30, 40, 50];
// let arr1= arr.unshift(10);
// console.log(arr);

// *37 values()

// let arr = [10, 20, 30, 40, 50];
// let iterator = arr.values();
// for (let value of iterator) {
//     console.log(value);
// }

// 38 with()   add element in array

// let arr = [10, 20, 30, 40, 50];
// let result = arr.with(3,100);
// console.log(result);

