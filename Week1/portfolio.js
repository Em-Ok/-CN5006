// Program does basic arithmetic with two numbers
console.log("Basic Arithmetic")
// This line loads prompt function to read user input synchronously
const prompt = require("prompt-sync")();

const operation = prompt("Enter the arthmetic operation: +, -, *, / ");
const num1 = parseInt(prompt("Enter your first number: "));
const num2 = parseInt(prompt("Enter your second number:"));

if (operation == "+")
{
    sum = num1 + num2;
    console.log(`The answer of ${num1} + ${num2} is ${sum} `);
}
else if (operation == "-")
{
    sum = num1 - num2;
    console.log(`The answer of ${num1} - ${num2} is ${sum} `);
}
else if (operation == "*")
{
    sum = num1 * num2;
    console.log(`The answer of ${num1} * ${num2} is ${sum} `);
}
else
{
    sum = num1 / num2;
    console.log(`The answer of ${num1} / ${num2} is ${sum} `);
}


