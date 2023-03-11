// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const makeGallery = galleryItems.map((element) =>{

const itemGalleryEl = `<a class="gallery__item" href="${element.original}">
    <img
        class="gallery__image"
        src="${element.preview}"
        alt="${element.description}"
    />
    </a>`
    return itemGalleryEl
}).join('')
galleryEl.innerHTML = makeGallery;

let modal = new SimpleLightbox('.gallery__item', {
    captionsData:'alt',
    captionPosition: 'bottom',
    captionDelay:250,
});