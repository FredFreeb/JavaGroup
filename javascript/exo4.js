let ticketAmount=0;
let clientMoney=0;
let renduCaisse=0;
let temp1=0;
let temp2=0;
let billet10=0;
let billet5=0;
let piece1=0;



//  noms d'ID

let bouton4 = document.getElementById('bouton4');


function jeVousDonne(){
ticketAmount=document.getElementById("ticketAmount").value;
clientMoney=document.getElementById("clientMoney").value;
renduCaisse=clientMoney-ticketAmount
console.log(renduCaisse)
temp1=renduCaisse%10;
billet10=(renduCaisse-temp1)/10;
temp2=temp1%5;
billet5=(temp1-temp2)/5;
piece1=temp2;
console.log(temp1)

alert("Au client sera restitué " + renduCaisse + " €. Dont : " + billet10 + " billet(s) de 10. Et " + billet5 + " billet(s) de 5. Ainsi que " + piece1 + " pièce(s) de 1");
}
bouton4.addEventListener('click',jeVousDonne, false);

// VERSION BOUCLE D'ALEXANDER ////////

// //let ticketAmount = 0;

// let ticketAmount = 0;

// let clientMoney = 0;

// let renduMoney = 0;

// let billet10 = 0;

// let billet5 = 0;

// let piece1 = 0;

// let bouton = document.getElementById("bouton");

// let message = document.getElementById("message");



// function rendezMoiMonArgent(){



//     clientMoney = document.getElementById("clientMoney").value;

//     ticketAmount = document.getElementById("ticketAmount").value;

//     renduMoney = clientMoney - ticketAmount;



//     while (renduMoney !=0){



//     // on retire des billets de 10 jusqu'à ce que le reste soit inférieur à 10

//     if (renduMoney >= 10){

//     renduMoney = renduMoney - 10;

//     billet10++;

//     }

//         // on retire des billets de 5 jusqu'à ce que le reste soit inférieur à 5

//         if ((renduMoney < 10) && (renduMoney>=5)){

//         renduMoney = renduMoney - 5;

//         billet5++;

//         }

        

//         if ((renduMoney < 5) && (renduMoney >= 0)){



//         renduMoney = renduMoney - 1;

//         piece1++;

//         }

//     }



//         message.innerHTML = "Le distributeur vous rend " + billet10 + " billet de 10, " +  billet5 + " de billets de 5 et " + piece1 + " pièces de 1 euros";  

//     }


// bouton.addEventListener('click', rendezMoiMonArgent, false);