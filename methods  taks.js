//1

// let str =" john doe";
// let str1 = "Alabrad";
// console.log(str1.concat(str));



//2 
// const arr = [67,89,68,56,89];
// console.log(arr.join('\n'));


//3  string

// let str="   John doe   ";
// console.log(str.trim());


// let str="john doe bhautik vaghasiya swicktech solutions";
// str.split(" ").forEach((val)=>console.log(val.charAt(0).toUpperCase()+val.slice(1)));
// let str1 =(str.toLocaleUpperCase().slice(0,1).concat(str.slice(1)))
// console.log(str1);


// 4   number

// let  num =[45,67,78,35,78,85];
// let  sum = 0;
// for (let val of num){
//    sum =sum+val;
// }
// let ave = sum/num.length;
// console.log(ave);


// let  num =[45,67,78,35,78,85];
// let num1 = Math.min(...num);
// let num2 = Math.max(...num);
// console.log(num1);
// console.log(num2);



// 5

// let num =[45,67,78,35,78,85];

// let num1 = num.reduce((sum,num)=> sum+num);
// let num2 = (num1/num.length).toFixed(2);
// console.log(num2);


// let num = [45,67,78,35,78,85];
// let num1= num.sort((a,b)=> a-b);

// console.log(num1);


// let num = [45, 67, 78, 35, 78, 85];


// let high = num.reduce((max, current) => current > max ? current : max);
// console.log(high);

// let low = num.reduce((min, current) => current < min ? current : min);
// console.log(low);



//  String methods:
// Convert the user's full name to title case (first letter capitalized for each word).
// Ensure that no extra spaces exist at the start or end of the name.


// let name = "   john doe   ";
// let letter = name.split(" ").forEach((val) => console.log(val.charAt(0).toUpperCase() + val.slice(1)) );
// console.log(name.trim());




// Number methods:
// Round each score in the array to the nearest integer.
// Calculate the average score and round it to 2 decimal places.

// let num = [45.45, 67.67, 78.25, 35.90, 78.76, 85.555];
// let val = num.map((num)=> Math.round(num));
// console.log(val);


// let num = [45, 67, 78, 35, 78, 85];
// let ave = num.reduce((sum, num) => sum + num, 0) / num.length;
// console.log(ave.toFixed(2));



// Array methods:
// Sort the scores in descending order.
// Find the highest and lowest scores.


// let num = [45, 67, 78, 35, 78, 85];

// let num1 = num.sort((a, b) => b - a);
// console.log(num1);

// let num = [45, 67, 78, 35, 78, 85];
// let num2 =num.reduce((max, current) => current > max ? current : max);
// let num3 = num.reduce((min, current) => current < min ? current : min);
// console.log(num2);
// console.log(num3);


// Return an object that contains:
// The user's full name in the title case.
// The sorted scores.
// The average score.
// The highest and lowest scores.


// let fullname = "john doe";
// let score = [45, 67, 78, 35, 78, 85];

// let title = fullname.toUpperCase();
// let sort = [...score].sort((a, b) => a - b);

// let num1 = score.reduce((sum,score)=>sum+score,0);
// let num2 = parseFloat((num1/score.length).toFixed(2));

// let high = score.Math.max(...score);
// let low = score.Math.min(...score);


// let task  = {
//     fullname : title,
//     sorted : sort,
//     average : num2,
//     highest : high,
//     lowest : low
// };

// console.log(task);




// let fullName = "john doe";
// let scores = [89, 76, 95, 82, 100]; 

// let titleCaseName = fullName.toUpperCase();

// let sortedScores = [...scores].sort((a, b) => a - b);

// let totalScore = scores.reduce((sum, score) => sum + score, 0);
// let averageScore = parseFloat((totalScore / scores.length).toFixed(2));

// let highestScore = Math.max(...scores);
// let lowestScore = Math.min(...scores);

// let userInfo = {
//     fullName: titleCaseName,
//     sortedScores: sortedScores,
//     averageScore: averageScore,
//     highestScore: highestScore,
//     lowestScore: lowestScore 
// };

// console.log(userInfo);



// let profile ={
//     fullname :"krish rangpariya",
//     username :"@krish",
//     email :"lGjTj@example.com",
// }
// delete profile.email;
// console.log(profile)