// Menu Principale - Paramètre du bouton burger
let checkbox = document.querySelector("#checkbox-burger");
let body = document.querySelector("body");

checkbox.addEventListener("click", gererDefilement);

function gererDefilement() {
    if (checkbox.checked == true) {
        body.style.overflowY = "hidden";
    } else {
        body.style.overflowY = "scroll";
    }
}

let lesBoutons = document.querySelectorAll(".menu a");

for (let unBouton of lesBoutons) {
    unBouton.addEventListener("click", controleMenuAffichage);
}

function controleMenuAffichage() {
    if (checkbox.checked == true) {
        checkbox.checked = false;
        body.style.overflowY = "scroll";
    }
}

// Menu Animation - Changement des propriétés CSS des éléments de la page
let menu = document.querySelector(".menu");
let menuA = document.querySelectorAll(".menu a")

let boutonMenuAnim = document.querySelectorAll(".menuAnim a");

boutonMenuAnim[0].addEventListener("click", changeModeClaire);
boutonMenuAnim[1].addEventListener("click", changeModeSombre);

function changeModeClaire() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    menu.style.backgroundColor = "white";
    menu.style.borderColor = "black";

    let texteClaireIndex = menuA.length;
    for (let i = 0; i < texteClaireIndex; i++) {
        menuA[i].style.color = "black";
        menuA[i].style.borderColor = "black";
    }
}

function changeModeSombre() {
    body.style.backgroundColor = "rgb(36, 36, 36)";
    body.style.color = "white";
    menu.style.backgroundColor = "rgb(36, 36, 36)";
    menu.style.borderColor = "white";

    let texteClaireIndex = menuA.length;
    for (let i = 0; i < texteClaireIndex; i++) {
        menuA[i].style.color = "white";
        menuA[i].style.borderColor = "white";
    }
}
