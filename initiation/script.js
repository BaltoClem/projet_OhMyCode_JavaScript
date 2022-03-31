// Je sélectionne et je stocke

const btnRed = document.getElementById('btn-red');
//console.log(btnRed, "bouton rouge");
const btnBlue = document.getElementById('btn-blue');
//console.log(btnBlue, "bouton bleu")
let compteur = 0;

console.log(compteur, "compteur au démarrage");

// Je soumets le cercle ROUGE à une action
btnRed.addEventListener('click', function(){
    //console.log("cliqué !");
    // Ici l'action
    // Incrémenter le compteur de 1

    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
})

// Je soumets le cercle BLEU à une action
btnBlue.addEventListener('click', function(){
    console.log("cercle bleu cliqué !");
    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
})