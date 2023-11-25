var a = 10;
let b = 10;
//const d=20;
var c;
var sub;
var mul;
var div;
c = a + b;
sub = a - b;
mul = a * b;
div = a / b;



console.log(c);


function add() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;

    // console.log(a)
    // console.log(b)

    var c = parseInt(a) + parseInt(b);
    document.getElementById("answer").value = c;
}
function minus() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;

    // console.log(a)
    // console.log(b)

    var sub = parseInt(a) - parseInt(b);
    document.getElementById("answer").value = sub;
}
function multiply() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;

    // console.log(a)
    // console.log(b)

    var mul = parseInt(a) * parseInt(b);
    document.getElementById("answer").value = mul;
}
function divide() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;

    // console.log(a)
    // console.log(b)

    var div = parseInt(a) / parseInt(b);
    document.getElementById("answer").value = div;
}




function num(value) {
    document.getElementById("solve").value += value;
}
function reset() {
    document.getElementById("solve").value = "";
}
function result(){
    // document.getElementById("solve").value= eval(document.getElementById("solve").value)
    var a= document.getElementById("solve").value;
    var c= eval(a)
    document.getElementById("solve").value =c
}