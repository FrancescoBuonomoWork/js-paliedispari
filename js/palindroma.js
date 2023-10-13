// console.log("palidroma");

const userWord = prompt("Inserisci una parola per verificare che sia palindroma");
console.log(userWord);
console.log(userWord.length);



// const fromWordToArray = userWord.split("");
// console.log(fromWordToArray);
// const ArrayReverse = fromWordToArray.reverse();
// console.log(ArrayReverse);

function isPalindrome(word) {
    word = word.toLowerCase();
    const fromWordToArray = word.split("");
    console.log(fromWordToArray);
    const arrayReverse = fromWordToArray.reverse();
    console.log(arrayReverse);
    const wordReverse = arrayReverse.join("");
    console.log(wordReverse);



    if (word === wordReverse) {
       return true
        
    } else {
       return false
    }
}

if (isPalindrome(userWord)){
    console.log("la parola è palindroma")
}else {
    console.log("la parola non è palindroma");
}
// console.log(userWord);

const parolaDiProva = "parola";
if (isPalindrome(parolaDiProva)){
    console.log("la parola è palindroma")
}else {
    console.log("la parola non è palindroma");
}
