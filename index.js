const divArray = [];
const root = document.createElement("div");

const titleDiv = document.createElement("div");
const title = document.createElement("h1");
title.innerHTML = "<h1>My first title<h1>";
titleDiv.appendChild(title);
divArray.push(titleDiv);

const paragraphDiv = document.createElement("div");
const paragraph = document.createElement("p");
paragraph.innerHTML="<p>My first paragraph</p>";
paragraphDiv.appendChild(paragraph);
divArray.push(paragraphDiv);

for(const el of divArray) {
    root.appendChild(el);
}
document.body.appendChild(root);
// alternative: for loop and consecutive appendChild
//root.appendChild(provadiv);
// root.render(
//     <ApplicationMod />
// );