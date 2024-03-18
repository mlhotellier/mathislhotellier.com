// Fonction mesSkills
function showMySkills() {
  let mySkills = [];
  while (true) {
    let skill = window.prompt('What skills do you have ? (Press Cancel to stop)');
    if (skill === null) {
      break; // Sortir de la boucle si l'utilisateur appuie sur Annuler
    }
    mySkills.push(skill);
  }
  // Results
  console.log('Show my skills :', mySkills);
}

// Déclencher la fonction lors du clic sur un bouton
var bouton = document.getElementById('button');
bouton.onclick = showMySkills;

