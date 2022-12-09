const acButton = document.getElementById("button-AC");
const negativeButton = document.getElementById("button-negative");
const procentageButton= document.getElementById("button-procentage");
const divideButton = document.getElementById("button-divide");
const multiplyButton = document.getElementById("button-multiply");
const minusButton = document.getElementById("button-minus");
const buttonPlus = document.getElementById("button-plus");
const buttonEquals = document.getElementById("button-equals");
const buttonComma = document.getElementById("button-comma")

const buttonOne = document.getElementById("button-1");
const buttonTwo = document.getElementById("button-2");
const buttonThree = document.getElementById("button-3");
const buttonFour = document.getElementById("button-4");
const buttonFive = document.getElementById("button-5");
const buttonSix = document.getElementById("button-6");
const buttonSeven = document.getElementById("button-7");
const buttonEight = document.getElementById("button-8");
const buttonNine = document.getElementById("button-9");
const buttonZero = document.getElementById("button-zero");
const display = document.getElementById("display");


let number1 = "";
let number2 = "";
let state = "";
//basically equals
function lastOperation(){
    switch(state){
        case "+":
            sum();
            fontSize();
        case "-":
            subtract();
            fontSize();
        case "*":
            multiply();
            fontSize();
        case "/":
            divide();
            fontSize();
    }
}
// functions for + , - , / , *

function sum(){

    if(number2!=""&&number1!=""){
       number2=(parseFloat(number2)+parseFloat(number1)).toString();
       number1="";
       display.innerHTML=number2;
    }
    else if(number1==""&&number2!=""){

    }
   else{
       number2=number1;
       number1="";

       display.innerHTML=number2

   }
   
}
function divide(){

    if(number2!=""&&number1!=""){
       number2=(((parseFloat(number2)/parseFloat(number1)).toFixed(2))).toString();
       number1="";
       display.innerHTML=number2;
    }
    else if(number1==""&&number2!=""){

    }
   else{
       number2=number1;
       number1="";
       display.innerHTML="/"

   }
   state="/"
}
function subtract(){

    if(number2!=""&&number1!=""){
       number2=((parseFloat(number2)-parseFloat(number1))).toString();
       number1="";
       display.innerHTML=number2;
    }
    else if(number1==""&&number2!=""){

    }
   else{
       number2=number1;
       number1="";
       display.innerHTML="-"

   }
   state="-"
}
function multiply(){

    if(number2!=""&&number1!=""){
       number2=(parseFloat(number2)*parseFloat(number1)).toString();
       number1="";
       display.innerHTML=number2;
    }
    else if(number1==""&&number2!=""){

    }
   else{
       number2=number1;
       number1="";
       display.innerHTML="*"

   }
   state="*"
}

function fontSize(){
    if(number1.length>10||number2.length>10){
        display.style.fontSize="1.6rem";}
    else if (number1.length>7||number2.length>7){
        display.style.fontSize="2rem";
    }
    else{
        display.style.fontSize="3rem";

    }
}
//Sum
buttonPlus.addEventListener("click", sum)
//Divide
divideButton.addEventListener("click", divide)
//Subtract
minusButton.addEventListener("click", subtract)
//Multiply
multiplyButton.addEventListener("click", multiply)

buttonEquals.addEventListener("click", lastOperation)

buttonOne.addEventListener("click", ()=>{
    number1+="1";
    display.innerHTML=number1;
    fontSize()
})
buttonTwo.addEventListener("click", ()=>{
    number1 +="2";
    display.innerHTML=number1;
    fontSize()
})
buttonThree.addEventListener("click", ()=>{
    number1+="3";
    display.innerHTML=number1;
    fontSize()
})
buttonFour.addEventListener("click", ()=>{
    number1+="4";
    display.innerHTML=number1;
    fontSize()
})
buttonFive.addEventListener("click", ()=>{
    number1+="5";
    display.innerHTML=number1;
    fontSize()
})
buttonSix.addEventListener("click", ()=>{
    number1+="6";
    display.innerHTML=number1;
    fontSize()
})
buttonSeven.addEventListener("click", ()=>{
    number1+="7";
    display.innerHTML=number1;
    fontSize()
})
buttonEight.addEventListener("click", ()=>{
    number1+="8";
    display.innerHTML=number1;
    fontSize()
})
buttonNine.addEventListener("click", ()=>{
    number1+="9";
    display.innerHTML=number1;
    fontSize()
})
buttonZero.addEventListener("click", ()=>{
    if(number1=="0"){
        number1+=",";
    }
    else{
        number1+="0";
    }
    display.innerHTML=number1;
    console.log(number1)
    fontSize()
})

buttonComma.addEventListener("click", ()=>{
   
   if(number1.includes(".")==true){
       
   }
    else if(number1==""){
       number1+="0."
   }
   else{
    number1+="."
    
   } 
  display.innerHTML=number1;
   
    fontSize()
})


acButton.addEventListener("click", ()=>{
   number1="";
   number2="";
    display.innerHTML="0";
    fontSize()
   
})

negativeButton.addEventListener("click", ()=>{
    if (number1!=""){
        number1= (parseFloat(number1)*-1).toString();
        console.log(number1)
        display.innerHTML=number1;
        }
       else{
        number2= (parseFloat(number2)*-1).toString();
        console.log(number1)
        display.innerHTML=number2;
       }
 })
 procentageButton.addEventListener("click", ()=>{
    if (number1!=""){
    number1= (parseFloat(number1)/100).toString();
    console.log(number1)
    display.innerHTML=number1;
    }
   else{
    number2= (parseFloat(number2)/100).toString();
    console.log(number1)
    display.innerHTML=number2;
   }
 })

 