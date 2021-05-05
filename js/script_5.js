/* Snack #5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
Stampa l'array nella console. */


//Crea un array vuoto
var arrayVuoto = [];
console.log(arrayVuoto);


for (var i = 0; i < 6;  i++) {

    var numeroUtente = parseInt(prompt("Inserisci un numero!"));
    console.log(numeroUtente);

    if (isOdd (numeroUtente) == true) {
        arrayVuoto.push(numeroUtente);
        console.log(arrayVuoto);
    } 
}

//----------------
//FUNCTION


function isOdd(num) {

    if (num % 2 != 0){
        return true;
    } else {
        return false;
    }
}