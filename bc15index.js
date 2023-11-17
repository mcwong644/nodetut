
document.getElementById("myButton").onclick=function(){

    const checked=document.getElementById("myCheckBox").checked;
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    let myResult="";

    if(checked) {
        myResult="Subscribed"
        document.getElementById("result").innerHTML=`${myResult}`;
    }
    else {
        myResult="Not Subscribed"
        document.getElementById("result").innerHTML=`${myResult}`;
    }

    if(visaBtn.checked){
        myResult=`${myResult}, Visa`;
        document.getElementById("result").innerHTML=`${myResult}`;
    }
    else if(mastercardBtn.checked){
        myResult=`${myResult}, MasterCard`;
        document.getElementById("result").innerHTML=`${myResult}`;
    }
    else if(paypalBtn.checked){
        myResult=`${myResult}, Paypal`;
        document.getElementById("result").innerHTML=`${myResult}`;
    }
    else {
        myResult=`${myResult}, You must select payment option!`;
        document.getElementById("result").innerHTML=`${myResult}`;
    }
}