// console.log("Hello world");
// console.log("Welcome to class");
// console.log("bye bye to html");

// JS VARIABLES AND VALUES (var, let and const)
// let x = 2;
// const y = 4;
// console.log(x);
// console.log(y);
// Conventions and rules in naming var
// Have a logical var name
// const b = 'Eco'
// const firstName = 'Eco'
// compound names - camelcasing
// const lastName = 'Man'
// illega number, you can start _ $
// const $year = 1999
// const age = 4
// const A = 5


// const country = 'Nigeria';
// let state = 'Delta';

// console.log(country);
// console.log(state);

// state = 'Lagos state'
// console.log(state);
// JS DATA TYPES - (Primitive, complex )
// Strings - text - quotes -strings

// const firstName = "Eco";
// const lastName = "Man";
// const middleName = "Solomon";
// const currentJob = "Developer";
// const year = "1999";
// const email = "solomon@outlook.com";
// // String Concatenation - joining of strings +
// const fullName = firstName + '  ' + middleName + '  ' + lastName;
// console.log(fullName);
// // My name is John and i work as a Product Manager
// const description = " My name is " + firstName + " i work as a " + currentJob;
// console.log(description);

// // You can message on this email, mubarak@ts.com

// const message = "You can message on this email,";
// const emaill = "mubarak@ts.com";

// const descp = message + emaill;
// console.log(descp);

// // Getting Characters -string[position]
// console.log(middleName[1]);
// console.log(firstName[2]);
// console.log(currentJob[2]);

// // String length
// console.log(firstName.length);
// console.log(description.length);

// // String Method 
// // transform -
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// // extracting parts of a string - slice substring
// const email2 = "solomon@outlook.com";
// // string.slice [start, end]
// console.log(email2.slice(0, 7));
// console.log(email2.slice(5, 12));
// console.log(email2.slice(-5, -1));

// // string.substring(start, count of cters)
// console.log(email2.substr(0, 12));

// // replace string content - replace replaceAll
// console.log(email2.replace("@", "$"));
// console.log(email2.replaceAll("o", "$"));

// // includes, indexOf, lastindexOf, trim, concat,
// // trimStart, trimend, startsWith, EndsWith

// console.log(email2.includes("solo"));
// console.log(email2.indexOf("l"));
// console.log(email2.lastIndexOf("o"));

// const user = " Mubarak   ";
// const password = "    345723456  ";
// console.log(user.length, password.length);

// const formattedUser = user.trim();
// const formattedPassword = password.trimStart();
// console.log(formattedUser.length);
// console.log(formattedPassword.length);

// console.log(email2.startsWith("o"));
// console.log(email2.endsWith(".com"));

// const job = "Frontend";
// // frontend developer
// console.log(job.concat(" ", "Developer", " is Rare"));


// const author = "Chinua Achebe";
// const book = "Things Fall Apart";
// const yearr = "1996";
// // The book Things fall apart was written by Chinua Achebe in the year 1996
// const bookDescription = " The book " + book + "was written by " + author + "in the year" + year;
// console.log(bookDescription);

// // template literals -

// const bookDescription2 = `The book ${book} was written by ${author} in the year ${year}`

// // My favourite author is chinua achebe

// const fav = `My favorite Author is ${author}`
// console.log(fav);








// // Numbers - 5 6.3 45000
// // math operators - + - * / ** %

// console.log(6 % 2); // 0
// console.log(5 % 2); // 1

// console.log(5 / 2); // 2.5
// // order of operation - bodmas,

// console.log(6 / 3 + 5); // 7 - 2

// let balance = 500;
// const t1 = 20;
// const t2 = 100;
// const d1 = 200;

// console.log(balance - t1 - t2 + d1);
// console.log(5 + 6 * 2 - 3); // 5 + 

// let post = 40;
// post += 15;
// post -= 15;
// post *= 2;
// post /= 5;

// console.log(post);

// let likes = 0;
// likes += 1;
// likes += 1;
// likes += 1;
// likes -= 1;
// likes++;
// likes--;
// likes++;
// likes--;

// console.log(likes);

// // NaN - not a number

// console.log(5 - "hello"); //NaN



// // Boolean - true and false
// console.log(true);
// console.log(false);

// const country = "Nigeria"
// const continent = "Africa"
// let population = 200000;

// console.log(country, continent,  population);



// const isIsland = false
// const language = "English"

// console.log(population / 2);

// population++;
// console.log(population);


// const describ = ` ${country}   is in   ${continent}   and its population of   ${population}  people speak  ${language}`

// console.log(describ);

// const describ2 = `${country} as a country speak Majorly ${language}`
// console.log(describ2);

// //BOOlEAN true or false

// // comparisim operators - < > <= >= ==
// // = assignment
// // == loose equality, === strict
// console.log(6 < 3);
// console.log(6 > 3); // true
// console.log(5 >= 5.0); // true
// console.log(4 == "4"); // true
// console.log(4 === "4"); // false


// // Logical Operators and &&  or || not !
// console.log(5 > 6 && 2 == 2);
// console.log(6 > 7 || 2 === 2);
// console.log("A" > "a");

// // typeof
// console.log(typeof describ2);

// //  string to Numbers
// const str = '90';
// console.log(typeof str);
// const converted = Number(str);
// console.log(typeof converted);

// // numbers to string

// const num = 900000;
// console.log(typeof num);
// const converted2 = String(num)
// console.log(typeof converted2);


// // type corecion


// const myName = "Solomon"
// console.log(myName.length);




// Null - null
let age = null;
console.log(age, age + 4, `my age is ${age}`);

// Undefined - undefined
let yearl;
console.log(yearl);
console.log(yearl, yearl + 4, `the year is ${yearl}`);

// truthy
console.log(Boolean(""));
//  and falsy values 0, null, undefined

// control flow
// condition statement
// if(condition){code}
const password = "236777578@"
if (password.length > 6) {
 console.log("Your password is strong");
}
if (false) {
 console.log("Working");
}

// if else
// if(condition){
// CODE 1
//}else{
 // code 2



const country = "Togo"
const continent = "Africa"
const population = 50;
const isIsland = false;
const language = "French"

// sarah speaks english has less than 50 people and is not an island
// You should live in Portugal 
// Portugal does not meet your criteria

if (language === "English" && population < 50 && !isIsland) {
 console.log(`you should live in ${country}`);
}
else { 
console.log(`${country} does not meet your criteria`);
}

const agee = 18;
//  >=

if (age >= 18) {
 console.log("You are an adult");
} else {
 console.log("You are not one");
}

// if (condition)else if (another condition)else if (condition){else{}

const passwordd = "45677t@";
//  recommended >7 an include @, strong > 7 and weak

if (passwordd.length >= 7 && passwordd.includes("@")) {
 console.log("Your password is recommended");
}
else if (passwordd.length >= 7) {
console.log("Your password is strong"); 
} else { 
 console.log("Your password is weak");
}


const num = -5;

if (num > 0) {
 console.log("Positive");
} else if (num < 0) {
 console.log("Negative");
} else {
 console.log("This is Zero");
}

// Even or Odd

// if (numm % 2 === 0) {
//  console.log("This is EVEN");
// } else {
//  console.log("This is ODD");
// }

const club = 50;

if (club < 18) {
 console.log("Welcome to the baby section");
} else if(club > 50) {
 console.log("Welcome to the vip section");
} else  {
 console.log("Welcome to the club");
}

// SWITCH STATEMENT
const day = 6;
switch (day) {
 case 1:
  console.log("MONDAY");
  break;
 case 2:
  console.log("TUESDAY");
  break;
 case 3:
  console.log("WEDNESSDAY");
  break;
 case 4:
  console.log("THURSDAY");
  break;
 case 5:
  console.log("FRIDAY");
  break;
 case 6:
  console.log("SATURDAY");
  break;
 case 7:
  console.log("SUNDAY");
  break;

 default:
  console.log("NOT A VALID DAY");
  break;
}


const grade = "b";
switch (grade) {
 case "A":
 case "a":
  console.log("EXCELLENT");
  break;
 case "B":
 case "b":
  console.log("VERY GOOD");
  break;
 case "C":
 case "c":
  console.log("GOOD");
  break;
 case "D":
 case "d":
  console.log("FAIR");
  break;
 case "E":
 case "e":
  console.log("POOR");
  break;
 case "F":
 case "f":
  console.log("FAIL");
  break;
 

 default:
  console.log("NOT A VALID GRADE");
  break;
}

// ternary operation
// if(condition){code 1}else{code 2}

// condition ? action 1 : action 2
15 > 7 ? console.log("Yes") : console.log("No");
const num2 = 46;

num2 % 2 === 0 
  ? console.log("This is An Even number")
  : console.log("This is An Odd number");

// LOOPS - repitive tasks - for , while, do.. while loop

// for (initializer let i = 0; condition i < 5; increment i++  ){code }

// for (let i = 0; i < 10; i++) {
// console.log(`In the loop ${i}`);
// }
// console.log("outside of the loop");

//  initializer
// while(condition){code increment}

// let x = 0;
// while (x < 20) {
//   console.log("HELLO");
//   x++;
// }

// let y = 50;
// do {
//   console.log("HEY");
//   y++;
// } while (y < 5);



// // functions
// const var1 = "John";

// // function declaration
// function myFunction() {
//   console.log("HELLO CLASS");
//   console.log("YOU ARE WELCOME");
// }

// myFunction();

// function greet(name = "User", age = 18) {
//   console.log("WELCOME" + name + age);
// }

// greet("Solomon", 24)
// greet("Ebuka", 28)
// greet("Precious", 22)
// greet();
// greet("Ola")

// // calculate  the age of users
// // 2023 - YEAR

// function calcAge(year) {
//   const age = 2023 - year
//   console.log( `Your age is ${age}`);
// }

// calcAge(1960);
// calcAge(2000);

// function sumNums(a, b) {
//   console.log(`the sum of ${a} and ${b} is ${a + b}`);
// }

// sumNums(4.5, 78);
// sumNums(-45, 87);

// function describecountry(country, population, capitalcity) {
//   console.log(`${country} has ${population} million people and its capital city is ${capitalcity}`);
// }

// describecountry("France", 12, "Paris")
// describecountry("Nigeria", 3, "FCT")
// describecountry("Russia", 65, "Moscow")

// // check if an email is valid or not

// function checkEmail(email) {
//   if (email.includes("@")) {
//     console.log(`${email} is a valid email address`);
    
//   } else {
//     console.log(`${email} is not a valid email`);
//   }
// }
// checkEmail("abc@gmai.com");

// // HOISTING -
// // function expression
// const myAge = 90;
// console.log(myAge);

// // myFunction2(4,5);
// const myFunction2 = function (a, b) {
//   console.log("anything");
//   console.log(a + b);
// };

// myFunction2(7, 8);
// // return keyword

// const Precious = function (a, b) {
//   console.log('Hello');
//   return a * b;
//   console.log("Hello");
// };

// Precious(9, 6);

// const test = Precious(10, 10);
// console.log(test);

// // create a function that calc average of the two teams
// // d - 103, 98, 89
// // k - 110, 87, 95

// const calcAverage = function (a, b, c) {
//   const avg = (a + b + c) / 3;
//   return Number(avg.toFixed(2))
  
// };

// const avgDolphin2 = calcAverage(123, 98, 89);
// const avgKaola2 = calcAverage(110, 87, 95);
// console.log(avgDolphin2, avgKaola2);

// function checkWinner(teamA, teamB) {
//   if (teamA > teamB) {
//     console.log("First team won");
//   } else if (teamB > teamA) {
//     console.log("Second team won");
//   } else {
//     console.log("NO winner");
//   }
// }



// checkWinner(avgDolphin2, avgKaola2);
// ARROW FUNCTION

// const name = ()=>{}

const logger = (a, b, c) => {
  const total = a + b + c;
  return total;
};

console.log(logger(4, 5, 7));
// logger(3, 4, 5)

// const difference = (a, b) => {
  //  return a - b;
// };

const difference = (a, b) => a - b;

console.log(difference(67, 50));

const calcAverage = function (a, b, c) {
  const avg = (a + b + c) / 3;
  return Number(avg.toFixed(2))
};

// VARIABLE SCOPING - global local var

const a = 5;
console.log(a);

const local = () => {
  const a = 7;
  const b = 8;
  console.log(a);
};
local();
// console.log(b);
console.log(a);

// arrays [elements, element, el]
const student = ["Mofe", "Ebuka", "Precious"];
console.log(student);
// arrays properties and methods
console.log(student.length);

// get elemnt in arr
console.log(student[0]);
console.log(student[student.length - 1]);

// converting an array to a string - tString, join
console.log(student.toString());
console.log(student.join(" "));
// adding elements to an array  - push , unshift

student.push("Ola");
student.push("Zainab")
console.log(student.push("Funsho"));
console.log(student);

student.unshift("Nike")
student.unshift("Emma")

console.log(student);

// removing elements from an array pop shift 
student.pop()
student.pop()
student.pop()


student.shift()
student.shift()
student.shift()
console.log(student);

console.log(student.sort());
console.log(student.reverse());
console.log(student.includes());
console.log(student.includes("Ebuka"));
console.log(student.includes("Mofe"));

// indexOf lastindexOf 
const anotherStudent = ["Toyin", "Zainab"];
console.log(student.concat(anotherStudent, ["Ayo", "Ade", "Ade"]));



// includes, sort, pop, push, shift, unshift,
// slice, splice, concat, join, toString

console.log(student.slice(0, 2)); // 0, 1


// filter, find, map, forEach

// object
// asybchronous js 
// DOM

const countries = ["Germany", "Sweden", "Belgium", "Nigeria", "Italy", "Canada" ]
console.log(countries.length);

if (countries.length > 5) {
  console.log("Country is greater than 5");
} else { 
console.log("No");
};

let savings = 100000;
const transactions = [5000, -10000, -100];

transactions.push(-2000);
transactions.push(50000);

transactions.push(-3000);
transactions.pop();
console.log(transactions);
let debit = 0;
let credit = 0;

for (i = 0; i < transactions.length; i++) {
  // console.log(transactions[i]);
  // savings = savings transaction[i]
  savings += transactions[i];
  if (transactions[i] < 0) {
    debit += transactions[i];
    console.log(`You have been debited ${transactions[i]}`);
  } else {
    credit += transactions[i];
    console.log(`You have been credited ${transactions[i]}`);
  }
}
console.log(`The total debit is ${debit}`);
console.log(`The total credit is ${credit}`);

console.log(`Your account balance is ${savings}`);

// filter, find, map, forEach
// higher order function, callback func
const friends = ["John", "Jane", "Adam", "Jennifer", "Owen"];
friends.includes("Lester");

friends.forEach((friends, index) => {
  console.log(`${index} The name of my friend is ${friends}`);
});

friends.forEach((f, index) => {
  console.log(f, index);
});


// map 
friends.map((val, index) => {
  console.log(index);
  if (val === "Jane" || val === 'Adam') {
    console.log(`${val} is my best friend`);
  } else {
    console.log(`${val} is just my friend`);
  }
});

// filter find

const filteredFriends = friends.filter((friend) => {
  return friend.length > 6;
});
console.log(filteredFriends);

// Find

const foundUser = friends.find((friends) => {
  return friends.startsWith("J")
});

console.log(foundUser);

const result = friends.filter((friends) => friends.length > 6);
const result2 = friends.find((f) => f.startsWith("A"));

console.log(result, result2);







