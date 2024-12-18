const soundButton = document.getElementById('soundButton');
const audio = new Audio(soundButton.dataset.sound);

soundButton.addEventListener('click', () => {
    if (soundButton.classList.contains('sound_play')) {
        audio.pause();
        soundButton.classList.remove('sound_play');
    } else {
        audio.play();
        soundButton.classList.add('sound_play');
    }
});

document.querySelectorAll(".items .item .profile .heart").forEach(heart => {
    heart.addEventListener("click", () => {
        if (heart.style.fontVariationSettings) {
            heart.style.fontVariationSettings = "";
        } else {
            heart.style.fontVariationSettings = "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24";
        }
    });
});

const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');

searchIcon.addEventListener('click', () => {
    const rect = searchIcon.getBoundingClientRect();
    searchBar.style.left = `${rect.left}px`;
    searchBar.classList.toggle('active');
});

document.querySelectorAll('.category .list p').forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        const dot = document.querySelector('.category .dot');
        dot.style.transform = `translateY(${index * 35}px)`;
    });
});
