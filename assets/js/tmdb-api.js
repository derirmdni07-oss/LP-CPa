async function fetchContent(endpoint, elementId) {
    try {
        const res = await fetch(`${CONFIG.BASE_URL}${endpoint}?api_key=${CONFIG.API_KEY}&language=id-ID&page=1`);
        const data = await res.json();
        const container = document.getElementById(elementId);
        
        data.results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${CONFIG.W500_URL + item.poster_path}" alt="${item.title || item.name}" loading="lazy">
                <div class="card-info">
                    <p>${item.title || item.name}</p>
                </div>
            `;
            // Logika Direct Redirect saat diklik
            card.onclick = () => window.location.href = CONFIG.CPA_URL;
            container.appendChild(card);
        });
    } catch (err) {
        console.error("Gagal memuat data TMDB", err);
    }
}

async function loadHero() {
    const res = await fetch(`${CONFIG.BASE_URL}/trending/all/day?api_key=${CONFIG.API_KEY}`);
    const data = await res.json();
    const movie = data.results[0];
    
    document.getElementById('hero-title').innerText = movie.title || movie.name;
    document.getElementById('hero-desc').innerText = movie.overview.substring(0, 150) + '...';
    document.getElementById('hero-bg').src = CONFIG.IMG_URL + movie.backdrop_path;
    document.getElementById('hero-play').onclick = () => window.location.href = CONFIG.CPA_URL;
}