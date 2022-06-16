var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// the variable currentNumberWrapper is responsible for getting the html element
// with his code. them you need to implement this code into the variable manipulated
// by the function. this is what the currentNumberWrapper.innerHTML = currentNumber: 
// atribute the html code to the value stored into the currentNumber.

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}