/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/
// récupérer les ID des boutons. Au click, ajouter la classe de couleur correspondante au bouton.

(() => {
    document.getElementById("red").addEventListener("click", () => {
        document.querySelector("html").style.backgroundColor = "#B61E08";
    });

    document.getElementById("green").addEventListener("click", () => {
        document.body.style.background = "#009C36";
    });

    document.getElementById("yellow").addEventListener("click", () => {
        document.body.style.background = "#F8FB4A";
    });

    document.getElementById("blue").addEventListener("click", () => {
        document.body.style.background = "#005EC4";
    });
})();