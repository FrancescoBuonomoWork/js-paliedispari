// console.log("dadi");
const h1DOMElement = document.getElementById("result");
console.log(h1DOMElement);
const userChoise = prompt("scgli pari o dispari");
console.log(userChoise);

const userNumber = parseInt(prompt("iserisci un numero da 1 a 5 "));
console.log(userNumber);

if (userNumber < 1 || userNumber > 5) {
    console.log("numero non valido")
}

const pcNumber = getRandomInt(1, 5);
console.log(pcNumber);

// somma dei numeri 
const sumOfNumbers = getSum(userNumber, pcNumber);
console.log(sumOfNumbers);

const isEvenSumOfNumbers = isEven(sumOfNumbers);
console.log(isEvenSumOfNumbers);


if (isEvenSumOfNumbers && userChoise === "pari") {
    console.log("hai vinto");
    h1DOMElement.append("hai vinto");


} else if (isEvenSumOfNumbers === false && userChoise ==="dispari") {
    console.log("hai vinto");
    h1DOMElement.append("hai vinto");
} else {
    console.log("hai perso");
    h1DOMElement.append("hai perso");
}







// funzione per generare un numero 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
}
// const provaSomma = getSum(2, 3);
// console.log(provaSomma);
// funzione per fare una somma 
function getSum(numA, numB) {
    const sum = numA + numB
    return sum
}
// const testPari = isEven(3);
// console.log(testPari);
// funzione per verificare se un numero è pari 
function isEven(num) {
    if (num % 2 === 0){
        return true
    } else {
        return false
    }

}