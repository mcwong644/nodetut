// type conversion
// https://youtu.be/I68O9oazLbo?si=-Iuu7qiFeg3nsknP

// let age=window.prompt("how old are you?");
let age;

document.getElementById("myButton").onclick=function(){
    age= Number(document.getElementById("myAge").value);
    age+=1;
    document.getElementById("resultAge").innerHTML=`You are ${age} years old Next Birthday`;
}

let x;
let y;
let z;

x=Number("3.14");
y=String(3.14);
z=Boolean("pizza");
q=Number("pizza");

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
console.log(q,typeof q);