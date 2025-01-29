
//const ApplicationMod = require('./application')
//import App from './App';
const divArray = [];
const root = document.getElementById("root");
const titleDiv = document.createElement("div");
const paragraphDiv = document.createElement("div");
const title = document.createElement("h1");
title.innerHTML = "<h1>My first title<h1>";
titleDiv.appendChild(title);
divArray.push(titleDiv);
const paragraph = document.createElement("p");
paragraph.innerHTML="<p>My first paragraph</p>";
paragraphDiv.appendChild(paragraph);
divArray.push(paragraphDiv);
for(const el of divArray) {
    document.body.appendChild(el);
}
// alternative: for loop and consecutive appendChild
//root.appendChild(provadiv);
// root.render(
//     <ApplicationMod />
// );