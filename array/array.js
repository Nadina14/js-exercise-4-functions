/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3] */

function fondArray(lettera, numero){
    let arrayFuso = [];
    for (i = 0; i < lettera.length; i ++){
       arrayFuso.push(lettera[i]);
       arrayFuso.push(numero[i]);
    }
    return arrayFuso
}
const arrayLettere = ['a', 'b', 'c', 'd'];
const arrayNumeri = [1, 2, 3, 4];
console.log(fondArray(arrayLettere, arrayNumeri))