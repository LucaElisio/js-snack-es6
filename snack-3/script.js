// Crea un array composto da 4 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

/**
 * Description: funzione che ritorna un array di oggetti che hanno alimentazione a benzina
 * @param {array} arrayToCheck
 * @returns {array}
 */
function gasCar (arrayToCheck) {
    // Utilizzo filter per andare a copiare solo gli elementi che soddisfano una condizione
    const gasCarArray = arrayToCheck.filter(function(curItem) {
        // Se alimentazione corrisponde a benzina, l'oggetto viene inserito nel nuovo array
        return curItem.alimentazione === "benzina";
    });

    return gasCarArray;

};

/**
 * Description: funzione che ritorna un array di oggetti che hanno alimentazione a diesel
 * @param {array} arrayToCheck
 * @returns {array}
 */
function dieselCar (arrayToCheck) {
    // Utilizzo filter per andare a copiare solo gli elementi che soddisfano una condizione
    const dieselCarArray = arrayToCheck.filter(function(curItem) {
        // Se alimentazione corrisponde a benzina, l'oggetto viene inserito nel nuovo array
        return curItem.alimentazione === "diesel";
    });

    return dieselCarArray;

};

/**
 * Description: funzione che ritorna un array di oggetti che non hanno alimentazione benzine ne diesel
 * @param {array} arrayToCheck
 * @returns {array}
 */
function otherCar (arrayToCheck) {
    // Utilizzo filter per andare a copiare solo gli elementi che soddisfano una condizione
    const otherCarArray = arrayToCheck.filter(function(curItem) {
        // Se alimentazione corrisponde a benzina, l'oggetto viene inserito nel nuovo array
        return curItem.alimentazione != "diesel" && curItem.alimentazione != "benzina";
    });

    return otherCarArray;

};



console.log(gasCar(automobili));
console.log(dieselCar(automobili));
console.log(otherCar(automobili));

