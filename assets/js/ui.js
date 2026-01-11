const navHTML = `
    <div class="nav-container">
        <a href="index.html" class="logo"> TV</a>
        <ul class="nav-links">
            <li><a href="index.html">Beranda</a></li>
            <li><a href="movie.html">Film</a></li>
            <li><a href="tv.html">TV Series</a></li>
        </ul>
    </div>
`;

document.getElementById('navbar').innerHTML = navHTML;

// Animasi Scroll Navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});