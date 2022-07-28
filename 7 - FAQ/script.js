// Sélection de l'ensemble des éléments correspondant à la class sélectionnée(ici question)
const questions = document.querySelectorAll('.question');
console.log(questions);

//J'accède à un élément précis du tableau questions en écrivant tableau[index]
const deux = questions[2];
console.log(deux);

questions.forEach((item)=>{
    console.log('item');
    // Chaque élément du tableau est représenté par item
    // Maintenant chauqe élément du tableau (item) est soumis à une action au clic

    item.addEventListener('click', function(){
        console.log('item cliqué');
        // Je sélectionne et stocke la DIV suivante de l'item cliqué
        const next = item.nextElementSibling;
        console.log(next);
        next.classList.toggle('visible');
        icone = item.lastElementChild;
        console.log(icone);
        icone.classList.toggle('fa-chevron-up');
    });
});