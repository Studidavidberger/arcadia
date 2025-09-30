// declarer les variables
const minigame = document.getElementById("minigame");
const game  = document.getElementById("game");
const cadav = document.querySelector(".eco-t4");
const btn_cadav = document.querySelector(".btn-cadav");



// Lancer une partie de mini-stone
minigame.addEventListener("click", (e) => {
    if ( game.display == 'block') {
        game.display = "none";
    } else {
        game.display = "block";
    }
})

// eco les cadav d'animaux
btn_cadav.addEventListener("click", (e) => {
    cadav.style.display = "block";
})