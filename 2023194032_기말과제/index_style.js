//영상변경
const principles = [
    {
        title: "Launchkey",
        url: "https://store-itgb7ssiy1.mybigcommerce.com/content/video/novation-launchkey-mk4-range-header.mp4"
    },
    {
        title: "FLkey",
        url: "https://store-itgb7ssiy1.mybigcommerce.com/content/video/novation-flkey-range-header.mp4"
    },
    {
        title: "Launch",
        url: "https://store-itgb7ssiy1.mybigcommerce.com/content/video/novation-launch-range-header.mp4"
    },
    {
        title: "SL",
        url: "https://store-itgb7ssiy1.mybigcommerce.com/content/video/novation-launch-range-header.mp4"
    },
    {
        title: "Impulse",
        url: "https://store-itgb7ssiy1.mybigcommerce.com/content/video/novation-launch-range-header.mp4"
    },
];

let currentIndex = 0;

const videoElement = document.querySelector(".conC video");
const h2Element = document.querySelector(".conC-content h2");

function updateContent() {
    const current = principles[currentIndex];
    h2Element.textContent = current.title;
    videoElement.src = current.url;
}

function changeContent(direction) {
    currentIndex = (currentIndex + direction + principles.length) % principles.length;
    updateContent();
}


updateContent();


//헤더
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


//기본커서
const pointer = document.getElementById('pointer');
const excludedAreas = document.querySelectorAll('.excluded');
const pointerSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pointer-size'), 10);

function isInExclud(target) {
    return [...excludedAreas].some(area => area.contains(target));
}
window.addEventListener('mousemove', (e) => {
    if (isInExclud(e.target)) {
        pointer.style.display = 'none';
    } else {
        pointer.style.display = 'block';

        const x = e.clientX - 25;
        const y = e.clientY - 25;

        pointer.style.transform = `translate(${x}px, ${y}px)`;
    }
});
window.addEventListener('mousedown', (e) => {
    if (!isInExclud(e.target)) {
        pointer.style.transform += ' scale(1.3)';
    }
});
window.addEventListener('mouseup', (e) => {
    if (!isInExclud(e.target)) {
        pointer.style.transform = pointer.style.transform.replace(' scale(1.3)', '');
    }
});

//이미지변경
document.querySelectorAll(".hover_area").forEach((area, index) => {
    area.addEventListener("mouseover", () => {
        const right = document.querySelector(".conB_right");
        const images = [
            'index_conB01.png',
            'index_conB02.png',
            'index_conB03.png',
            'index_conB04.jpg',
        ];

        right.style.backgroundImage = `url('${images[index]}')`;
    });
});


const conBLeft = document.querySelector('.conB_left');
const cursorGradient = document.createElement('div');
cursorGradient.className = 'cursor_gradient';
conBLeft.appendChild(cursorGradient);


//그라데이션 커서
const gradients = [
    'linear-gradient(135deg, #ff7eb3, #ff758c)',
    'linear-gradient(135deg, #82eaff, #00c2ff)',
    'linear-gradient(135deg, #a8ff78, #78ffd6)',
    'linear-gradient(135deg, #ff9a9e, #fad0c4)',
];

conBLeft.addEventListener('mousemove', (e) => {
    const x = e.clientX - conBLeft.getBoundingClientRect().left;
    const y = e.clientY - conBLeft.getBoundingClientRect().top;
    cursorGradient.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
});

document.querySelectorAll('.hover_area').forEach((area, index) => {
    area.addEventListener('mouseenter', () => {
        cursorGradient.style.background = gradients[index];
    });
});

conBLeft.addEventListener('mouseleave', () => {
    cursorGradient.style.display = 'none';
});

conBLeft.addEventListener('mouseenter', () => {
    cursorGradient.style.display = 'inline';
});

//화살표 커서
const conC = document.querySelector('.conC');
const cursorEffect = document.createElement('div');
cursorEffect.classList.add('cursor_arrow');
conC.appendChild(cursorEffect);

const leftArea = document.querySelector('.split.left');
const rightArea = document.querySelector('.split.right');

conC.addEventListener('mousemove', (e) => {
    const rect = conC.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorEffect.style.left = `${x - 25}px`;
    cursorEffect.style.top = `${y - 25}px`;
    cursorEffect.style.display = 'flex';
});

leftArea.addEventListener('mouseenter', () => {
    cursorEffect.innerHTML = '&#8592;';
});

rightArea.addEventListener('mouseenter', () => {
    cursorEffect.innerHTML = '&#8594;';
});

conC.addEventListener('mouseleave', () => {
    cursorEffect.style.display = 'none';
});

//스크롤제한한
let upButton = document.getElementById("pageUp");
let downButton = document.getElementById("pageDown");

window.onscroll = function() {
    scrollFunction();
  };
  
  function topFunction() {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth"
    });
  }
  
  function downFunction() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth" 
    });
  }
  

let currentSection = 0; 
const sections = document.querySelectorAll(".main, .conA, .conB, .conC, .conD, .conE, .conF");
const totalSections = sections.length;

window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        if (currentSection < totalSections - 1) {
            currentSection++;
            scrollToSection(currentSection);
        }
    } else {
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }
});

function scrollToSection(index) {
    const targetPosition = sections[index].offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}

//음악 팝업업
window.addEventListener("DOMContentLoaded", () => {
    const message = document.querySelector(".message");

    message.style.opacity = "1";
    message.style.visibility = "visible";

    setTimeout(() => {
        message.style.opacity = "0";
        message.style.visibility = "hidden";
    }, 3000);
});

//사진날아오기

const bkLeft = document.querySelector('.bk_left');
const bkRight = document.querySelector('.bk_right');

function imgIn() {
    const bkLeftRect = bkLeft.getBoundingClientRect();
    const bkRightRect = bkRight.getBoundingClientRect();

    if (bkLeftRect.top < window.innerHeight && bkLeftRect.bottom > 0) {
        bkLeft.classList.add('active');
    }
    if (bkRightRect.top < window.innerHeight && bkRightRect.bottom > 0) {
        bkRight.classList.add('active');
    }
    window.addEventListener('scroll', imgIn);
    imgIn();
    window.addEventListener('scroll', updateProgressBar);
}

window.addEventListener('scroll', imgIn);
