// Je sélectionne les vignettes
const vignettes = document.querySelectorAll('.small');
console.log(vignettes);

// Je sélectionne l'image en grand format
const fullImg = document.getElementById('full');
console.log(fullImg);

// Je sélectionne le bouton
const btn = document.querySelector('.btn-add');

//J'initialise le panier
let panier = 0;

// Je sélectionne la DIV panier-container
let panierContainer = document.querySelector('.panier-container');

vignettes.forEach((item)=>{
    console.log(item, 'Ce message apparaît pour chaque item du tableau');
    item.addEventListener('click', function(){

        //console.log(item,'vignette cliquée !');
        let imgSource = item.getAttribute('src');
        console.log(imgSource);

        //J'attribue la nouvelle URL à l'image grand format
        fullImg.setAttribute('src', imgSource);
    });
});

btn.addEventListener('click', function(){
    console.log('bouton cliqué !');

    // J'ajoute 1 au compteur
    panier = panier + 1;
    console.log(panier);

    // J'affiche le contenu
    if(panier < 2){
        panierContainer.innerHTML = "Vous avez " + panier + " produit dans votre panier";
    }
    else{
        panierContainer.innerHTML = "Vous avez " + panier + " produits dans votre panier";
    };

});