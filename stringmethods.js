// 1  sting.at()

// let str = "hello krish";
// console.log(str.at(6));


// 2  charat()

// let str = "hello krish";
// console.log(str.charAt(2));

// let str = "Hello";
// console.log(str.length)

// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }


// 3  codepointat()

// let str = "hello krish";
// console.log(str.codePointAt(0));


// 4  concat()

// let str = "hello krish";
// console.log(str.concat(" how are you"))

// let str = "hello ";
// let str1 = "krish";
// console.log(str.concat(str1));


// 5  endwith()  t-f

// let str = "hello krish";
// console.log(str.endsWith("h"))

// 6  includes()

// let str = "Coding is fun";
// console.log(str.includes("coding"));  // Output: false (case-sensitive)
// console.log(str.includes("Coding"));  // Output: true


// *7 indexof()

// let str = "Hello, World!";
// console.log(str.indexOf("World"));  
// console.log(str.indexOf("world"));  
// console.log(str.indexOf("Hello"));  


// *8 iswellformed()

// let str1 = "Hello, World!";
// console.log(str1.isWellFormed());


// 9 indexof()

// let str = "Hello, World! Hello!";
// console.log(str.lastIndexOf("Hello"));  
// console.log(str.lastIndexOf("World"));  
// console.log(str.lastIndexOf("world"));  


// *10  localecompare()

// let str1 = "banana";
// let str2 = "apple";
// console.log(str1.localeCompare(str2));  

// *11  match()

// const str = "Helle world!";
// const result = str.match(/o/);
// console.log(result); 


// *12  matchall()


// const str = "Helle world!";
// const result = str.matchAll(/o/);
// console.log(result);

// TypeError: String.prototype.matchAll called with a non-global RegExp argument slov this error

// const str = "Hello World, world world";
// const regex = /world/gi;

// const matches = str.matchAll(regex);
// console.log(matches);
// for (const match of matches) {
//   console.log(`Found a match: ${match[0]}`);
// }


// *13  normalize()

// const str = "Hello World, world world";
// console.log(str.normalize("NFKC"))

// 14 padend()

// const str = "Hello";
// const paddedStr = str.padEnd("10");
// console.log(paddedStr); 

// 15 padstart()

// const str = "Hello";
// console.log(str.padStart(10));


// 16 repeat()

// const str = "Hello";
// console.log(str.repeat(5));

// 17  replace()

// const str = "Hello, World! ";
// console.log( str.replace("World", "Krish"));

// 18 replaceall()

// const str = "Hello world, welcome to the world of JavaScript";
// console.log(str.replaceAll("world", "universe"));

// 19  search()

// const str = "World, World! ";
// console.log(str.search("World"))

// 20  slice()

// const str = "Hello, World! ";
// console.log(str.slice(0, 5));


// 21  split()   conver to array
 
// const str = "Hello, World!";
// console.log(str.split(" ")[0]);


// 22 startswith()

// const str = "Hello, World! ";
// console.log(str.startsWith("h"))

//  23 tolocalelowercase()

// const str = "KRISH RANGPARIYA ";
// console.log(str.toLocaleLowerCase());

// 24 tolocaleuppercase()

// const str = "Hello, World! ";
// console.log(str.toLocaleUpperCase());


// 25 tolowercase()

// const str = "HELLO WORLD! ";
// console.log(str.toLowerCase());

// 26  touppercase()

// const str = "hello world! ";
// console.log(str.toUpperCase());

// 27  trim()

// const str = "  Hello, World!  ";
// console.log(str.trim());

// 28  trimend()

// const str = "  Hello, World!  ";
// console.log(str.trimEnd());

// 29  trimstart()

// const str = "  Hello, World!  ";
// console.log(str.trimStart());

// 30  valueof()

// const str = "hello world ";
// console.log(str.valueOf());
