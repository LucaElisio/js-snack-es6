// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Creo array di oggetti
const bicicletteDaCorsa = [
    { nome: "Bianchi Oltre XR4", peso: 7.1 },
    { nome: "Specialized Tarmac SL7", peso: 6.8 },
    { nome: "Cannondale SuperSix EVO", peso: 7.2 },
    { nome: "Trek Madone SLR", peso: 7.3 },
    { nome: "Pinarello Dogma F12", peso: 6.6 }
];


// Creo variabile di appoggio per il peso minore e il nome della bici col peso minore
let minWeight = 1000;
let minWeightBike = "";

// Creo ciclo che scorre l'array
bicicletteDaCorsa.forEach((curBike) => {
    // Salvo in variabile il peso dell'oggetto corrente
    const {peso , nome} = curBike;

    // Confronto peso dell'oggetto corrente con la variabile globale di appoggio
    if (peso < minWeight) {
        minWeight = peso;
        minWeightBike = nome;
    }

})

// Stampo in console il peso minore
console.log(minWeightBike, minWeight);


// Stampo in pagina il risultato

// Trovo in pagina l'elemento in cui stampare il risultato
const bikeElem = document.querySelector(".bike");
// Inserisco in pagina il risultato con template literal
bikeElem.innerHTML = `
    La bici con peso minore è la ${minWeightBike} con peso: ${minWeight}
`;
