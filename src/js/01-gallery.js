
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
const makeImageGallery = document.querySelector(".gallery");

function createLi(images) {
    return images.reduce((acc, { preview, description, original }) => acc + `
  <a class="gallery__item" 
  href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}"
    </a> `
  , "")
}
const result = createLi(galleryItems);

makeImageGallery.insertAdjacentHTML('beforeend', result);


function handleClick(evt) {
  evt.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
        captionPosition: "top",
    });
}   
makeImageGallery.addEventListener('click', handleClick); 