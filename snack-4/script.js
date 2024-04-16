const persone = [
    { nome: "Pippo", cognome: "rossi", eta: 16 },
    { nome: "pluto", cognome: "franchi", eta: 22 },
    { nome: "topolino", cognome: "bartolo", eta: 88 },
];

const newArray = [];
let phrase = "";

persone.forEach(curItem => {
    const {nome, cognome, eta} = curItem;
    // if (eta >= 18) {
    //     phrase = nome + cognome + " può guidare";
    // } else {
    //     phrase = nome + cognome + " non può guidare"
    // };
    phrase = (eta >= 18) ? (nome + cognome + " può guidare") : (nome + cognome + " non può guidare");

    
    newArray.push(phrase);

});

console.log(newArray);