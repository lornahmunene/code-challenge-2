function isPrime(num) {
    // i have written the function isPrime that has the num parameter
    if (num <= 1) 
    // the if conditional checks if the number is less than or equal to 1 and returns a boolean false
    return false;
    if (num <= 3) 
    // since 2 is a prime number the conditional returns a boolean of true
    return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    // here if the number is divisible by two or three the if conditional returns a false
    
    return true;
}

function primeNumbers(num1, num2) {
    var numBetween = [];
    for (var i = num1; i <= num2; i++) {
        // the for loop iterates through the array
        numBetween.push(i);
    }
    return numBetween.filter(isPrime);
    // the array method above "filter"creates a new array using the callback function "isPrime"
}

console.log(primeNumbers(11,100)); 

