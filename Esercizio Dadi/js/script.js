//Dichiarare una prima variabile per il "tiro" del giocatore
const userTry = Math.floor(Math.random() * 6) + 1;
console.log(userTry);
//Dichiarare una seconda variabile per il "tiro" del computer
const computerTry = Math.floor(Math.random() * 6) + 1;
console.log(computerTry);
//Stabilire chi ha vinto tramite ciclo if
let result;
if (userTry > computerTry) {
    result = "Hai vinto";
} else if (computerTry > userTry) {
    result = "Hai perso";
} else {
    result = "Pareggio"
}
console.log(result);

//Stampa result / OUTPUT
document.getElementById("result").innerHTML = result;