// Initialization
const checkButton = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result")

checkButton.addEventListener('click', palindrome);

function cleanInputString(str) {
    const regex = /[^a-z0-9]/g;
    return str.replace(regex, '');
}
// Function check's if the #text-input is palindrome or not.
function palindrome() {
    const inputWord = textInput.value;
    if ( inputWord === '') {
        alert("Please input a value")
    }
    else {
        let cleanedWord = cleanInputString(inputWord.toLowerCase());
        let reverseWord = '';
        for (let i = cleanedWord.length - 1; i >= 0; i--){
            reverseWord += cleanedWord[i];
        }
        console.log(reverseWord);
        if ( cleanedWord === reverseWord) {
            result.innerText = `${inputWord} is a palindrome`
        }
        else {
            result.innerText = `${inputWord} is not a palindrome`
        }
    }
}



