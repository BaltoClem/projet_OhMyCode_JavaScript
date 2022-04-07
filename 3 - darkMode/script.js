console.log("Connecté !");

// Je sélectionne et je stocke

// La DIV Switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);

// La DIV btn (cercle)
const btn = document.querySelector('.btn');
console.log(btn);

// L'icône
const icone = document.querySelector('i');
console.log(icone);

// La DIV container
const container = document.querySelector('.container');
console.log(container);

// Le titre
const titre = document.querySelector('h1');
console.log(titre);

//Je soumets la DIV switch à une action au clic
switchBox.addEventListener('click', function(){
    console.log('DIV cliquée !');
    // Je déplace le cercle
    btn.classList.toggle('btn-change');
    // Je déplace l'icône
    icone.classList.toggle('icone-change');
    // Je change l'icône
    icone.classList.toggle('fa-sun');
    // La DIV switch change de couleur de fond
    switchBox.classList.toggle('switch-change');
    // La DIV container change de couleur de fond
    container.classList.toggle('container-change');

    //Modification du texte du titre
    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE";
    }else{
        titre.innerText = "DARK MODE";
    }
})

