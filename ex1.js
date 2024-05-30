document.getElementById("ex").innerHTML=`This is Ex1.js`

var firstName = "Haris";
var lastName = "Jadoon";
var yearOfBirth = 2000;
var currentYear = new Date().getFullYear();
var age = currentYear - yearOfBirth;
document.getElementById("para").innerHTML=`Hi, my name is ${firstName} ${lastName}. I'm ${age} years old and I'm learning JavaScript`

var num1= 101;
var num2= 7;
var averag= num1+num2/2;
document.getElementById("average").innerHTML=`The Average of ${num1} and ${num2} is ${averag}`

var div= num1/num2;
var res= Math.round(div*100)/100;
document.getElementById("dec").innerHTML=`${num1} / ${num2}. Result with two decimal places is ${res} `

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

if (phone1.length == 9) {
  document.getElementById("number1").innerHTML=` ${phone1} is valid`}
  else {
  document.getElementById("number1").innerHTML=` ${phone1} is invalid`}


 if (phone2.length == 9) {
    document.getElementById("number2").innerHTML=` ${phone2} is valid`}
   else {
   document.getElementById("number2").innerHTML=` ${phone2} is invalid`}

   if (phone2.length == 9) {
    document.getElementById("number3").innerHTML=` ${phone3} is valid`}
   else {
   document.getElementById("number3").innerHTML=` ${phone3} is invalid`}


var power= Math.pow(32,6)
document.getElementById("power").innerHTML=`The answer of is ${power}`

console.log(num1+=num1)
function sum(a,b){
 

    // var number;
    // var number2;
    var result;
    result=a+b;
    return result;
}
var add=sum(10,20);
console.log(add)
var numbers=[10,3,5,6,7,4]
// /numbers.push("zaryab");
console.log(numbers[5])
// numbers.insert(3, "ahmed")
numbers.splice(3,0,"ahmed");
console.log(numbers)
var employee = {
  'name': 'James Taylor',
  'yearOfBirth': 1948,
  'ID': 'SBJ0001',
  'hello-world': 'Last value'
};
console.log(employee.yearOfBirth)
    
  
console.log(numbers.slice(0,6))
console.log(numbers.slice(-6,))
var courses = [
  {
      'title': 'Learn code in Python 3',
      'reviews': 6802,
      'students': 130129,
      'categories': ['programming', 'technology']
  },

  {
      'title': 'Learn PHP -  Beginner to Advanced',
      'reviews': 1204,
      'students': 30521,
      'categories': ['web development', 'programming']
  },

  {
      'title': 'Learn Microsoft Excel 2020',
      'reviews': 4209,
      'students': 18560,
      'categories': ['productivity', 'business']
  }
  
];
console.log(courses[0].categories[0])
var student = {
  'firstName': 'Marie',
  'lastName': 'Smith',
  'fullName': function() {
      return this.firstName + ' ' + this.lastName;
  }
}

console.log( student.firstName );                 
var num = 3; 
console.log(typeof num)
var num_string = num.toString();
console.log(typeof num_string)
                
function sum(){
  var numbe1= document.getElementById("add1")
  var number1Element = parseFloat(numbe1.value)

  var numbe2= document.getElementById("add2")
  var number2Element = parseFloat(numbe2.value)

  var resul= number1Element+number2Element;
  var resultElement = document.getElementById("result");
  resultElement.textContent = "The sum is: " +resul;
}
  
var courses = [ "HTML", "Python", "PHP" ];
courses.unshift("Bootstrap")
courses.push("CSS")
document.getElementById("arr").innerHTML=`${courses}`