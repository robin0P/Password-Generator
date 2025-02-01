const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

console.log(characters.length)

let passwordBox1El = document.getElementById("password-box-1")
let passwordBox2El = document.getElementById("password-box-2")

function getRandomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function generatePassword() {
    let password = ""

    for (let i = 0; i < 10; i++) {
        password += characters[getRandomIndex()]
    }
    
    return password
}

function insertPassword() {
    passwordBox1El.textContent = generatePassword()
    passwordBox2El.textContent = generatePassword()
}

function copyOnClick1() {
    navigator.clipboard.writeText(passwordBox1El.textContent)
    passwordBox1El.textContent = "Copied"
}

function copyOnClick2() {
    navigator.clipboard.writeText(passwordBox2El.textContent)
    passwordBox2El.textContent = "Copied"
}