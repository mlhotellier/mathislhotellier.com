document.addEventListener('DOMContentLoaded', () => {
    // Récupérer l'identifiant du projet à partir de l'URL
    const projectId = window.location.search.split('=')[1];

    // Récupérer les données du projet correspondant
    const project = projectsDatas.find(p => p.id == projectId);

    const displayProjectDetails = (project) => {
        if (project) {
            // Afficher les détails du projet dans le DOM
            const projectDetailsContainer = document.getElementById('project-details');
            projectDetailsContainer.innerHTML = `
            <div class="project-container">
                <a href="/fr/" class="mobile"><i class='bx bx-chevron-left'></i> Retour à l'accueil</a>
                <img class="project-img" src="${project.imageHead}" alt="${project.title}" >
                <h2 class="project-title">> /projets/<span class="${project.name}">${project.title}</span></h2>
                <h3 class="role"><span class="role-label">Rôle:</span> ${project.role}</h3>
                <p><i style="font-size:23px" class='bx bxs-quote-left' ></i> ${project.description}</p>
                <ul class="tags-list">
                    ${project.tags.map(tag => `<li class="project-tag">${tag}</li>`).join('')}
                </ul>
                <h3>Objectifs :</h3>
                <ul class="goals-list">
                ${project.goals.map(goal => `<li>${goal}</li>`).join('')}
                </ul>
                <div class="link-github">
                    <a href="${project.link}" class="${project.name}" target="_blank">Voir le projet sur GitHub</a>
                </div>
                <div class="nav-project">
                    <button class="btn" onclick="previous()">précédent</button>
                    <button class="btn" onclick="next()">suivant</button>
                </div>
            </div>
            `;
        } else {
            // Afficher un message d'erreur dans le DOM
            const errorMessage = document.getElementById('error-message');
            errorMessage.innerHTML = `
            <a href="index.html#projects" class="mobile"><i class='bx bx-chevron-left'></i> Back to home</a>
            <div class="error">
            <h3>Aucun projet correspondant trouvé.</h3>
            <p>Essayez plutôt un projet de cette liste</p>
            <ul id="projectList"></ul>
            </div>
            `;
            const projectList = document.getElementById('projectList');
            projectsDatas.forEach(project => {
                const projectName = document.createElement('li');
                const projectLink = document.createElement('a')
                projectLink.href = window.location.href.split('=')[0]+"="+project.id;
                projectLink.textContent = '#'+project.name;
                projectName.appendChild(projectLink);
                projectList.appendChild(projectName);
            });
        }
    };

    displayProjectDetails(project);

    // Fonctions pour naviguer entre les projets
    window.previous = () => {
        let currentIndex = projectsDatas.findIndex(p => p.id == projectId);
        if (currentIndex > 0) {
            const previousProject = projectsDatas[currentIndex - 1];
            window.location.search = `?id=${previousProject.id}`;
        } else {
            // Retourner au dernier projet
            const lastProject = projectsDatas[projectsDatas.length - 1];
            window.location.search = `?id=${lastProject.id}`;
        }
    };

    window.next = () => {
        let currentIndex = projectsDatas.findIndex(p => p.id == projectId);
        if (currentIndex < projectsDatas.length - 1) {
            const nextProject = projectsDatas[currentIndex + 1];
            window.location.search = `?id=${nextProject.id}`;
        } else {
            // Retourner au premier projet
            const firstProject = projectsDatas[0];
            window.location.search = `?id=${firstProject.id}`;
        }
    };
});