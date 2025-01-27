// 1 object assign()   static method

// let obj = {a:1};
// let obj1 = {b:2};
// let obj2 = {c:3};
// console.log(Object.assign(obj,obj1,obj2));


// 5  entries()  

// let peson={
//     name : 'krish',
//     age : 30,
//     job : 'engineer',
// }
// const entries=Object.entries(peson);
// console.log(entries[0][1]);


// 6 freeze()     value not change

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020
//   };
//   car.year = 2021; 
//   Object.freeze(car);
//   console.log(car.year); 
  

  
// 7  entries()

// const entries = [
//     ['name', 'Alice'],
//     ['age', 30],
//     ['job', 'Engineer']
//   ];
  
//   const person = Object.fromEntries(entries);
  
//   console.log(person);


//  8   getOwnPropertyDescriptor()


// const person = {
//     name: 'Alice',
//     age: 30
//   };
  
//   const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
//   console.log(descriptor);


// 11  hasown()

// const person = {
//     name: 'Alice',
//     age: 30,
//     job: 'Engineer'
//   };
  
//   console.log(Object.hasOwn(person, 'name')); // Output: true
//   console.log(Object.hasOwn(person, 'age')); // Output: true
//   console.log(Object.hasOwn(person, 'job')); // Output: false


// 12 is() 

// console.log(Object.is(42, 42));        // Output: true
// console.log(Object.is('foo', 'foo'));  // Output: true
// console.log(Object.is({}, {}));        // Output: false (different objects)
// console.log(Object.is([], []));        // Output: false (different arrays)
// console.log(Object.is(null, null));    // Output: true




// 16 keys()

// const person = {
//     name: 'Alice',
//     age: 30,
//     job: 'Engineer'
//   };
  
//   const keys = Object.keys(person);
//   console.log(keys); // Output: ['name', 'age', 'job']
  


// 18 seal()

// const obj = {
//     a: 1,
//     b: 2
//   };
  
//   Object.seal(obj);
  
//   // Attempt to add a new property
//   obj.c = 3;
  
//   console.log(obj.b); // Output: undefined
  


// 19  setprototypeof()

// const animal = {
//     eats: true
//   };
  
//   const dog = {
//     barks: true
//   };
  
  // Set the prototype of dog to animal
//   Object.setPrototypeOf(dog, animal);
  
//   console.log(dog.eats); // Output: true (inherited from animal)
//   console.log(dog.barks); // Output: true (own property)
  
// 20 value()
 
// const person = {
//     name: 'Alice',
//     age: 30,
//     job: 'Engineer'
//   };
  
//   const values = Object.values(person);
//   console.log(values); // Output: ['Alice', 30, 'Engineer']
  

// 1  hasownprototype()  

// const person = {
//     name: 'Alice',
//     age: 30
//   };
  
//   console.log(person.hasOwnProperty('name')); // Output: true
//   console.log(person.hasOwnProperty('age')); // Output: true
//   console.log(person.hasOwnProperty('Alice')); // Output: false


// 2  isprototypeof()

// const grandparent = {
//     grandparentProp: 'grandparent'
//   };
  
//   const parent = Object.create(grandparent);
//   parent.parentProp = 'parent';
  
//   const child = Object.create(parent);
//   child.childProp = 'child';
  
//   console.log(grandparent.isPrototypeOf(child)); // Output: true
//   console.log(parent.isPrototypeOf(child)); // Output: true




  