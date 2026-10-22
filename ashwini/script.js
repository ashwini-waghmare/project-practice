let name = "Ashwini Waghmare";
let role = "Aspiring Full Stack Developer";
let education = "Computer Science Graduate";
let city = "Aurangabad";
let skills = ["HTML","CSS","JS","NODE.js","REACT.js","MYSQL"];
let projects = [
    "Portfolio Website",
    "Hotel Management System",
    "Coffee Shop Website"
];

console.log(name);
console.log(role);
console.log(education);
console.log(city);
console.log(skills[0]);
console.log(projects);


let nameElement = document.getElementById("name");
console.log(nameElement);

function changename(){
    let name = document.getElementById("name");
    name.innerText = "Pooja Waghmare";
    name.style.color = "red";
    name.style.fontSize = "35px";
    name.style.fontStyle = "italic";
}

nameElement.textContent = "Ashwini Waghmare | Developer";