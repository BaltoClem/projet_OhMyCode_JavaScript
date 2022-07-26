// Je sélectionne et je stocke la DIV modal-container
const modal = document.querySelector('.modal-container');
console.log(modal);

//Je sélectionne le bouton
const btn = document.querySelector('.btn-success');
console.log(btn);
// Je sélectionne le code
const code = document.querySelector('.code');
console.log(code);
// Je sélectionne l'icône
const icone = document.querySelector('.fa-times');
console.log(icone);

window.addEventListener('scroll', displayModal);

function displayModal(){
    let hauteur = document.documentElement.scrollTop;
    console.log('défilement détecté !');
    if(hauteur > 400){
        console.log('Affichage de la modale !');
        modal.style.display = "flex";
    };
};

btn.addEventListener('click', function() {
    console.log('bouton cliqué');
    code.style.display = "block";
    btn.style.display = "none";
});

icone.addEventListener('click', function(){
    console.log('icône cliquée');
    // Je rends invisible la DIV modal-container
    modal.style.display = "none";
    // J'annule l'événement
    window.removeEventListener('scroll', displayModal);
})