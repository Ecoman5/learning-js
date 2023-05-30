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

const firstName = "Eco";
const lastName = "Man";
const middleName = "Solomon";
const currentJob = "Developer";
const year = "1999";
const email = "solomon@outlook.com";
// String Concatenation - joining of strings +
const fullName = firstName + '  ' + middleName + '  ' + lastName;
console.log(fullName);
// My name is John and i work as a Product Manager
const description = " My name is " + firstName + " i work as a " + currentJob;
console.log(description);

// You can message on this email, mubarak@ts.com

const message = "You can message on this email,";
const emaill = "mubarak@ts.com";

const descp = message + emaill;
console.log(descp);

// Getting Characters -string[position]
console.log(middleName[1]);
console.log(firstName[2]);
console.log(currentJob[2]);

// String length
console.log(firstName.length);
console.log(description.length);

// String Method 
// transform -
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// extracting parts of a string - slice substring
const email2 = "solomon@outlook.com";
// string.slice [start, end]
console.log(email2.slice(0, 7));
console.log(email2.slice(5, 12));
console.log(email2.slice(-5, -1));

// string.substring(start, count of cters)
console.log(email2.substr(0, 12));

// replace string content - replace replaceAll
console.log(email2.replace("@", "$"));
console.log(email2.replaceAll("o", "$"));

// includes, indexOf, lastindexOf, trim, concat,
// trimStart, trimend, startsWith, EndsWith

console.log(email2.includes("solo"));
console.log(email2.indexOf("l"));
console.log(email2.lastIndexOf("o"));

const user = " Mubarak   ";
const password = "    345723456  ";
console.log(user.length, password.length);

const formattedUser = user.trim();
const formattedPassword = password.trimStart();
console.log(formattedUser.length);
console.log(formattedPassword.length);

console.log(email2.startsWith("o"));
console.log(email2.endsWith(".com"));

const job = "Frontend";
// frontend developer
console.log(job.concat(" ", "Developer", " is Rare"));


const author = "Chinua Achebe";
const book = "Things Fall Apart";
const yearr = "1996";
// The book Things fall apart was written by Chinua Achebe in the year 1996
const bookDescription = " The book " + book + "was written by " + author + "in the year" + year;
console.log(bookDescription);

// template literals -

const bookDescription2 = `The book ${book} was written by ${author} in the year ${year}`

// My favourite author is chinua achebe

const fav = `My favorite Author is ${author}`
console.log(fav);








// Numbers - 5 6.3 45000
// Boolean - true and false
// Null - null
// Undefined - undefined



