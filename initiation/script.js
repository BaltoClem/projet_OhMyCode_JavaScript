let titre = document.getElementById('score');

// Je sélectionne et je stocke

const btnRed = document.getElementById('btn-red');
//console.log(btnRed, "bouton rouge");
const btnBlue = document.getElementById('btn-blue');
//console.log(btnBlue, "bouton bleu")
let compteur = 0;

console.log(compteur, "compteur au démarrage");

// Je soumets le cercle ROUGE à une action
btnRed.addEventListener('click', function(){
    // Ici l'action
    // Incrémenter le compteur de 1
    add("rouge");
    chrono();
})

// Je soumets le cercle BLEU à une action
btnBlue.addEventListener('click', function(){
    add("bleu");
    chrono();
})

function add(couleur){
    compteur = compteur + 1;
    //console.log("Vous avez cliqué sur le cercle " + couleur + ", votre total est de : " + compteur + " point(s) !");
    titre.innerText = compteur;
}

function chrono(){
setTimeout(function(){
    //suppression des cercles
    btnRed.remove();
    btnBlue.remove();
    titre.innerText = "Fin de la partie, vous avez marqué "+compteur+" point(s) !"
}, 10000);};