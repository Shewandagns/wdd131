function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
    const hamMenu = document.getElementById('ham-menu');
    hamMenu.textContent = hamMenu.textContent === '☰' ? '❌' : '☰';
}
