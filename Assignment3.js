console.log("Hello World");

//Question 1
let numbers = [1, 3, 4, 6, 8];
document.getElementById("originalArray").innerHTML = numbers;
let newNumbers = numbers.map((num) => {
  return num * 2;
});
document.getElementById("doubledArray").innerHTML = newNumbers;

//Question 2
let array1 = [5, 3, 8, 6, 18];
document.getElementById("originalArray1").innerHTML = array1;
let arrayToString = array1.map((num) => {
  return num.toString();
});
document.getElementById("string").innerHTML = arrayToString;

//Question 3
let array2 = ["haris", "noman", "shahzeb", "hamza"];
document.getElementById("originalArray2").innerHTML = array2;
let capitalizedArray = array2.map((num) => {
  return num.toUpperCase();
});
document.getElementById("capArray").innerHTML = capitalizedArray;

//Question 4
let array3 = [5, 7, 9, 23, 56, 90];
document.getElementById("originalArray3").innerHTML = array3;
let sqauredArray = array3.map((num) => {
  return num * num;
});
document.getElementById("sqArray").innerHTML = sqauredArray;

//Question 5
let array4 = document.getElementsByName("array[]");
// let array5=array4[''];
// console.log(array5)
document.getElementById("sumArray").innerHTML = array4.value;
// let sqauredArray= array3.map((num)=>{
//     return Math.SQRT1_2(num);
// })
// document.getElementById('sqArray').innerHTML=sqauredArray;

// Last Question
let nameArray = [
  "rameen",
  "rashid",
  "ali",
  "alina",
  "aliya",
  "mahnoor",
  "mehwish",
  "sana",
  "tahira",
  "Taimoor",
];
// let newArray = nameArray.map(myFunction);
// document.getElementById("namearray").innerHTML = newArray;
// function myFunction(name) {
//   return name;
// }
let newArray = nameArray.map((name)=>{
    return name;  
});
document.getElementById("namesArray").innerHTML = newArray;

document.getElementById("inputNames").addEventListener("keyup", ()=>{
    let inputStr = document.getElementById("inputNames").value.toLowerCase();
    let filteredArray = nameArray.filter((name) =>
      name.toLowerCase().includes(inputStr)
    );
    document.getElementById("namearray").innerHTML =  filteredArray;
    //    ? filteredArray.join(", ")
    //   : "No matching names found";
})

