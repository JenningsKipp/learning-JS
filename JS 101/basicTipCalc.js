// This is just a small program to calculate the tip yoou would pay.

food = Number(prompt('how much was the food?'))
tipPercentage = Number(prompt('How much would you like to tip?')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount

console.log('tip amount:', tipAmount)
console.log('total:', total)