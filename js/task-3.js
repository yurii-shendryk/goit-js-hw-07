const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const creatImg = image => {
//   const galleryItemRef = document.createElement('li');
//   galleryItemRef.classList.add('gallery__item');
//   galleryItemRef.insertAdjacentHTML(
//     'afterbegin',
//     `<img src=${image.url} alt=${image.alt}>`,
//   );
//   return galleryItemRef;
// };

// const galleryImages = images.map(image => creatImg(image));
// console.log(galleryImages);
// const galleryRef = document.getElementById('gallery');
// galleryRef.append(...galleryImages);

const galleryItemRef = document.createElement('li');
galleryItemRef.classList.add('gallery__item');
const galleryRef = document.getElementById('gallery');
images.forEach(image =>
  galleryRef.insertAdjacentHTML(
    'afterbegin',
    `<li class ='gallery__item'><img src=${image.url} alt=${image.alt} class="gallery__image"></li>`,
  ),
);
