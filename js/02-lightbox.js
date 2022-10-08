import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItemsArray = [];

galleryItems.forEach(({ preview, original, description }) => {
  galleryItemsArray.push(
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  );
});
galleryEl.insertAdjacentHTML("beforeend", galleryItemsArray.join(""));

// ----------------------------

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});