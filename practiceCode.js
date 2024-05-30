// alert("practice code");

let array = ["apple" , "banana " , "mango"];

let loop =  array.map((item) => {
    if(item == "mango")
        {
            return item;
        }
})


document.getElementById("text").innerText = loop;

for ( var i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }