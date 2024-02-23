const images = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
]

const visibleImage = 0;

const slides = document.querySelector('.carosel');
const next = document.querySelector('.next');
const previus = document.querySelector('.previus');



for (let i = 0; i < images.length; i++) {
    const image = images[i];
    console.log(image);
    

    const imageMarkup = `<img class="visible" src="./assets/img/${image}" alt="">`

    console.log(imageMarkup);

}


