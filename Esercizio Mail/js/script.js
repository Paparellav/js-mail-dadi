//Creazione array con le varie email disponibili

const mail = ["pincopallo123@gmail.com", "pincopallo456@gmail.com", "pincopallo789@gmail.com", "carloersimpatico@gmail.com", "maomettorketchup@gmail.com"];

//Chiedere attraverso un prompt la mail all'user

const userMail = prompt("Inserisci la tua email");
console.log("Mail dell'utente", userMail);

//Leggere l'array tramite un ciclo for e verificare se la userMail sia presente all'interno dell'array tramite un if
let emailFound = false;

for (i=0; i < mail.length; i++) {
    let selectedMail = mail[i];
    console.log("Mail della lista", selectedMail);
    if (userMail === selectedMail) {
        emailFound = true;
    }
}

//Stampa finale del risultato / OUTPUT
if (emailFound === true) {
    document.getElementById("result").innerHTML = ("La tua mail è presente, puoi accedere alla sala.");
} else {
    document.getElementById("result").innerHTML = ("La tua mail non è presente, non puoi accedere alla sala.");
}