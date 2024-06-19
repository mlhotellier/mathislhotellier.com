function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("contactForm").style.display = "block";
        if (window.innerWidth > 1098) {
          document.getElementById("contactLinkMenu").style.display = "none";
        } else {
          document.getElementById("contactLinkMenu").style = "";
        }
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("contactLinkMenu").style = "";
    }
}

// Défilement fluide vers le haut de la page
function topFunction() {
    // Obtenir la position actuelle de la page
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Diviser la position actuelle en plusieurs étapes pour obtenir un effet de défilement fluide
    var scrollStep = -currentScroll / (500 / 15); // 500 est la durée de l'animation en millisecondes

    // Créer une fonction pour animer le défilement
    var scrollInterval = setInterval(function(){
        if (document.documentElement.scrollTop !== 0) {
            window.scrollBy(0, scrollStep); // Défilement vers le haut
        } else {
            clearInterval(scrollInterval); // Arrêter l'animation une fois arrivé en haut
        }
    },15); // Vitesse de défilement en millisecondes
}

// Quand l'utilisateur fait défiler la page de 20px vers le bas, afficher le bouton
window.onscroll = function() {scrollFunction()};