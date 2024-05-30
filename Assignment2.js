let value = document.getElementById("oddandEven");
let btn = document.getElementById("btn");
btn.onclick = function () {
    for (let i = 0; i < 15; i++) {

        if (i % 2 == 0) {
            value.innerHTML += `${i} is even <br>`
        }
        else {
            value.innerHTML += `${i} is odd <br>`
        }

    }

}

let btn2 = document.getElementById("btn2");
let val = document.getElementById("fizz");
btn2.addEventListener("click", function () {
    for (let i = 1; i < 100; i++)

        if (i % 3 == 0) {
           
            if (i % 5 == 0){
                val.innerHTML += " FizzBuzz<br>"}
                val.innerHTML += "Fizz<br>"
        }

        else if (i % 5 == 0)
            val.innerHTML += " Buzz<br>"
    
}, { once: true })

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
    let n1 = document.getElementById("number").value;
    let ar = document.getElementById("arm");
    let arms = (n1[0] * n1[0] * n1[0]) + (n1[1] * n1[1] * n1[1]) + (n1[2] * n1[2] * n1[2]);
    if (arms == n1)
        ar.innerHTML = `${n1} is an Armstrong Number`
    else
        ar.innerHTML = `${n1} is NOT an Armstrong Number`
})


let btn4 = document.getElementById("btn4");
let pa = document.getElementById("para");
let sum = 0;
btn4.addEventListener("click", function () {
    for (let i = 0; i <= 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0)
            sum = sum + i;
        pa.innerHTML = `${sum}`
}
},  { once: true })    



let arr = [1, 33, 22, 55, 12]
document.getElementById("array").innerHTML = `${arr}`
let btn5 = document.getElementById("btn5");
let arr2 = document.getElementById("array2");
let s = 0;
btn5.addEventListener("click", function () {
    for (let i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
    arr2.innerHTML = `${s}`
})


let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function () {
    let userInput = document.getElementById("InputNumber").value;
    let para2 = document.getElementById("para2");
    if(userInput=== ""){
        para2.innerHTML = `Please enter a Number`
    }
    
    else if (userInput >= 0) {
        para2.innerHTML = `This is Positive Number`
    }
    else {
        para2.innerHTML = `This is Negative Number`
    }

})


let btn7= document.getElementById("btn7");
btn7.addEventListener("click", function(){
    let age= document.getElementById("age").value;
    let para3=document.getElementById("para3");
    if(age<=12)
        para3.innerHTML=`Pay a Ticket of Rs5`
    else if(age>12 && age<=18)
        para3.innerHTML=`Pay a Ticket of Rs10`
    else if(age>18 && age<=60)
        para3.innerHTML=`Pay a Ticket of Rs20`
    else 
        para3.innerHTML=`Pay a Ticket of Rs15`
})


let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]
document.getElementById("array3").innerHTML = `${arr1}`
let arr24 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]
document.getElementById("array4").innerHTML = `${arr24}`
let btn8 = document.getElementById("btn8");
let arr23 = document.getElementById("para4");
let s1 = 0;
let s2 =0;
let s3=0;
btn8.addEventListener("click", function () {
    for (let l = 0; l < arr1.length; l++) {
        s1 = s1 + arr1[l];
    }
    for(let k=0; k<arr24.length; k++){
        s2 = s2 + arr24[k];
    }
    s3= s1+s2;
    arr23.innerHTML = `${s3}`
})

let arraytr = [43, "what", 9, true, "cannot", false, "be", 3, true];
document.getElementById("arrayr").innerHTML=arraytr;
let btn9= document.getElementById("btn9");
let array5=document.getElementById("para5");
btn9.addEventListener("click", function(){
    for( let i=arraytr.length-1; i>=0; i--)
        {
            array5.innerHTML +=` ${arraytr[i]}<br>`;
        }

})