/* Snack #4:
Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste. */


//Creare un'array di nomi
var nomiLista = ["Lucia", "Sofia", "Leonardo", "Valentina", "Federico"];
console.log(nomiLista);

//Creare un'array di cognomi
var cognomiLista = ["Rossi", "Verdi", "Gialli", "Neri", "Arancioni"];
console.log(cognomiLista);


for (var i = 0; i < 10; i++) {

    
}



//----------------
//FUNCTION

function arrayRandom (nome, cognome) {

    var randomNomi = nome[Math.floor(Math.random() * nome.length)];
    console.log(randomNomi);

    var randomCognomi = cognome[Math.floor(Math.random() * cognome.length)];
    console.log(randomCognomi);

    
    
}

