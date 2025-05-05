let container = document.querySelector(".contenair-grille");
let creerGrille = document.getElementById("creer-grille");
let nettoyerGrille = document.getElementById("nettoyer-grille");
let couleurBtn = document.getElementById("choix-couleur");
let effacerBtn = document.getElementById("effacer-btn");
let peindreBtn = document.getElementById("peindre-btn");
let largeurGrille = document.getElementById("largeur-grille");
let hauteurGrille = document.getElementById("hauteur-grille");
let valeurLargeur = document.getElementById("valeur-largeur");
let valeurHauteur = document.getElementById("valeur-hauteur");

let effacer = false;

// Mise à jour des valeurs des curseurs
largeurGrille.addEventListener("input", () => {
    valeurLargeur.textContent = largeurGrille.value;
});
hauteurGrille.addEventListener("input", () => {
    valeurHauteur.textContent = hauteurGrille.value;
});

// Création de la grille
creerGrille.addEventListener("click", () => {
    container.innerHTML = "";

    
    let largeur = parseInt(largeurGrille.value);
    let hauteur = parseInt(hauteurGrille.value);

    // Définir les colonnes et les lignes avec CSS Grid
    container.style.gridTemplateColumns = `repeat(${largeur}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${hauteur}, 1fr)`;

    // Création des cases
    for (let i = 0; i < largeur * hauteur; i++) {
        let cell = document.createElement("div");
        cell.classList.add("gridCol");

        // Ajout de l'événement de clic pour chaque cellule
        cell.addEventListener("click", () => {
            cell.style.backgroundColor = effacer ? "white" : couleurBtn.value;
        });

        container.appendChild(cell);
    }
});

// Nettoyage de la grille
nettoyerGrille.addEventListener("click", () => {
    document.querySelectorAll(".gridCol").forEach(cell => {
        cell.style.backgroundColor = "white"; 
    });
});

// Mode effacer
effacerBtn.addEventListener("click", () => {
    effacer = true;
    effacerBtn.classList.add("actif");
    peindreBtn.classList.remove("actif");
});

// Mode peindre
peindreBtn.addEventListener("click", () => {
    effacer = false;
    peindreBtn.classList.add("actif");
    effacerBtn.classList.remove("actif");
});

// Valeurs par défaut au chargement
window.onload = () => {
    largeurGrille.value = 16;
    hauteurGrille.value = 16;
    valeurLargeur.textContent = "16";
    valeurHauteur.textContent = "16";
};
