var btn1 = document.getElementById("Btn1");
var btn2 = document.getElementById("Btn2");
var btn3 = document.getElementById("Btn3");
var btn4 = document.getElementById("Btn4");
var btn5 = document.getElementById("Btn5");
var btn6 = document.getElementById("Btn6");
var btn7 = document.getElementById("Btn7");
var btn8 = document.getElementById("Btn8");
var btn9 = document.getElementById("Btn9");
var btn10 = document.getElementById("Btn0");

var add = document.getElementById("Addition");
var subtract = document.getElementById("Subtraction");
var multiply = document.getElementById("Multiplication");
var divide = document.getElementById("Division");
var equality = document.getElementById("equal");
var AC = document.getElementById("AC");
var Back = document.getElementById("Back");
var DOT = document.getElementById("Btn.");

btn1.addEventListener("click",function() {
    document.getElementById("display").value += "1";
})

btn2.addEventListener("click",function() {
    document.getElementById("display").value += "2";
})

btn3.addEventListener("click",function() {
    document.getElementById("display").value += "3";
})

btn4.addEventListener("click",function() {
    document.getElementById("display").value += "4";
})

btn5.addEventListener("click",function() {
    document.getElementById("display").value += "5";
})

btn6.addEventListener("click",function() {
    document.getElementById("display").value += "6";
})
btn7.addEventListener("click",function() {
    document.getElementById("display").value += "7";
})
btn8.addEventListener("click",function() {
    document.getElementById("display").value += "8";
})
btn9.addEventListener("click",function() {
    document.getElementById("display").value += "9";
})
btn10.addEventListener("click",function() {
    document.getElementById("display").value += "0";
})
DOT.addEventListener("click",function() {
    document.getElementById("display").value += ".";
})
equality.addEventListener("click",function() {
    var equation = document.getElementById("display").value;
    var result= eval(equation);
    document.getElementById("display").value = result;
})
AC.addEventListener("click",function() {
    document.getElementById("display").value = "";
})
Back.addEventListener("click",function() {
    var str= document.getElementById("display").value += "";
    var back= str.substr(0,str.length -1);
    document.getElementById("display").value = back;

})
add.addEventListener("click",function() {
    document.getElementById("display").value += "+";
})
subtract.addEventListener("click",function() {
    document.getElementById("display").value += "-";
})

multiply.addEventListener("click",function() {
    document.getElementById("display").value += "*";
})

divide.addEventListener("click",function() {
    document.getElementById("display").value += "/";
})