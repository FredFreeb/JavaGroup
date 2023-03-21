// let aIndex=0;
// let pIndex=0;
// const theArobase="@";
// const thePoint=".";
// const str=(document.getElementById("textBar").value)
// let lengthText=str.length
// // longueur totale texte
// let afterThePoint=str.substring(pIndex+1)
// // ligne coupée APRES le point
// document.getElementById("textBar").addEventListener("keyup", monCerveau)

// // J'active la fonction d'écouteur d'évènement "appui de touche" avec la fonction monCerveau

// // sur ma barre de texte
// function monCerveau(){

// // J'ouvre monCerveau car je sais pas où et comment mettre et faire les IF
// document.getElementById("textBar").value;
// // Je récupère les valeurs d'input qui viennent d'être entrées dans la barre de texte
// aIndex = document.getElementById("textBar").value.indexOf(theArobase);
// pIndex = document.getElementById("textBar").value.indexOf(thePoint);
// // J'identifie l'index de chacune des variables assignées à mes caractères "@" et "."
// if (document.getElementById("textBar").value.includes(theArobase)){
//     console.log("'@' est présent");}
//         if (document.getElementById("textBar").value.includes(thePoint)){
//             console.log("'.' est présent");}
//             if (document.getElementById("textBar").value.indexOf(theArobase) == document.getElementById("textBar").value.lastIndexOf(theArobase) && aIndex<(document.getElementById("textBar").value.lastIndexOf(thePoint)) && aIndex>0 && pIndex>2){
//                 console.log("@ unique - l'index de '@ < .' il vient donc avant, c'est presque bien");
//                 document.getElementById("textBar").style.border="5px solid green";}
//                 if ((((document.getElementById("textBar").value).length))==(document.getElementById("textBar").value.lastIndexOf(thePoint)+3)){
//                 console.log(aIndex,pIndex)
//                 document.getElementById("textBar").style.border="5px solid green";
// }else {
//   console.log("adresse incorrecte");
//   document.getElementById("textBar").style.border="10px solid red";
// }
// }
// let aIndex=0;

// let pIndex=0;

// const theArobase="@";

// const thePoint=".";

// const str=(document.getElementById("textBar").value)

// let lengthText=str.length

// // longueur totale texte

// let afterThePoint=str.substring(pIndex+1)

// // ligne coupée APRES le point

// document.getElementById("textBar").addEventListener("keyup", monCerveau)

// // J'active la fonction d'écouteur d'évènement "appui de touche" avec la fonction monCerveau

// // sur ma barre de texte

// function monCerveau(){

// // J'ouvre monCerveau car je sais pas où et comment mettre et faire les IF

// document.getElementById("textBar").value;

// // Je récupère les valeurs d'input qui viennent d'être entrées dans la barre de texte

// aIndex = document.getElementById("textBar").value.indexOf(theArobase);

// pIndex = document.getElementById("textBar").value.indexOf(thePoint);

// // J'identifie l'index de chacune des variables assignées à mes caractères "@" et "."

// if (document.getElementById("textBar").value.includes(theArobase)){

//     console.log("'@' est présent");}

//         if (document.getElementById("textBar").value.includes(thePoint)){

//             console.log("'.' est présent");}

//             if (document.getElementById("textBar").value.indexOf(theArobase) == document.getElementById("textBar").value.lastIndexOf(theArobase) && aIndex<(document.getElementById("textBar").value.lastIndexOf(thePoint)) && aIndex>0 && pIndex>2){

//                 console.log("@ unique - l'index de '@ < .' il vient donc avant, c'est presque bien");

//                 document.getElementById("textBar").style.border="5px solid green";}

//                 if ((((document.getElementById("textBar").value).length))==(document.getElementById("textBar").value.lastIndexOf(thePoint)+3)){

//                 console.log(aIndex,pIndex)

//                 document.getElementById("textBar").style.border="5px solid green";

// }else {

//   console.log("adresse incorrecte");

//   document.getElementById("textBar").style.border="10px solid red";

// }

// }
let mailInput = "y";

let aIndex = 0;

let mailInputLeftover = "u";

let message = document.getElementById("message");

function checkMail() {
  mailInput = document.getElementById("textBar").value;

  if (mailInput.includes("@") && mailInput.includes(".")) {
    aIndex = mailInput.indexOf("@");

    mailInputLeftover = mailInput.substring(aIndex);

    if (mailInputLeftover.includes(".")) {
      message.innerHTML =
        '<div class="text-success" role="alert">Le mail est valide</div>';
      document.getElementById("textBar").style.border = "5px solid green";
    } else {
      message.innerHTML =
        '<div class="text-warning" role="alert">Le mail est invalide</div>';
      document.getElementById("textBar").style.border = "10px solid red";
    }
  } else {
    message.innerHTML =
      '<div class="text-danger" role="alert">Not good mail</div>';
    document.getElementById("textBar").style.border = "10px solid red";
  }
}

document
  .getElementById("textBar")
  .addEventListener("keydown", checkMail, false);
