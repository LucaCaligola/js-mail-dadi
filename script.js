const min = 1;
const max = 6;



let dadoUtente = (Math.floor(Math.random() * (max - min + 1) + min));
console.log ('il tuo numero è ' + dadoUtente)

let dadoComputer = (Math.floor(Math.random() * (max - min + 1) + min));
console.log ('il numero del computer è ' + dadoComputer)

if (dadoComputer < dadoUtente) {
    console.log ('Hai vinto')
}

else if (dadoUtente < dadoComputer) {
    console.log ('Hai perso')
}

else {
    console.log ('Rigioca')
}