//variables
let age;
let sexe;
let bouton = document.getElementById('bouton');

// Fonction qui va comparer deux consitions
function verification() {
    age = document.getElementById('age').value;
    sexe = document.querySelector('input[name="sexe"]:checked').value;

// Conditions 
    if (sexe == 'h' && age >= 20) {
        alert( "Vous êtes imposable !") ;
    } else if ((sexe == 'f' && age >=18) && (sexe == "f" && age <= 35)){
        alert("Vous êtes imposable !");
    }
    else {
        alert("Vous n'êtes pas imposable") ;
    }
}

//appel de la fonction
bouton.addEventListener('click', verification, false);