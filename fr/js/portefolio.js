document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const viewAllProjectsBtn = document.getElementById('view-all-projects-btn')

    // Fonction de mélange de Fisher-Yates
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Mélanger les projets
    shuffle(projectsDatas);

    function displayProjects(projects) {
      projectsContainer.innerHTML = '';
      projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.id = `${project.id}`;
        
        const projectPageLink = `projet.html?id=${project.id}`;
        
        projectCard.innerHTML = `
        <a class="card-link" href="${projectPageLink}">  
        <img loading="lazy" class="card-img" src="${project.imageHead}" alt="${project.title}">
        <h3 class="card-title">${project.title}</h3>
        <ul class="card-tags-list">
        ${project.tags.map(tag => `<li class="tag">${tag}</li>`).join('')}
        </ul>
        </a>
        `;
        projectsContainer.appendChild(projectCard);
      });
    }

    // Limiter à 4 projets
    const fourRandomProjects = projectsDatas.slice(0, 4);
    displayProjects(fourRandomProjects);

    // Ajouter un événement au bouton pour afficher tous les projets
    viewAllProjectsBtn.addEventListener('click', () => {
      const lessBtn = viewAllProjectsBtn.innerText 
      if (lessBtn === 'Moins de projets') {
        displayProjects(fourRandomProjects);
        viewAllProjectsBtn.innerText = 'Plus de projets...';
      } else {
        displayProjects(projectsDatas);
        viewAllProjectsBtn.innerText = 'Moins de projets';
      }
    });

  });