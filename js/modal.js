// Récupérer le bouton et la modal
var button = document.getElementById('myButton');
var modal = document.getElementById('myModal');

// Quand l'utilisateur clique sur le bouton, afficher la modal
button.onclick = function() {
  modal.style.display = 'block';
}

// Quand l'utilisateur clique sur 'x', fermer la modal
var closeBtn = document.querySelector('.close');
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Quand l'utilisateur clique en dehors de la modal, fermer la modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}