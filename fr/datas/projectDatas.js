const projectsDatas = [
    {
        "id": 0,
        "name": "mlh",
        "title": "mathislhotellier.com",
        "imageHead": "../img/mathislhotellier.webp",
        "description": "La mission principale était de penser et créer un portfolio profesionnel qui nous correspond et qui nous aidera dans notre recherche d'emploi.",
        "role": "Développeur Web",
        "goals": [
            "Créer une identité visuelle",
            "Déployer un site statique en ligne",
            "Adapter le site à une version mobile",
            "Traduire le site en deux langues",
            "Optimiser le site avec Google Lighthouse"
        ],
        "tags": [
            "Webdesign",
            "HTML",
            "CSS",
            "Javascript",
            "JSON",
            "Tally",
            "Lighthouse",
            "FileZila"
        ],
        "link": "https://github.com/mlhotellier/mathislhotellier.com"
    },
    {
        "id": 1,
        "name": "booki",
        "title": "booki.com",
        "imageHead": "../img/booki.webp",
        "description": "La mission principale était d'intégrer l'interface responsive de leur site.",
        "role": "Développeur Web Junior",
        "goals": [
            "Implémenter une interface responsive avec HTML et CSS",
            "Intégrer le contenu selon une maquette avec HTML et CSS",
            "Versionner le projet avec Git et Github",
            "Configurer un environnement de développement front-end"
        ],
        "tags": [
            "HTML",
            "CSS",
        ],
        "link": "https://github.com/mlhotellier/booki.com"
    },
    {
        "id": 2,
        "name": "sophie-bluel",
        "title": "architecte.sophie-bluel.com",
        "imageHead": "../img/sophie-bluel.webp",
        "description": "La mission était de créer une page web dynamique pour le site d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API.",
        "role": "Développeur Front-End",
        "goals": [
            "Gérer les événements utilisateur avec JavaScript",
            "Manipuler les éléments DOM avec JavaScript",
            "Récupérer les données utilisateur en JavaScript à travers des formulaires"
        ],
        "tags": [
            "HTML",
            "CSS",
            "Javascript",
            "API",
            "NodeJS"
        ],
        "link": "https://github.com/mlhotellier/architecte.sophie-bluel.com"
    },
    {
        "id": 3,
        "name": "nina",
        "title": "nina-carducci.github.io",
        "imageHead": "../img/nina-carducci.webp",
        "description": "La mission était d'optimiser le SEO d'un site en améliorant ses performances et son accessibilité.",
        "role": "Développeur Web",
        "goals": [
            "Optimiser les performances d'un site web",
            "Déboguer un site web en utilisant Chrome DevTools",
            "Écrire un plan de test pour tester un site web"
        ],
        "tags": [
            "HTML",
            "CSS",
            "JQuery",
            "Javascript",
            "Lighthouse",
            "Wave",
            "SEO"
        ],
        "link": "https://github.com/mlhotellier/nina-carducci.github.io"
    },
    {
        "id": 4,
        "name": "kasa",
        "title": "kasa.com",
        "imageHead": "../img/kasa.webp",
        "description": "La mission était d'implémenter le front-end d'une application en utilisant React et React Router pour créer une expérience utilisateur moderne et responsive.",
        "role": "Développeur Front-End ReactJS",
        "goals": [
            "Développer une interface web avec Sass",
            "Initialiser une application avec Create React App",
            "Configurer la navigation entre les pages de l'application avec React Router",
            "Développer des éléments d'interface web en utilisant des composants React",
            "Implémenter des animations CSS"
        ],
        "tags": [
            "ReactJS",
            "SASS",
            "NodeJS"
        ],
        "link": "https://github.com/mlhotellier/kasa.com"
    },
    {
        "id": 5,
        "name": "grimoire",
        "title": "mon-vieux-grimoire.com",
        "imageHead": "../img/mon-vieux-grimoire.webp",
        "description": "La mission était de développer le back-end d'un site de notation de livres.",
        "role": "Développeur Back-End",
        "goals": [
            "Implémenter un modèle de données logique en conformité avec la réglementation",
            "Effectuer des opérations CRUD sécurisées",
            "Stocker les données de manière sécurisée"
        ],
        "tags": [
            "Back-End",
            "Javascript",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Postman"
        ],
        "link": "https://github.com/mlhotellier/_backend_mon-vieux-grimoire.com"
    },
    {
        "id": 6,
        "name": "qwenta",
        "title": "menu-marker.qwenta.com",
        "imageHead": "../img/qwenta.webp",
        "description": "La mission était de gérer la planification du développement d'un site web.",
        "role": "Product Owner / Développeur Front-End",
        "goals": [
            "Décomposer une fonctionnalité en tâches pour préparer le développement",
            "Mettre en place une méthode de veille technologique",
            "Présenter la solution technique",
            "Rédiger des spécifications techniques pour un projet web basé sur des exigences fonctionnelles",
            "Suivre l'avancement du projet à l'aide d'un outil de gestion de projet"
        ],
        "tags": [
            "Trello",
            "Feedly",
            "Méthode Agile",
            "SCRUM"
        ],
        "link": "https://github.com/mlhotellier/menu-maker.qwenta.com"
    },
    {
        "id": 7,
        "name": "country",
        "title": "country-quizz.io",
        "imageHead": "../img/country-quizz.webp",
        "description": "La mission principale était de récupérer des informations sur divers pays à partir d'une API, de les afficher sur la page et de créer un mini-jeu.",
        "role": "Développeur Web Junior",
        "goals": [
            "Initialiser une application avec Create React App",
            "Créer des fonctions pour filtrer les données",
            "Récupérer les données via une API REST"
        ],
        "tags": [
            "ReactJS",
            "SASS",
            "NodeJS",
            "API",
            "Axios"
        ],
        "link": "https://github.com/mlhotellier/country-quizz.io"
    },
    {
        "id": 8,
        "name": "azertype",
        "title": "azertype.fr",
        "imageHead": "../img/azertype.webp",
        "description": "La mission principale était de créer un mini-jeu.",
        "role": "Développeur Front-End Junior",
        "goals": [
            "Manipuler les données avec JavaScript",
            "Écrire un fichier JavaScript",
            "Faire interagir JavaScript avec votre page web",
            "Créer un formulaire de saisie de données"
        ],
        "tags": [
            "HTML",
            "CSS",
            "Javascript"
        ],
        "link": "https://github.com/mlhotellier/azertype.fr"
    },
    {
        "id":9,
        "name":"shiny",
        "title": "shiny-agency.com",
        "imageHead":"../img/shiny-agency.webp",
        "description": "L'objectif de ce projet était de construire une Single Page Application robuste en React intégrant React Router v6, PropTypes, Styled Components, hooks, tests, et compréhension des composants classe pour évoluer dans l'écosystème React.",
        "role": "Front-End React Developer",
        "goals": [
            "Initialiser une application avec Create React App",
            "Développer une interface web avec styled-components",
            "Construire une Single Page Application complète respectant une architecture robuste",
            "Maîtriser les hooks",
            "Tester votre application React",
            "Évoluer dans une base de code utilisant des composants de classe"
        ],
        "tags":[
            "ReactJS",
            "NodeJS",
            "API"
        ],
        "link":"https://github.com/mlhotellier/shiny-agency.com"
    },
    {
        "id": 10,
        "name": "pokequiz",
        "title": "PokeQuiz.app",
        "imageHead": "../img/pokequiz.webp",
        "description": "La mission consistait à créer une application de quiz Pokémon proposant plusieurs niveaux de difficulté, un classement pour suivre les meilleurs scores et des statistiques détaillées sur les Pokémon. Projet personnel.",
        "role": "Développeur d'Application",
        "goals": [
            "Concevoir et développer une application de quiz avec différents niveaux de difficulté",
            "Afficher en temps réel les meilleurs scores des joueurs",
            "Récupérer les données des Pokémon via une API externe",
            "Optimiser la navigation avec React Navigation pour des transitions fluides",
            "Garantir la compatibilité entre les appareils Android et iOS"
        ],
        "tags": [
            "React Native",
            "iOS / Android",
            "Expo",
            "Firebase",
            "Axios"
        ],
        "link": "https://github.com/mlhotellier/PokeQuiz"
    }    
];