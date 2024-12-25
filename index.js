// Random_Number_Generator

const MyButton= document.getElementById("MyButton");
const MyLabel1= document.geyElementById("MyLabel1");
const MyLabel2= document.geyElementById("MyLabel2");
const MyLabel3= document.geyElementById("MyLabel3");
const min =1;
const max =9;

let random_Num1;
let random_Num2;
let random_Num3;
MyButton.onclick = function(){
    random_Num1 = Math.floor(Math.random * max)+ min;
    random_Num2 = Math.floor(Math.random * max)+ min;
    random_Num3 = Math.floor(Math.random * max)+ min;
    Label1.textContent = random_Num1;
    Label2.textContent = random_Num2;
    Label3.textContent = random_Num3;
}