//random password generator



function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChars = "";

    for(let i = 0; i < lowercaseChars.length; i++) {
        let temp = lowercaseChars[i].toUpperCase();
        uppercaseChars += temp;
    }

    let numberChars = "";

    for(let i = 0; i < 10; i++) {
        numberChars += String(i);
    }
    
    let symbolChars = "!@#$%^&*()";

    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowerCase ? lowercaseChars : ""; //lowercaseChars if true, concat, else concat empty string.
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0) {
        return `(password length must be at least 1)`;
    }

    if(allowedChars.length === 0) {
        return `(Choose at least one option.)`;
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password+=allowedChars[randomIndex];
    }


    
    
    return password;
}





function handleGeneratePassword() {

    const passWordLength = parseInt(document.getElementById("selectPasswordLen").value, 10);
    const includeLowerCase = document.getElementById("lowerCaseLetters").checked;
    const includeUpperCase = document.getElementById("upperCaseLetters").checked;
    const includeNumbers = document.getElementById("nums").checked;
    const includeSymbols = document.getElementById("specialCharacters").checked;

    const password = generatePassword(passWordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    document.getElementById("result").textContent = password;
}


