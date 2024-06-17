$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
});

function newTyped(){}$(function(){$("#typed").typed({
    // Change to edit type effect
    strings: ["Hello,", "Bonjour,", "Hola,", "こんにちは,", "你好,"],
    typeSpeed:90,backDelay:700,contentType:"html",loop:!0,resetCallback:function(){newTyped()}}),$(".reset").click(function(){$("#typed").typed("reset")
  })});

// Quand l'utilisateur fait défiler la page de 20px vers le bas, afficher le bouton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
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