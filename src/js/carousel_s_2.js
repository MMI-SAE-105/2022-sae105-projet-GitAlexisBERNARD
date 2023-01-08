const img = document.getElementById('carousel-2-js');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = ['../../public/img/bienvenue_chez_les_chtis.webp','../../public/img/raid_dingue.webp','../../public/img/Rien_a_declarer.webp','../../public/img/la_chtite_famille.webp','../../public/img/Supercondriaque_film.webp'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);