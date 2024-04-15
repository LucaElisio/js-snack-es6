// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

myArray = [5, 44, 551, 51, 12, 76, 2, 75, 87, 543, 63, 66, 111];


/**
 * Description: funzione che ritorna un nuovo array con i valori che hanno la posizione compresa tra due numeri
 * @param {array} arrayToCheck
 * @param {number} min 
 * @param {number} max
 * @returns {array}
 */
function print (arrayToCheck, min, max) {
    // Utilizzo filter per andare a copiare solo gli elementi che soddisfano una condizione
    const newArray = arrayToCheck.filter(function(curItem, i) {
        // Se l'indice corrente è compreso tra min e max, il metodo filter inserisce l'elemento corrente dentro il nuovo array
        if (i > min && i < max) {
            return curItem;
        }
    });

    return newArray;

};

console.log(print(myArray, 1, 7));
