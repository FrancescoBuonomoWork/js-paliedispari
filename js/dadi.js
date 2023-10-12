// console.log("dadi");

const userChoise = prompt("scgli pari o dispari");
console.log(userChoise);

const userNumber = parseInt(prompt("iserisci un numero da 1 a 5 "));
console.log(userNumber);

if (userNumber < 1 || userNumber > 5) {
    console.log("numero non valido")
}

const pcNumber = getRandomInt(1, 5);
console.log(pcNumber);

const sumOfNumbers = getSum(userNumber, pcNumber);
console.log(sumOfNumbers);

// const provaSomma = getSum(2, 3);
// console.log(provaSomma);






// funzione per generare un numero 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
}
// funzione per fare una somma 
function getSum(numA, numB) {
   const sum = numA + numB
    return sum
}