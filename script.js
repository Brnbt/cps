let numero = document.getElementById("numero");
let button = document.getElementById('button');
let message = document.getElementById('message');
let linka = document.getElementById('linka');
let linkb = document.getElementById('linkb');
let secondes = document.getElementById('secondes');
let nombre = 0;
let timeLeft ;

let chronoActif = false;
let timerId; 

// Fonction pour démarrer le chronomètre
function startChrono() {
    chronoActif = true;
    timeLeft = parseInt(secondes.value);
    numero.innerText = `Durée : ${timeLeft} secondes`;
    secondes.style.display = "none";
    linkb.style.display = "flex";

    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            numero.innerText = `Durée : ${timeLeft} secondes`;

        } else {
            numero.innerText = "Temps écoulé !";
            clearInterval(timerId); // Arrête le chronomètre
            button.disabled = true; // Désactive le bouton après le temps écoulé
            linka.style.display = "flex";
            linkb.style.display = "none";

        }
    }, 1000);
}

// Écouteur d'événement pour le bouton
button.onclick = function() {
    if (!chronoActif) {
        startChrono();
    }
    // Incrémente le compteur à chaque clic
    if (timeLeft > 0) {
        nombre++;
        message.innerText = "Clics/s : " + nombre;
    }
};