function integerArray(no1, no2) {
    // in the above line of code i have written a functon that has two parameters the first and the second number
    var inBetweenNumbers = [];
    for (var i = no1; i <=no2; i++)
    //  the above line is a for loop that iterates through the given numbers
      {inBetweenNumbers.push(i);
        // the above line has a destructive array method that allows one to add the 
        // numbers after each loop
    }
    return inBetweenNumbers;
    // a new array is returned with the numbers
  }
  console.log(integerArray(2,7))