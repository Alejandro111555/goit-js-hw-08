// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery');


const imgList = galleryItems.map(({preview,description,original})=> `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /> </a> `).join('');
  galleryWrapper.insertAdjacentHTML('beforeend',imgList);

  galleryWrapper.addEventListener('click' , bigImgGallery);

  let gallery = new SimpleLightbox('.gallery a',{
    captionsData:`alt`,
    captionDelay:250 
  });

  function bigImgGallery (event) {
    if (event.target.nodeName !== "IMG") {
        return;
      }
}