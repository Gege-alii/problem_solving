// Exercise 1: Filtering an Array

function filterEvenNumbers() {
    const input1 = document.getElementById('numberArray1').value;

    // Convert the input string into an array of numbers
    const numberArray1 = input1.split(',')
                              .map(num1 => parseFloat(num1.trim()))
                              .filter(num1 => !isNaN(num1));

    const evenNumbers = Array.from(new Set(numberArray1.filter(num1 => num1 % 2 === 0)));
    evenNumbers.sort((a, b) => b - a);

    // Display the result
    document.getElementById('result1').textContent = evenNumbers.length > 0
        ? evenNumbers.join(', ')
        : 'No even numbers found';
}


// Exercise: 2 Find the Largest Number
function findLargestNumber() {
    const input2 = document.getElementById('numberArray2').value;

    // Convert the input string into an array of numbers
    const numberArray2 = input2.split(',')
                              .map(num => parseFloat(num.trim()))
                              .filter(num => !isNaN(num));

    const largestNumber = numberArray2.length > 0 ? Math.max(...numberArray2) : 'No numbers found';

    // Display the result
    document.getElementById('result2').textContent = largestNumber;
}


//  Exercise: 3 Reverse a String
function reverseString() {
    const input3 = document.getElementById('inputString').value;
    const reversed = input3.split('').reverse().join('');

    // Display the result
    document.getElementById('result3').textContent = reversed;
}


// Exercise: 4 Remove Duplicates
function removeDuplicates() {
    const input4 = document.getElementById('numberArray3').value;

    // Convert the input string into an array of numbers
    const numberArray3 = input4.split(',')
                              .map(num => parseFloat(num.trim()))
                              .filter(num => !isNaN(num));

    const uniqueNumbers = Array.from(new Set(numberArray3));

    // Display the result
    document.getElementById('result4').textContent = uniqueNumbers.length > 0
        ? uniqueNumbers.join(', ')
        : 'No numbers found';
}





