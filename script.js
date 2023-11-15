const min = 1;
const max = 6;


const invia = document.querySelector ('button');

invia.addEventListener ('click',function () {

    let dadoUtente = (Math.floor(Math.random() * (max - min + 1) + min));
    console.log ('il tuo numero è ' + dadoUtente)

    let dadoComputer = (Math.floor(Math.random() * (max - min + 1) + min));
    console.log ('il numero del computer è ' + dadoComputer)

   

    if (dadoComputer < dadoUtente) {
        let result = ('Hai vinto!')
        console.log (result)
        document.getElementById ('numeri-utente').innerHTML = ('Il tuo numero è ' + dadoUtente)
        document.getElementById ('numeri-pc').innerHTML = ('Il numero del computer è ' + dadoComputer)
        document.getElementById ('risultato').innerHTML = result
    }

    else if (dadoUtente < dadoComputer) {
        let result = ('Hai perso!')
        console.log (result)
        document.getElementById ('numeri-utente').innerHTML = ('Il tuo numero è ' + dadoUtente)
        document.getElementById ('numeri-pc').innerHTML = ('Il numero del computer è ' + dadoComputer)
        document.getElementById ('risultato').innerHTML = result
    }

    else {
        console.log ('Rigioca')
        let result = ('Rigioca!')
        document.getElementById ('numeri-utente').innerHTML = ('Il tuo numero è ' + dadoUtente)
        document.getElementById ('numeri-pc').innerHTML = ('Il numero del computer è ' + dadoComputer)
        document.getElementById ('risultato').innerHTML = result
    }




})