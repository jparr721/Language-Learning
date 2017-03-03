/**
 * Created by Jarred on 3/3/17.
 */

var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);



var add = function(a, b){
    return a + b;
};

var subtract = function(a, b){
    return a - b;
};

var multiply = function(a, b){
    return a * b;
};

var divide = function(a, b){
    return a / b;
};

var x = document.getElementById("calculations");

var calculationArray = x.split(" ");

if(jQuery.inArray(calculationArray, '+')){
    console.log(add(calculationArray[0], calculationArray[3]));
}

