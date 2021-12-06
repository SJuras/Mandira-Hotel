// toggle mobile menu
const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
}
// toggle mobile menu END

// change image on hero section background
function img(anything) {
  document.querySelector('.slide').src = anything;
}

function change(change) {
  const line = document.querySelector('.image');
  line.style.background = change;
}
// END

// adds class sticky to header when scrolling down.
window.addEventListener('scroll', function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});
// END 
