//   //functions 
// function sayhello(){
//     console.log("hello");
// };

// sayhello();

//     //function with parameters //argument

// function greet(name) {
//     console.log("Hello",name);
// };

// greet("Ashu");  //ashu is a argument

//     //function + if...else

// function voting(age){

//     if(age >= 18){
//         return "Eligible";
//     }else{
//         return "Not Eligible";
//     };
// };

// console.log(voting(23));

//    //for loop 

// for(i = 1; i <= 5; i++){
//     console.log(i);
// };

// function square(number){
//     return number * number;
// }

// console.log(square(5));


// function double(number){
//     return number * 2;
// }

// console.log(double(10));


// function iseven(number){
//    if(number % 2 === 0){
//     return "Even";
//    }else{
//     return "Odd";
//    }
// }

// console.log(iseven(13));

// function isodd(no){
//     if(no % 3 === 0){
//         return "odd";
//     }else{
//         return "even";
//     }
// }

// console.log(isodd(10));


// function younger(age){
//     if(age >= 18){
//         return "Eligible";
//     }else{
//         return "Not Eligible";
//     }
// }

// console.log(younger(23));


// function calculateGrade(marks){
//     if(marks >= 90){
//         return "A";
//     }else if(marks >= 75){
//         return "B";
//     }else if (marks >= 60) {
//         return "C";
//     } else {
//         return "D";
//     };
// };

// console.log(calculateGrade(82));

 // Day 7

   // Arrays , push() adds the element in last
   //pop() removes the last element 
   //shift() removes from the beginning
   // unshift() adds an item at the beggining

// let arrays = ["mango","banana","litchi","papaya"];

// arrays[0] = "pen";
// arrays.push("Guava");
// arrays.pop();
// arrays.shift();

// console.log(arrays);


// let dishes = ["pavbhaji","puribhaji","chowmein","momos","paneer"]
// dishes.unshift("maggi");

// console.log(dishes);

// calculation

// let marks = [50,65,47,62,92,80];

// for(i = 0; i <= marks.length; i++){
//     if(marks[i] >= 60){
//         console.log(marks[i]);
//     };
// };

// let numbers = [11,20,35,42,50];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         console.log(numbers[i]);
//     };
// };




// DAY 8 //

//object
//changing object value
//adding new property on object
// deleting a property 

// let student = {
//     name: "ashu",
//     age: 23,
//     city: "aurangabad"
// };

// //student.age = 24; 
// // student.course = "Computer Science";

// delete student.city;

// console.log(student);


//nested object = an object can contain another object
//array inside an object

// let charu = {
//     name: "Charushila",
//     age: 24,

//     address: {
//         city: "Aurangabad",
//         state: "Maharashtra"
//     }
// };
// console.log(charu);


// //objects inside an array
// let chris = {
//     name: "Charushila",
//     age: 24,
//     subjects: ["JS","HTML","CSS"],
// };
// console.log(chris.subjects[2]);


// let classmates = [
//     {
//         name: "aswhini",
//         age: 23
//     },
//     {
//         name: "ashu",
//         age: 25
//     },
//     {
//         name: "rahul",
//         age: 35
//     }
// ];
// console.log(classmates[2].name);


// the important part: Loop through objects inside an array
// let classmates = [
//     {
//         name: "aswhini",
//         age: 23
//     },
//     {
//         name: "ashu",
//         age: 25
//     },
//     {
//         name: "rahul",
//         age: 35
//     }
// ];
// for (let i = 0; i < classmates.length; i++){
//     console.log(classmates[i].name);
// }

// Now let's combine objects + arrays + conditions

// let students = [
//     {
//         name: "ashu",
//         age: 24,
//         marks: 67
//     },
//     {
//         name: "chary",
//         age: 23,
//         marks: 76
//     },
//     {
//         name: "charu",
//         age: 25,
//         marks: 26
//     }
// ];
// for( let i = 0; i < students.length; i++){
//     if(students[i].marks >= 50){
//         console.log(students[i].name);
//     }
// }

// let products = [
//     {
//         name: "phone",
//         price: 700,
//         category: "electronics"
//     },
//     {
//         name: "laptop",
//         price: 1500,
//         category: "electronics"
//     },
//     {
//         name: "headphones",
//         price: 1200,
//         category: "fashion"
//     },
//     {
//         name: "shooes",
//         price: 900,
//         category: "electronics"
//     }
// ];
// // for (let i = 0; i < array.length; i++)
// for(let i = 0; i < products.length; i++){
//     if(products[i].category === "electronics"){
//         console.log(products[i].name);
//     }
// }


//DAY 9

  //selecting an element

// let nameElement = document.getElementById("name");
// nameElement.innerText = "waghmare"; //changing text

// nameElement.style.color = "blue";
// nameElement.style.fontSize = "40px";
// console.log(nameElement);

// function changename(){
//     let name = document.getElementById("name");
//     name.innerText = "welcome to js";
// }

// let message = document.querySelector(".msg");

// message.innerText = "hello javascript";

// addEventlistner
// let btn = document.getElementById("btn");
// let title = document.getElementById("title"); //chng something when we click 

// btn.addEventListener("click", function(){
//   title.innerText = "Hello Ashu!";
// });

//input Events
// let username = document.getElementById("username");
// let output = document.getElementById("output");

// username.addEventListener("input",function(){
//   output.innerText = username.value;
// });

// let city = document.getElementById("city");
// let result = document.getElementById("result");

// city.addEventListener("change",function(){
//   result.innerText = city.value ;
// });


// let form = document.getElementById("myForm");
// let nameInput = document.getElementById("nameInput");
// let formOutput = document.getElementById("formOutput");

// form.addEventListener("submit",function(event){
//   event.preventDefault();

//   formOutput.innerText = "Hello " + nameInput.value;
// });

// let form = document.getElementById("login")
// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let output = document.getElementById("output");

// form.addEventListener("submit",function(event){
//   event.preventDefault();

//   output.innerText = "Hey! " + username.value;
// });

// let form = document.getElementById("registerForm");
// let name = document.getElementById("name");
// let email = document.getElementById("email");
// let city = document.getElementById("city");
// let result = document.getElementById("result");


// city.addEventListener("change",function(){
//   result.innerText = "Selected city: "+ city.value;
// })


// form.addEventListener("submit", function(event){
//   event.preventDefault();

//   result.innerText = "Hello " + name.value +"You Registered From "+ city.value ;
// })

// name.value;
// email.value;
// city.value;

//DAY 10
// 1.DATA STORE KRNA
//localStorage.setItem("username","ashu"); //ye sirf browser me data store krta without displayingbin console

//2.DATA SAVE KRNA

// localStorage.setItem("username","ashu");
// localStorage.setItem("city","aurangabad");

//3.DATA GET KRNA
// localStorage.getItem("username");
//console.log(localStorage.getItem("username")); //agar hume console me dekhna hai toh

//4.DATA REMOVE KRNA
// localStorage.removeItem("username");
//console.log(localStorage.removeItem("username")); //null aayega kyuki remove kr diya

//5.DATA CLEAR KRNA
// localStorage.clear();
//console.log(localStorage.getItem("username")); //null aayega kyuki clear kr diya

// localStorage.setItem("username","ashu");
// console.log(localStorage.getItem("username"));

//local storage with objects

// let user = {
//     name: "ashu",
//     age: 23,
//     city: "aurangabad"
// };

// localStorage.setItem("user",JSON.stringify(user)); //object ko string me convert krke store krna hoga

// let data = localStorage.getItem("user");
// console.log(data); //string me aayega

// let userData = JSON.parse(localStorage.getItem("user"));
// console.log(userData.name); //object me convert krke access krna hoga

//forEach()

let number = [10,20,30,40];

number.forEach(function(num){
    console.log(num);
});

let fruits = ["mango","banana","apple"];

fruits.forEach(function(fruits){
  console.log("I Like "+ fruits);
})

//map()

let numbers = [1,2,3,4,5];

let result = numbers.map(function(num){
    return num * 2;
});

console.log(result); // [2,4,6,8,10]

prices = [100,200,300,400];

let newPrices = prices.map(function(prices){
  return prices + 50;
});

console.log(newPrices); // [150,250,350,450]

// example of map() with objects

let products = [
  {name: "phone", price: 700},
  {name: "laptop", price: 1500},
  {name: "headphones", price: 1200},
];

let names = products.map(function(product){
  return product.name;
});

console.log(names); // ["phone", "laptop", "headphones"]

//filter()

let items = [10,15,20,25,30];

let final = items.filter(function(num){
  return num > 20;
});

console.log(final); // [25,30]

//filter() with objects

let productsList = [
  {name: "phone", price: 700},
  {name: "laptop", price: 1500},
  {name: "headphones", price: 1200},
];

let finalproduct = productsList.filter(function(product){
  return product.price < 1000;
});

console.log(finalproduct); // [{name: "laptop", price: 1500}, {name: "headphones", price: 1200}]

//find()

let numbersList = [10,20,30,40,50];

let found = numbersList.find(function(num){
  return num > 25;
});

console.log(found); // 30 it returns the first element that satisfies the condition and stops searching after that like the first number greater than 25 is 30 so it returns 30 and stops searching after that

//reduce() is used to combine all array values in one final value like the all numbers of sum in one final value

let nom = [10,20,30];

let total = nom.reduce(function(sum,num){
  return sum + num;
});

console.log(total); // 15


let itoms = [
  {name: "phone", price: 700},
  {name: "laptop", price: 1500},
  {name: "headphones", price: 1200},
  {name: "mouse", price: 500},
];

let ans = itoms.filter(function(item){
  return item.price > 1000;
});

let totalprice = ans.reduce(function(sum,item){
  return sum + item.price;
},0);

console.log(totalprice); // 2700