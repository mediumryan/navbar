const toggleBtn = document.querySelector('.toggle_btn');
const navMenu = document.querySelector('.nav_menu');
const navLinks = document.querySelector('.nav_links');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navLinks.classList.toggle('show');
})