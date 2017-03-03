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

//Get the info from the form field
var x = document.getElementById("calculations");

//Split the array so I can find the elements
var calculationArray = x.split(" ");

/**
 * In its basic form, this will just take the elements from either side of the operator,
 * which are hopefully only separated by the symbol in the array. Broken for now though...
 */
if(jQuery.inArray(calculationArray, '+')){
    console.log(add(calculationArray[0], calculationArray[3]));
}

