

function comparazione (parola1, parola2){
    let risultato = false;
    if (parola1.length === parola2.length){
        risultato = true;
    }
    return risultato; 
} 
const input1 = prompt('Inserisci la prima parola');
const input2 = prompt('Inserisci la seconda parola');
const result = comparazione(input1, input2);
if(result){
    console.log(input1, input2);
}else if (input1.length > input2.length){
    console.log(input1);
}else{
    console.log(input2);
}
