
//const ApplicationMod = require('./application')
//import App from './App';

const root = document.getElementById("root");
const provadiv = document.createElement("div");
const provah1 = document.createElement("h1");
provah1.innerHTML = "<h1>prova<h1>";
provadiv.appendChild(provah1);
root.innerHTML = provadiv;
//root.appendChild(provadiv);
// root.render(
//     <ApplicationMod />
// );