// Write your code here!
main.remove('main');
const newHeader = document.createElement(`h1`);
document.body.appendChild(newHeader);
let h1 = document.getElementById("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Edilberto is the champion>" 
newHeader.className = "victory";


