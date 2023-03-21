// Exercice Heure minute seconde
let h;
let min;
let sec;

//  noms d'ID
let bouton3 = document.getElementById('bouton3');

function time(){
    sec=document.getElementById("sec").value;
    min=document.getElementById("min").value;
    h=document.getElementById("h").value;
    sec++;
    if(sec > 59) {
        sec=0;
        min++;
        console.log(sec.toFixed(0) + " seconde(s) ");
    } if(min > 59){ 
        h++;
        min=0;
        console.log(min.toFixed(0)+ " minute(s) ")
    } if(h > 23) {
        h=0;
        console.log(h.toFixed(0)+ " heures ")
    }
    alert(" Dans une seconde, il sera : " + h + " heure(s) " + min + " minute(s) " + sec + " seconde(s) ");
}


//  noms d'ID
bouton3.addEventListener('click',time, false);
