// Зробити галерею використовуючи бібліотеку SimpleLightbox як залежність проекту використовуючи npm


import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

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