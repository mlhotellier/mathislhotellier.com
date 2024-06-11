// Récupérer le bouton et la modal
const button = document.getElementById('btnSkills');
const modal = document.getElementById('skillsModal');

// Quand l'utilisateur clique sur le bouton, afficher la modal
button.onclick = function() {
  modal.style.display = 'block';
}

// Quand l'utilisateur clique sur 'x', fermer la modal
const closeBtn = document.querySelector('.close');
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Quand l'utilisateur clique en dehors de la modal, fermer la modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}