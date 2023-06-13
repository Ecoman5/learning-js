/// Select element on the webpage - class, id, tagName, css selectors

// const heading = document.getElementsByClassName("heading");
// console.log(heading);
// const para = document.getElementById("ptag");
// console.log(para);

// const p = document.getElementsByTagNameNS("p");
// console.log(p);

//querySelector - css selectors -  .class, #id, p
//querySelectorALL

// const paragragh = document.querySelector("p");
// console.log(paragragh);
// const paragraghs = document.querySelectorAll("p")
// paragraghs.forEach((p) => console.log(p));
// const h1 = document.querySelector(".heading");
// console.log(h1);

// const div = document.querySelector("#test");
// console.log(div);

// // changing content on the web - innerText, textContent, innerHTML
// console.log(h1.innerText);
// h1.innerText += "Welcome";
// console.log(h1.textContent);
// h1.textContent = "Hello class";
// console.log(div.innerHTML);
// div.innerHTML += "<h1>FROM JS</>";
// div.innerHTML += "<a>visit google</>";

// const anotherH = document.querySelector("test h1");
// console.log(anotherH);

const body = document.querySelector("body");
body.innerHTML = "<h1>JAVASCRIPT</h1>"
body.style.backgroundColor = "blue";

