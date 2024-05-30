
    function addPyPrefix() {
        var stri= document.getElementById("inputString").value;
        if (stri.startsWith("py") || stri.startsWith("Py") ) {
            document.getElementById("result").innerHTML=`Result : ${stri}`
        } else {
            document.getElementById("result").innerHTML=`Result : py${stri}`
        }
    }


function removedChar() {
    var removeFrom = document.getElementById("mainString").value;
    var position = document.getElementById("pos").value;
    var removed = removeFrom.slice(0, position - 1) + removeFrom.slice(position)
    document.getElementById("removed").innerHTML = `The new String is "${removed}"`
}


function newString() {
    var str = document.getElementById("newst").value
    var news = str.slice(-1,) + str.slice(1, str.length - 1) + str.slice(0, 1)
    document.getElementById("para2").innerHTML = `The new String is ${news}`
}


function mul() {
    var newNumber = document.getElementById("num1").value;

    if (newNumber % 3 == 0 && newNumber % 7 == 0) {
        document.getElementById("nm").innerHTML = ` ${newNumber} is multiple of 3 and 7`
    }
    else if (newNumber % 3 == 0) {
        document.getElementById("nm").innerHTML = ` ${newNumber} is multiple of 3`
    }
    else if (newNumber % 7 == 0) {
        document.getElementById("nm").innerHTML = ` ${newNumber} is multiple of 7`
    }
    else {
        document.getElementById("nm").innerHTML = ` ${newNumber} is not a multiple of 3 or 7`

    }
}

function addSt() {
    var ast = document.getElementById("st");
    var astt = ast.value;
    var asd = astt.slice(-3,)
    document.getElementById("s").innerHTML = ` New string is: ${asd}${astt}${asd}`
}

function greatestNumber() {
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;

    if (x > y && x > z) {
        document.getElementById("gn").innerHTML = `The Greatest number is  ${x}`
    }
    else if (y > x && y > z) {
        document.getElementById("gn").innerHTML = `The Greatest number is ${y}`
    }
    else {
        document.getElementById("gn").innerHTML = `The Greatest number is ${z}`

    }
}

function grades1() {
    var grad = document.getElementById("marks").value;
    if (grad >= 89 && grad <= 100) {
        document.getElementById("grade").innerHTML = `The grade of student is A+ True`
    }
    else {
        document.getElementById("grade").innerHTML = `The grade of student is D`
    }

}

function sum() {
    var nu1 = document.getElementById("n1").value;
    var nu2 = document.getElementById("n2").value;

    var com = parseInt(nu1) + parseInt(nu2)

    if (com >= 50 && com <= 80) {
        document.getElementById("para").innerHTML = `65`
    }
    else {
        document.getElementById("para").innerHTML = `80`
    }

}



