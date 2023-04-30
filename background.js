const images = [
    'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/12/06/01/26/colour-1885352_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_960_720.jpg'
];


const chosenImage =  images[Math.floor(Math.random() * images.length)];
// bgImage.src = chosenImage;
document.body.style.backgroundImage = `url('${chosenImage}')`;
document.body.style.backgroundRepeat = 'no-repeat';
console.log(chosenImage);
