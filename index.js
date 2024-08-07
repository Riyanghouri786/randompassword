let show = document.getElementById("data");

let lenght = 8;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let symbol = "!@#$%^&*()_?";

let allCharacters = uppercase + lowercase + symbol

function code() {
    let password = '';
   for (i = 0; i<lenght;i++ ) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];    
   }



    show.value = password
}
