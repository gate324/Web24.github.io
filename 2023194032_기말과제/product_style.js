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

const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');

searchIcon.addEventListener('click', () => {
    const rect = searchIcon.getBoundingClientRect();
    searchBar.style.left = `${rect.left}px`;
    searchBar.classList.toggle('active');
});

const area = document.querySelector('.product_page .area ');
const colorLayer = document.querySelector('.product_page .area .color');

area.addEventListener('mousemove', (event) => {
    const rect = area.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    //패턴 크기
    const radius = 120;
    colorLayer.style.maskPosition = `${x}px ${y}px`;
    colorLayer.style.webkitMaskPosition = `${x}px ${y}px`;


    colorLayer.style.maskSize = `${radius * 2}px ${radius * 2}px`;
    colorLayer.style.webkitMaskSize = `${radius * 2}px ${radius * 2}px`;
});

area.addEventListener('mouseleave', () => {
    colorLayer.style.maskSize = `0px 0px`;
});

const overView = document.querySelector('.overview_page .img');
const textboxes = document.querySelectorAll('.proinfo .textbox');

function addActive() {
    const overViewRect = overView.getBoundingClientRect();

    if (overViewRect.top < window.innerHeight && overViewRect.bottom > 0) {
        overView.classList.add('active');
    }
    textboxes.forEach(textbox => {
        const rect = textbox.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.8) {
            textbox.classList.add('up');
        }
    });

    window.addEventListener('scroll', addActive);
    addActive();
    window.addEventListener('scroll', updateProgressBar);
}

window.addEventListener('scroll', addActive);


const sections = document.querySelectorAll('.conA, .conB, .conC, .conD, .conE');
const menuLinks = document.querySelectorAll('.menu a');

function highlightMenu() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

        if (isVisible) {
            menuLinks.forEach(link => link.classList.remove('active'));
            menuLinks[index].classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightMenu);

highlightMenu();
