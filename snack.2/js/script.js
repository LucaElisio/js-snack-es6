// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo array di oggetti
const squadreDiCalcio = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
];

console.log(squadreDiCalcio);

// Scorro array di oggetti
squadreDiCalcio.forEach((curTeam) => {

    // Genero numero random a li assegno ai punti e falliSubiti
    curTeam.punti = Math.floor(Math.random() * 100);
    curTeam.falliSubiti = Math.floor(Math.random() * 100);

    console.log(curTeam);

});


// Uso la destrutturazione per salvare in variabile il nome della squadra e i falliSubiti
// Creo nuovo array
const newArray = squadreDiCalcio.map((curTeam) => {
    const {nome, falliSubiti} = curTeam;
    return {nome, falliSubiti}; //ritorna un oggetto
});

console.log(newArray);




