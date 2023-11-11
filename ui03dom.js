// using ESM
import getUsers from './ui03users.js';

function addUserToDom(name) {
    const node= document.createElement("li");
    const text = document.createTextNode(name);
    node.appendChild(text);
 
    document.getElementById("users").appendChild(node);
}

document.getElementById("submit").addEventListener("click", function(){
    var input = document.getElementById("input");
    addUserToDom(input.value);
    input.value="";
})

// can't use window.getUsers() for ESM. getUsers is no longer global but imported
// var users=window.getUsers();
var users= getUsers();
for (var i=0; i < users.length;i++){
    addUserToDom(users[i]);
}