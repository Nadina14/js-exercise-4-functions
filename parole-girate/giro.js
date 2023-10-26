/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC). 
Quindi, chiedere all’utente quale parola vuole girare.
BONUS: se la parola scelta dall’utente è un palindromo, avvisalo */

function giraParola (x){
    let parolaGirata = '';
    for (let i = x.length - 1; i >= 0; i--){
    parolaGirata += x[i]; 
    }
    return parolaGirata;
}

const inputUtente = prompt('Scrivi una parola da girare');
const risultato = giraParola(inputUtente);
console.log(risultato);
if (risultato === inputUtente){
    alert('É un palindromo!')
}