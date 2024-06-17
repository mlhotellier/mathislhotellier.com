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

  typeSpeed:90,backDelay:700,contentType:"html",loop:!0,resetCallback:function(){newTyped()}}),$(".reset").click(function(){$("#typed").typed("reset")})});


// Function to manage the sandwich menu
const burger = document.getElementById('burger');
const containerMenu = document.getElementById('containerMenu');
const menuBurger = document.createElement('ul');
menuBurger.className = 'menu-burger';
menuBurger.innerHTML = `
  <li><a class="burger-link" href="#projects">projects</a></li>
  <li><a class="burger-link" href="#experiences">experiences</a></li>
  <li><a class="burger-link" href="#achievements">formations</a></li>
  <li><a class="burger-link" href="#skills">skills</a></li>
  <li><a class="burger-link" href="#about">about me</a></li>
`;

burger.addEventListener("click", () => {
  if (burger.innerText === 'menu') {
    burger.innerText = 'X';
    burger.style.zIndex = '2';
    burger.style.color = '#222222';
    containerMenu.classList.add('open');
    containerMenu.appendChild(menuBurger);
    addLinkListeners();
  } else {
    burger.innerText = 'menu';
    burger.style.color = '';
    burger.style.zIndex = '';
    setTimeout(() => containerMenu.removeChild(menuBurger), 500);
    containerMenu.classList.remove('open');
  }
});

function addLinkListeners() {
  const linkBurgerMenu = document.getElementsByClassName('burger-link');
  for (let link of linkBurgerMenu) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      
      burger.innerText = 'menu';
      burger.style.color = '';
      burger.style.zIndex = '';
      containerMenu.classList.remove('open');
      setTimeout(() => containerMenu.removeChild(menuBurger), 500);
    });
  }
}