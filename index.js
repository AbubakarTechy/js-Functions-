______________________________//Functions
_________// i) Simple function
function myFunc(){
    console.log("This is my first function");
    console.log("Thi sis sec line");
}


myFunc();
____________________________________

_________// ii)  Function with parameter
function para(msg){   //func parameter --> they r local variable
    console.log(msg);
}

para("Print my this msg");   //func argument

//ii)

function sum(a,b){
    console.log(a+b);
}
sum(5,3);

___________//iii) Function with return keyword

function ret(a,b){
   
    return a+b;
}
let ans=ret(3+4);
console.log(ans);


____________// iv) Arrow function

const arrowSum=(a,b)=>{
    console.log(a+b);
}
arrowSum(5,3);

_____________//Practice question

function prac(msg){
   for(const  char of msg){
    
   }
}
var anss=prac("abubakar");
console.log(anss);

_____________________________________________

