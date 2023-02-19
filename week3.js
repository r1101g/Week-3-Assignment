//1a.
let ages = [3,9,23,64,2,8,28,93];
let num1 = ages[0];
let num2 = ages[ages.length-1];
console.log(num2 - num1);

//1b.
ages.push(19);
console.log(ages)
num1 = ages[0];
num2 = ages[ages.length-1];

console.log(num2 - num1);
//1c.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    	
	sum += ages[i];
    
  }
console.log("The average age is: " + sum/ages.length);

//2.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a.
let sum = 0;
let count = 0;

for (let i = 0; i < names.length; i++ ) {
    let name = names[i];
    sum += names[i].length;
    count++;
    }

console.log("Average number of letters per name is: " + sum/count);

//2b.
let name1 = [];
for (let i = 0; i < names.length; i++ ) {
    name1 += (names[i] + " ");

        
    }
    console.log(name1);

//5.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [];

for (let i = 0; i < names.length; i++ ) {
    //let name = names[i];
    nameLengths[i] = names[i].length;
    }

console.log(nameLengths);

//6.
let sum = 0;
for (let i = 0; i < nameLengths.length; i++ ) {
    sum += nameLengths[i];
    }
    console.log(sum);

//7.
function concat_N_Times(word, n) {
    let saying = "";
 
    for (let i = 0; i < n; i++) {
         saying += word;
     }
     return saying ;
 }
 console.log(concat_N_Times("hi", 6));
 
 //8.
function fullName(firstName, lastName) {
   
    return firstName + " " + lastName;
}
console.log(fullName("Mike", "Smith"));

//9.
function arrayOfNumbers(array1) {
    let sum = 0;

    for (let i = 0; i < array1.length; i++) {
        sum += array1[i];
    }  
    if (sum > 100) {
        return true;
    }
    return false;
}
console.log(arrayOfNumbers([1,2,3,4,100]));

//10.
function arrayOfNumbers(array1) {
    let sum = 0;
    let arraySize = array1.length;

    for (let i = 0; i < array1.length; i++) {
        sum += array1[i];
    }  
    return (sum/arraySize);
}
console.log(arrayOfNumbers([1,2,3,4,5]));

//11.
function arraysCompare(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;
    let average1;
    let average2;
    let arraySize1 = array1.length;
    let arraySize2 = array2.length;

    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }  
    average1 = sum1/arraySize1;

    for (let j = 0; j < array2.length; j++) {
        sum2 += array2[j];
    }  
    average2 = sum2/arraySize2;

    if (average1 > average2) {
        return true;
    }
    
}
console.log(arraysCompare([2,8,2, 100], [10,10]));

//12.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket > 10.5)) {
        return true;    
    } 
}

console.log(willBuyDrink(true, 11))

//13.
/* functiion simulating rolling a dice. If your number matches
the random number between 1 and 6, you win.  Simple little game 
to pass the time!   */

function diceGame(num) {
    //random whole numer generated betwween 1 and 6 
    let x = Math.floor((Math.random() * 6) + 1);
    //compare your numer to x
    if (num === x) {
        return "you won"; //if there is a match
    } else {
        return " sorry bub!"; //no match
    }
}

console.log(diceGame(1))
