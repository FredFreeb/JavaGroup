

let tarif=0;
let ageConducteur=0;
let temPermis=0;
let accident=0;
let fidel=0;


let bouton6 = document.getElementById('bouton6');


function calculTarif(){

    tarif=0;

    ageConducteur=(document.getElementById("ageConducteur").value)

    temPermis=(document.getElementById("temPermis").value)

    accident=(document.getElementById("accident").value)

    fidel=(document.getElementById("fidel").value)

    if ((age<25 && temPermis<2)||(age<25 || temPermis<2)){tarif++};
    console.log("1ere condition "+ tarif);
    if (ageConducteur>=25 || temPermis>=2){tarif++;}

    console.log("2eme condition "+ tarif);

        if (ageConducteur>=25 && temPermis>=2){tarif= tarif+2;}

        console.log("3eme condition " + tarif);

            if (accident>0){tarif=tarif-accident; }

            console.log("4eme condition " + tarif);

            if (fidel>=1 && accident<3 && tarif!=0){tarif++};

                console.log("5eme condition " + tarif);
                console.log(tarif)

    switch (tarif){    
    default:
    console.log('vous êtes refusé');
    alert('vous allez voir ailleurs...');
    break;
    case 0:
    console.log('vous êtes refusé');
    alert('vous allez voir ailleurs...');
    break;
    case 1:
    console.log('vous êtes en tarification rouge');
    alert('attention vous êtes limite, tarif rouge...');
    break;
    case 2:
    console.log('vous êtes en tarification orange');
    alert('Bienvenue en tarif orange...');
    break;    
    case 3:
    console.log('vous êtes en tarification vert');
    alert('Bienvenue en tarif vert, un petit café?...');
    break; 
    case 4:
    console.log('vous êtes en tarification bleu');
    alert('Bienvenue en tarif bleu...');
    break; 
    
}
}
bouton6.addEventListener('click',calculTarif, false);
