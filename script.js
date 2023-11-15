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

let listaEmail = ['luca@boolean.it','gino@boolean.it','gina@boolean.it']
console.log (listaEmail)


const inviaEmail = document.querySelector ("#bottone");


inviaEmail.addEventListener ('click',function () {

    const email = document.querySelector("#email").value;
    console.log (email)

    if ( (listaEmail.includes(email))) {
        document.getElementById ('presente').innerHTML = ('✅ La tua tua email è nella lista, puoi accedere!')


    }

    else {
        document.getElementById ('presente').innerHTML = ('🚫 Non puoi entrare, la tua email non è nella lista')
        

    }
    
   


})





