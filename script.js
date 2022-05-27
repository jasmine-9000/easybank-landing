const hamburger = document.querySelector('.navigation__hamburger');
const overlay = document.querySelector('.overlay');
const mobilelinks = document.querySelector('.navigation__mobile-links');

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle('open');
	overlay.classList.toggle('open');
	mobilelinks.classList.toggle('open');
});
