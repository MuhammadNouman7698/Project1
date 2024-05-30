let btn = document.getElementById("btn");
btn.addEventListener("click", () => {

    let tempInC = document.getElementById("tempC").value;
    let result = document.getElementById("para");
    let tempInF = (9 * tempInC / 5) + 32;
    result.innerHTML = `Temperature inn Fahrenheit is ${tempInF} F<sup>o</sup>`;
})

let btn1 = document.getElementById("btn1")
var classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
document.getElementById("studentArray").innerHTML = `${classification}`
btn1.addEventListener("click", () => {
    for (let i = classification.length - 1; i >= classification.length - 3; i--) {
        let stu = classification[i];
        document.getElementById("para1").innerHTML += `${stu}<br> `
    }
})

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
document.getElementById("showInfo").innerHTML+=`Title: ${course.title}<br>`
document.getElementById("showInfo").innerHTML+=`Categories: ${course.categories}<br>`
document.getElementById("showInfo").innerHTML+=`Main Category: ${course.categories[0]}<br>`
let total= course["5_stars_reviews"]+course["4_stars_reviews"]+course["3_stars_reviews"]+course["2_stars_reviews"]+course["1_stars_reviews"];
let fiveStar= course["5_stars_reviews"]/total*100;
document.getElementById("showInfo").innerHTML+=`${Math.floor(fiveStar)}% Reviews are 5 Star<br>`

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
document.getElementById("shopList").innerHTML+=`${shoppingList}<br><br>`;
shoppingList.pop();
document.getElementById("shopList").innerHTML+=`Last item is removed using pop<br><br>${shoppingList}<br><br>`;
shoppingList.unshift("Chocolate");
document.getElementById("shopList").innerHTML+=`Last item is now add at first position using unshift<br><br>${shoppingList}<br><br>`;
shoppingList.push("Cheese", " Eggs")
document.getElementById("shopList").innerHTML+=`Two more items added using push<br><br>${shoppingList}<br><br>`;









