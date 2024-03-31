function toggleCase(addString) {
    // in the line above the function toggle case is written and accepts a string when invoked
    var changedString = "";
    for (var i = 0; i < addString.length; i++) 
    //in the above line a for loop is introduced to iterate through the string added 
        {var char = addString.charAt(i);
        if (char === char.toUpperCase()) {
    // in the above line the if statement checks if the characters in the string are strictly in uppercase
            changedString += char.toLowerCase();
            //in the above line the  the string is changed to lowercase
        } else {
            changedString += char.toUpperCase();

        }
    }
    return changedString;
}

// in order to see if the function is working test it in the lines below
var addString = 'The Quick Brown Fox';
var outputString = toggleCase(addString);
console.log(outputString);
