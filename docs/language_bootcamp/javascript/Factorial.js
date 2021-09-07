"use strict";

//------------------------------------------------------
// factorial
//
// PURPOSE: to show a recursive implementation of the factorial function.
//
// PARAMETERS:
//      - num is the number that you want to perform a factorial on.
//
// RETURN: returns the calculated factorial value (integer).
//
//------------------------------------------------------
function factorial(num){
    if (arguments.length !== 1 || !Number.isInteger(num) || num < 0){
        throw new Error("Invalid use of factorial() function.  factorial() " +
            "takes 1 argument as a parameter, which is a positive integer.");
    }

    let returnValue = 1; // value to be returned

    if (num > 1){
        returnValue = num * factorial(num - 1);
    }

    return returnValue;
}

//------------------------------------------------------
// main
//
// PURPOSE: calls factorial() on a specified value and outputs the result to
//          console.log().
//
//------------------------------------------------------
function main(){
    let num = 5; // number to calculate factorial on
    let answer = factorial(num); // factorial result / answer

    // output to the console the number and the answer.
    console.log("The factorial of \"%d\" is \"%d\".", num, answer);
}

main(); // run the main() function
