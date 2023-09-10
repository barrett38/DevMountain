///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1] // 15 total
const galaAcres = [5, 2, 4, 3, 6, 2, 4] // 26 total
const pinkAcres = [1, 5, 4, 2, 1, 5, 4] // 22 total
// Total is 63 

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// Create a newArray containing all arrays
let newArray = [...fujiAcres, ...galaAcres, ...pinkAcres]
// Find the sum of the newArray
let totalAcres = 0
for (let i = 0; i < newArray.length; i++) {
  totalAcres += newArray[i];
}
console.log("The total acres picked (should be 63): " + totalAcres)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// Basic calculation of the daily amount
// Using fujiAcres.length since it is the same length as the others > 
// For this example, the asnwer should be 9
let averageDailyAcres = totalAcres / fujiAcres.length;
console.log("The average daily acres picked: " + averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number witshout using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// Writing a while loop that will continue to run > 
while (acresLeft > 0) { // while `acresLeft` is above 0. 
  days++; // Add 1 to the `days` variable
  acresLeft -= averageDailyAcres; // Subtract averageDailyAcres from acresLeft
}
console.log("Days: ", days) // Outside the loop, log `days` to the console.


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// Create new arrays to store daily apple yields in tons
let fujiAcresCopy = fujiAcres.slice()
let galaAcresCopy = galaAcres.slice()
let pinkAcresCopy = pinkAcres.slice()

// Convert acres to tons (1 acre yields 6.5 tons of apples)
const tonsPerAcre = 6.5;

// Loop through the copied arrays and calculate daily yields in tons
for (let i = 0; i < fujiAcresCopy.length; i++) {
  fujiAcresCopy[i] *= tonsPerAcre;
  galaAcresCopy[i] *= tonsPerAcre;
  pinkAcresCopy[i] *= tonsPerAcre;
}

// Recording new arrays
// Checking answers in console.log in Terminal
console.log("Fuji Daily Apple Yields (in tons):", fujiAcresCopy);
console.log("Gala Daily Apple Yields (in tons):", galaAcresCopy);
console.log("Pink Daily Apple Yields (in tons):", pinkAcresCopy);



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// Converting the Arrays into Pounds first
let lbsInATon = 2000
for (let i = 0; i < fujiAcresCopy.length; i++) {
    fujiAcresCopy[i] *= lbsInATon;
    galaAcresCopy[i] *= lbsInATon;
    pinkAcresCopy[i] *= lbsInATon;
  }

// Using a For Loops to calculate the sum of each variety
// For loop is being used to calculate the SUM of each Array
let fujiPounds = 0
for (let i = 0; i < fujiAcresCopy.length; i++) {
  fujiPounds += fujiAcresCopy[i];
}
let galaPounds = 0
for (let i = 0; i < galaAcresCopy.length; i++) {
  galaPounds += galaAcresCopy[i];
}
let pinkPounds = 0
for (let i = 0; i < pinkAcresCopy.length; i++) {
    pinkPounds += pinkAcresCopy[i];
  }
console.log("Fuji pounds are ", fujiPounds)
console.log("Gala pounds are ", galaPounds)
console.log("Pink pounds are ", pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// Basic multiplication
let fujiProfit = fujiPounds * fujiPrice
console.log ("Price of Fuji is $", fujiProfit)
let galaProfit = galaPounds * galaPrice
console.log ("Price of Gala is $", galaProfit)
let pinkProfit = pinkPounds * pinkPrice
console.log ("Price of Pink is $", pinkProfit)

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("Total Profit is $", totalProfit)
