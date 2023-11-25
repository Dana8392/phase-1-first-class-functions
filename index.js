const { spy } = require("chai");

let count = 0

do{

console.log(`I am ${count}!!`)

count+=1
}while (count < 15);


function receivesAFunction(callback) {

    callback();
    
}

receivesAFunction();

function returnsANamedFunction() {
    return function namedFunction() {   
    }   
}
returnsANamedFunction();


function returnsAnAnonymousFunction(){
    return function () {   
    }
};
returnsAnAnonymousFunction();

