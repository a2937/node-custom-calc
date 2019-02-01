'use strict';

var history = [];
var recordedHistoryCount = 0; 
module.exports = 
{
    /**
     * Adds two numbers together.
     * @param {number} firstNumber
     * @param {number} secondNumber
     * @return {number}
     */
    Add:function(firstNumber, secondNumber) 
    {
        recordedHistoryCount = (recordedHistoryCount + 1) % 10; 
        history[recordedHistoryCount] = firstNumber.toString() + "+" +
        secondNumber.toString();  
        return firstNumber + secondNumber;
    },
    /**
     * Subtracts the second number from the first number. 
     * @param {number} firstNumber
     * @param {number} secondNumber
     * @return {number}
     */
    Subtract: function(firstNumber, secondNumber) 
    {
        recordedHistoryCount = (recordedHistoryCount + 1) % 10; 
        history[recordedHistoryCount] = firstNumber.toString() + "-" + secondNumber.toString();  
        return firstNumber - secondNumber;
    },
    /**
     * Multiplies two numbers together. 
     * @param {number} firstNumber
     * @param {number} secondNumber
     * @return {number}
     */
    Multiply: function(firstNumber, secondNumber) 
    {
        recordedHistoryCount = (recordedHistoryCount + 1) % 10; 
        history[recordedHistoryCount] = firstNumber.toString() + "*" + secondNumber.toString();  
        return firstNumber * secondNumber;
    },
    /**
     * Divides the first number by the second number. 
     * @param {number} firstNumber
     * @param {number} secondNumber
     * @return {number}
     */
    Divide: function(firstNumber, secondNumber) 
    {
        recordedHistoryCount = (recordedHistoryCount + 1) % 10; 
        history[recordedHistoryCount] = firstNumber.toString() + "/" + secondNumber.toString();  
        return firstNumber / secondNumber;
    },
     /**
     * Square roots the given number
     * to four digits of precision. 
     * @param {number} x
     * @return {number}
     */
    SquareRoot: function(x) 
    {
        recordedHistoryCount = (recordedHistoryCount + 1) % 10; 
        history[recordedHistoryCount] = "&#8730" + x.toString();  
        var initialGuess = 42; 
        var improvedGuess = (initialGuess + x)/2;
        var lastGuess = improvedGuess; 
        do
        {
            lastGuess = improvedGuess;
            improvedGuess = (lastGuess + (x/lastGuess)) / 2; 
        }
        while(improvedGuess.toPrecision(4) != lastGuess.toPrecision(4));
        return improvedGuess; 
    },
    /**
     * Returns the last ten functions performed on this module.
     * @return {string[]}
     */
    History: function()
    {
        return history; 
    }


};




