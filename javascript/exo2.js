// Variables
let nombrePhotocopie;
let bouton2 = document.getElementById('bouton2');

// Fonction qui calcul le prix avec les conditions
function prixParPhotocopie() {
    nombrePhotocopie = document.getElementById('copie').value;
    if (nombrePhotocopie <= 10) {
        prixParPhotocopie =  (nombrePhotocopie*0.10);
    }
    else if (nombrePhotocopie <=30) {
        prixParPhotocopie = (((nombrePhotocopie-10)*0.09) + 1);
    }else{
        prixParPhotocopie = (((nombrePhotocopie-30)*0.08) + 2.8);
    }
    alert('le prix total est de : ' + prixParPhotocopie.toFixed(2) + ' €');
}


bouton2.addEventListener('click',prixParPhotocopie, false);