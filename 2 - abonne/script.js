// Je sélectionne et je stocke

// icone contient le premier élément <i> trouvé dans le code
const icone = document.querySelector('i');
console.log(icone);

// btnButton contient le premier élément avec la classe btn
const btnButton = document.querySelector('.btn')
console.log(btnButton);

icone.addEventListener('click', function(){
    console.log('icône cliquée !');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy')
});

btnButton.addEventListener('click', function(){
    console.log('Bouton cliqué');
    btnButton.classList.toggle('abonne');
    //On vérifie le texte du bouton
    if(btnButton.innerText === "Abonné !"){
        // Action à réaliser si condition est "true"
        btnButton.innerText = "Abonnez-vous";
    }
    else{
        console.log('else');
        btnButton.innerText = "Abonné !"
    }
});