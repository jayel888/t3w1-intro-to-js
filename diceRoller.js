console.log("Start of the Dice Roller!");

// Simple dice roller function
/**
 * Example JSDoc comment - Simple Dice Roller function
 * @param {number} [diceSize=6] 
 */

function rollDice(diceSize = 6) {
    console.log(`Rolling a ${diceSize}-sided die...`);
    let diceSide = Math.ceil(Math.random() * diceSize);
    // console.log(diceSide);
    return diceSide;
}

// Simple Call, default parameter value used
rollDice();

// Overwriting the default parameter value
rollDice(diceSize = 10);

// or
rollDice(20);

// Specific dice roller function that calls the simple function
// Using function expression
const rollDice25 = function () {
    rollDice(25);
}

rollDice25();


/**
 * Using arrow function / Unanonymous function to roll die of size 15
 * @returns the result of rolling the die
 */
const rollDice15 = () => {
    return rollDice(15);
    // or
    // result = rollDice(15);
    // return result;
}

let diceSide15 = rollDice15();
console.log("The side you rolled on this 15-sided die is: " + diceSide15)

// If we want more functionality, then we use the {}, otherwise w can use the shortended version.

/**
 * Using the Roll Dice function for 8 sided die
 * @returns Results of the 8 sided die roll
 */
const rollDice8 = () => rollDice(8);
console.log("The side you rolled for the 8-sided die is: " + rollDice8());

// Implementing the callback feature/functionality/characteristic of function


/**
 *
 * @param {*} side
 * @param {*} callback
 * @returns the callback function that will be passed, ideally the rollDice() function
 */
function customDiceRoll(side, callback) {
    return callback(side);
}

result = customDiceRoll(30, rollDice);
console.log(result);

// Example of Hoisting
rollMultipleDice(3, 6, (result) => console.log("Rolled: " + result));

// Function to roll multiple dice
function rollMultipleDice(numDice, diceSize, callback) {
    for (let i=0; i < numDice ; i++) {
        const result = rollDice(diceSize);
        callback(result);
    }
}

