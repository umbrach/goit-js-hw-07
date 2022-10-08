import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const galleryItemsArray = [];

galleryItems.forEach(({ preview, original, description }) => {
  galleryItemsArray.push(
    `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
  );
});
galleryEl.insertAdjacentHTML("beforeend", galleryItemsArray.join(""));

// ---------------------------------


let instance;
const instanceOpen = event => {
    event.preventDefault();
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
    if (event.target === event.currentTarget) {
        return
    }
    instance.show();
    galleryEl.addEventListener('keydown', instanceClose)
}
// ---------------------------------

const instanceClose = (event) => {
  if (event.code === "Escape") {
    instance.close();
  }
};

// ---------------------------------

galleryEl.addEventListener('click', instanceOpen)