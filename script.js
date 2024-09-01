let numero = document.getElementById("numero");
let button = document.getElementById('button');
let message = document.getElementById('message');
let link = document.getElementById('link');
let secondes = document.getElementById('secondes');
let nombre = 0;
let timeLeft = parseInt(secondes.value, 10);

let chronoActif = false;
let timerId; // Déclaration de la variable pour l'identifiant du timer

// Fonction pour démarrer le chronomètre
function startChrono() {
    chronoActif = true;
    numero.innerText = `Durée : ${timeLeft} secondes`;
    secondes.style.display = "none";

    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            numero.innerText = `Durée : ${timeLeft} secondes`;
        } else {
            numero.innerText = "Temps écoulé !";
            clearInterval(timerId); // Arrête le chronomètre
            button.disabled = true; // Désactive le bouton après le temps écoulé
            link.style.display = "flex";
        }
    }, 1000);
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    clearInterval(timerId); // Arrête le chronomètre
    chronoActif = false;
    button.disabled = false;
    link.style.display = "none";
    nombre = 0;
    message.innerText = nombre;
    timeLeft = parseInt(secondes.value, 10); // Réinitialiser le temps restant
    numero.innerText = `Temps restant: ${timeLeft} secondes`;
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

// Écouteur d'événement pour la sélection des secondes
secondes.onchange = function() {
    if (chronoActif) {
        // Si le chronomètre est actif, ne pas mettre à jour le temps restant
        return;
    }
    resetGame();
};

// Écouteur d'événement pour le lien de recommencement
link.querySelector('a').onclick = function(e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    resetGame();
};
