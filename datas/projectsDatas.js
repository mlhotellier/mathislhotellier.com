const projectsDatas = [
    {
        "id": 0,
        "name": "mlh",
        "title": "mathislhotellier.com",
        "imageHead": "./img/mathislhotellier.webp",
        "description": "The main mission was to think and create my own portfolio that suits me and will help me in my job searches.",
        "role": "Web Developer",
        "goals": [
            "Create a visual identity",
            "Deploy a static site online",
            "Adapt the site to a mobile version",
            "Translate the site into two languages",
            "Site optimization with Google Lighthouse"
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
        "id":1,
        "name":"booki",
        "title": "booki.com",
        "imageHead":"./img/booki.webp",
        "description": "The main mission was to integrate the responsive interface of their site.",
        "role": "Junior Web Developer",
        "goals": [
            "Implement a responsive interface with HTML and CSS",
            "Integrate content according to a mockup with HTML and CSS",
            "Version the project with Git and Github",
            "Set up a front-end development environment"
        ],
        "tags":[
            "HTML",
            "CSS",
        ],
        "link":"https://github.com/mlhotellier/booki.com"
    },
    {
        "id":2,
        "name":"sophie-bluel",
        "title": "architecte.sophie-bluel.com",
        "imageHead":"./img/sophie-bluel.webp",
        "description": "The mission was to create a dynamic web page for the website of an interior architect using JavaScript and communicating with an API.",
        "role": "Front-End Developer",
        "goals": [
            "Handle user events with JavaScript",
            "Manipulate DOM elements with JavaScript",
            "Retrieve user data in JavaScript through forms"
        ],
        "tags":[
            "HTML",
            "CSS",
            "Javascript",
            "API",
            "NodeJS"
        ],
        "link":"https://github.com/mlhotellier/architecte.sophie-bluel.com"
    },
    {
        "id":3,
        "name":"nina",
        "title": "nina-carducci.github.io",
        "imageHead":"./img/nina-carducci.webp",
        "description": "The mission was to optimize the SEO of a site by improving its performance and accessibility.",
        "role": "Web Developer",
        "goals": [
            "Optimize the performance of a website",
            "Debug a website using Chrome DevTools",
            "Write a test plan to test a website"  
        ],
        "tags":[
            "HTML",
            "CSS",
            "JQuery",
            "Javascript",
            "Lighthouse",
            "Wave",
            "SEO"
        ],
        "link":"https://github.com/mlhotellier/nina-carducci.github.io"
    },
    {
        "id":4,
        "name":"kasa",
        "title": "kasa.com",
        "imageHead":"./img/kasa.webp",
        "description": "The mission was to implement the front-end of an application using React and React Router to create a modern and responsive user experience.",
        "role": "Front-End ReactJS Developer",
        "goals": [
            "Develop a web interface with Sass",
            "Initialize an application with Create React App",
            "Configure navigation between application pages with React Router",
            "Develop web interface elements using React components",
            "Implement CSS animations"
        ],
        "tags":[
            "ReactJS",
            "SASS",
            "NodeJS"
        ],
        "link":"https://github.com/mlhotellier/kasa.com"
    },
    {
        "id":5,
        "name":"grimoire",
        "title": "mon-vieux-grimoire.com",
        "imageHead":"./img/mon-vieux-grimoire.webp",
        "description": "The mission was to develop the back-end of a book rating site.",
        "role": "Back-End Developer",
        "goals": [
            "Implement a logical data model in compliance with regulations",
            "Perform secure CRUD operations",
            "Store data securely",
        ],
        "tags":[
            "Back-End",
            "Javascript",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Postman"
        ],
        "link":"https://github.com/mlhotellier/_backend_mon-vieux-grimoire.com"
    },
    {
        "id":6,
        "name":"qwenta",
        "title": "menu-marker.qwenta.com",
        "imageHead":"./img/qwenta.webp",
        "description": "The mission was to manage the development planning of a website.",
        "role": "Product Owner / Front-End Developer",
        "goals": [
            "Break down a feature into tasks to prepare development",
            "Set up a technology watch method",
            "Present the technical solution",
            "Write technical specifications for a web project based on functional requirements",
            "Monitor project progress using a project management tool"
        ],
        "tags":[
            "Trello",
            "Feedly",
            "Agile Method",
            "SCRUM"
        ],
        "link":"https://github.com/mlhotellier/menu-maker.qwenta.com"
    },
    {
        "id":7,
        "name": "country",
        "title": "country-quizz.io",
        "imageHead":"./img/country-quizz.webp",
        "description": "The main mission was to fetch information about various countries from an API, display them on the page, and create a mini-game.",
        "role": "Junior Web Developer",
        "goals": [
            "Initialize an application with Create React App",
            "Create functions to filter data",
            "Fetch data via a REST API"
        ],
        "tags":[
            "ReactJS",
            "SASS",
            "NodeJS",
            "API",
            "Axios"
        ],
        "link":"https://github.com/mlhotellier/country-quizz.io"
    },
    {
        "id":8,
        "name": "azertype",
        "title": "azertype.fr",
        "imageHead":"./img/azertype.webp",
        "description": "The main mission was to create a mini-game.",
        "role": "Junior Front-End Developer",
        "goals": [
            "Manipulate data with JavaScript",
            "Write a JavaScript file",
            "Make JavaScript interact with your web page",
            "Create a data entry form"
        ],
        "tags":[
            "HTML",
            "CSS",
            "Javascript"
        ],
        "link":"https://github.com/mlhotellier/azertype.fr"
    },
    {
        "id":9,
        "name":"shiny",
        "title": "shiny-agency.com",
        "imageHead":"./img/shiny-agency.webp",
        "description": "The main mission was to build a robust Single Page Application in React incorporating React Router v6, PropTypes, Styled Components, hooks, testing, and understanding class components to evolve within the React ecosystem.",
        "role": "Front-End React Developer",
        "goals": [
            "Initialize an application with Create React App",
            "Develop a web interface with styled-component",
            "Build a complete Single Page Application that respects a robust architecture",
            "Master hooks",
            "Test your React application",
            "Evolve in a codebase that uses class components"
        ],
        "tags":[
            "ReactJS",
            "NodeJS",
            "API"
        ],
        "link":"https://github.com/mlhotellier/shiny-agency.com"
    },
    {
        "id":10,
        "name":"pokequiz",
        "title": "PokeQuiz.app",
        "imageHead":"./img/pokequiz.webp",
        "description": "The mission was to create a Pokémon quiz application featuring multiple difficulty modes, a leaderboard to track top scores, and detailed Pokémon. Personal project.",
        "role": "App Developer",
        "goals": [
            "Design and implement a quiz app with multiple difficulty levels",
            "Display the best player scores in real time",
            "Fetch Pokémon data from an external API and display it",
            "Optimize navigation with React Navigation for seamless transitions",
            "Ensure compatibility across Android and iOS devices",
        ],
        "tags":[
            "React Native",
            "iOS / Android",
            "Expo",
            "Firebase",
            "Axios"
        ],
        "link":"https://github.com/mlhotellier/PokeQuiz"
    },
    {
        "id": 11,
        "name": "petconnect",
        "title": "PetConnect",
        "imageHead": "./img/petconnect.webp",
        "description": "The mission was to create a React application providing all the necessary information for our pets’ well-being (tracking, contacts, documents, etc.) by interacting with a backend via APIs. Personal project.",
        "role": "Fullstack Developer",
        "goals": [
            "Design and develop a ReactJS front-end application",
            "Design and develop a NodeJS and Express back-end application",
            "Create and retrieve user data via an external API"
        ],
        "tags": [
            "ReactJS",
            "CSS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "API"
        ],
        "link": "https://github.com/mlhotellier/PetConnect"
    }
];
