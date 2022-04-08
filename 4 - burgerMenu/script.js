console.log("Connecté !");

// Je sélectionne et je stocke

// Icône burger
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);

// DIV modal
const modal = document.querySelector('.modal');
console.log(modal);

// Soumettre l'icône à une action
icone.addEventListener('click', function(){
    console.log('icône cliquée');
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
});