console.log("Start of the Dice Roller!");

// Simple dice roller function
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

// Using arrow function
const rollDice15 = () => {
    return rollDice(15);
    // or
    // result = rollDice(15);
    // return result;
}

let diceSide15 = rollDice15();
console.log("The side you rolled on this 15-sided die is: " + diceSide15)

// If we want more functionality, then we use the {}, otherwise w can use the shortended version.
const rollDice8 = () => rollDice(8);
console.log("The side you rolled for the 8-sided die is: " + rollDice8());