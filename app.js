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








