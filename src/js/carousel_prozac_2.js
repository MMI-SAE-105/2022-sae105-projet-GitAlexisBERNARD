const img1 = document.getElementById('carousel-1');
const rightBtn1 = document.getElementById('right-btn_1');
const leftBtn1 = document.getElementById('left-btn_1');

let pictures1 = ['../../public/img/bienvenue_chez_les_chtis.webp','../../public/img/raid_dingue.webp','../../public/img/Rien_a_declarer.webp','../../public/img/Supercondriaque_film.webp'];

img1.src = pictures1[0];
let position1 = 0;

const moveRight1 = () => {
    if (position1 >= pictures1.length - 1) {
        position1 = 0
        img1.src = pictures1[position1];
        return;
    }
    img1.src = pictures1[position1 + 1];
    position1++;
}

const moveLeft1 = () => {
    if (position1 < 1) {
        position1 = pictures1.length - 1;
        img1.src = pictures1[position1];
        return;
    }
    img1.src = pictures1[position1 - 1];
    position1--;
}

rightBtn1.addEventListener("click", moveRight1);
leftBtn1.addEventListener("click", moveLeft1);