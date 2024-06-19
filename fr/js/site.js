// Function to manage the sandwich menu
const burger = document.getElementById('burger');
const containerMenu = document.getElementById('containerMenu');
const menuBurger = document.createElement('ul');

menuBurger.className = 'menu-burger';
menuBurger.innerHTML = `
  <li><a class="burger-link" href="#projects">projets</a></li>
  <li><a class="burger-link" href="#experiences">expériences</a></li>
  <li><a class="burger-link" href="#achievements">formations</a></li>
  <li><a class="burger-link" href="#skills">compétences</a></li>
  <li><a class="burger-link" href="#about">à propos</a></li>
  // Changer le lien
  <li><button class="burger-link burger-contact-btn" data-tally-open="3qBMog" data-tally-layout="modal" data-tally-auto-close="8000">contact</button></li>
`;

function toggleMenu() {
  if (containerMenu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  burger.innerText = 'X';
  burger.style.zIndex = '2';
  burger.classList.add('close-item')
  containerMenu.classList.add('open');
  containerMenu.appendChild(menuBurger);
  document.addEventListener('click', checkClickOutside);
}

function closeMenu() {
  burger.innerText = 'menu';
  burger.style.zIndex = '';
  burger.classList.remove('close-item')
  containerMenu.classList.remove('open');
  setTimeout(() => containerMenu.removeChild(menuBurger), 500);
  document.removeEventListener('click', checkClickOutside);
}

function checkClickOutside(event) {
  if (!containerMenu.contains(event.target) && event.target !== burger) {
    closeMenu();
  }
}

burger.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

containerMenu.addEventListener("click", (event) => {
  if (event.target.classList.contains('burger-link')) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    } else if (event.target.tagName === 'BUTTON') {
      // Close the menu before opening the modal
      closeMenu();
      setTimeout(() => {
        // Simulate the code to open the modal
        const buttonEvent = new Event('click');
        event.target.dispatchEvent(buttonEvent);
      }, 500);
    }
  }
});