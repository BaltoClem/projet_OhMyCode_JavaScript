// Je sélectionne et je stocke

const btnRed = document.getElementById('btn-red');
//console.log(btnRed, "bouton rouge");
let compteur = 0;

console.log(compteur, "compteur au démarrage");

// Je soumets l'élément à une action
btnRed.addEventListener('click', function(){
    //console.log("cliqué !");
    // Ici l'action
    // Incrémenter le compteur de 1

    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
})