const generatePasswordBtn = document.querySelector('.generate-passwords-btn');
const displayPasswords = document.querySelector('.display-passwords-container');
const displayPassword = document.querySelectorAll('.pw-display');
const changePasswordLength = document.querySelector('.change-password-length');

const characters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '&', '$', '#', '!', '?', '<', '>', '+'
];

function generatePassword(num = 15) {
    const pwArr = [];

    for (let j = 0; j < 2; j++) { // Generate two passwords
        let resultStr = "";
        for (let i = 0; i < num; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            resultStr += characters[randomIndex];
        }
        pwArr.push(resultStr);
    }
    return pwArr;
}

let num = changePasswordLength.value || changePasswordLength.min;
changePasswordLength.addEventListener('input', () => {
    num = changePasswordLength.value;
});

function renderPassword() {
    let passwords = generatePassword(num);
    
    for (let i = 0; i < displayPassword.length; i++) {
        if (passwords[i]) {
            displayPassword[i].textContent = passwords[i];
        }
    }
}

// Event listener to generate passwords when button is clicked
generatePasswordBtn.addEventListener('click', renderPassword);
