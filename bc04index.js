// https://youtu.be/fARJwGqdbKQ?si=h3IKMpipnH0Y47nv
// user input easy 
// let username=window.prompt("Whats your name?");
// console.log(username);

// hard way

let username;

document.getElementById("myButton").onclick=function(){
username=document.getElementById("myText").value;
console.log(username);
document.getElementById("myLabel").innerHTML=`Hello ${username}`;

}