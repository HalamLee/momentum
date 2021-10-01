const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const image_url = `img/${chosenImage}`;

document.body.style.cssText += `background-image:url(${image_url})`;
