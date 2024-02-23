const images = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
]

const imageElement = document.querySelectorAll('.carosel img')

let visibleImage = 0;

const slides = document.querySelector('.carosel');
const next = document.querySelector('.next');
const previus = document.querySelector('.previus');



for (let i = 0; i < images.length; i++) {
    const image = images[i];

    const imageMarkup = `<img class="${i === visibleImage ? 'visible' : ''}" src="./assets/img/${image}" alt="">`


    slides.insertAdjacentHTML('beforeend', imageMarkup);

}


previus.addEventListener ('click', function() {

    visibleImage --
    const currentImage = document.querySelector('img.visible');
    
    if (visibleImage < 0) {
        visibleImage = images.length - 1;

    }
    currentImage.classList.remove('visible');

    const allImage = document.querySelectorAll('.carosel img');

    allImage[visibleImage].classList.add('visible')

    console.log(visibleImage, images.length);


    
}
)

next.addEventListener ('click', function() {

    visibleImage ++

    const currentImage = document.querySelector('img.visible');
    
    if (visibleImage > images.length - 1) {
        visibleImage = 0;
        
    }
    currentImage.classList.remove('visible');

    const allImage = document.querySelectorAll('.carosel img');
    console.log(allImage);

    allImage[visibleImage].classList.add('visible');

    
    console.log(visibleImage, images.length);
    

   
}
)

