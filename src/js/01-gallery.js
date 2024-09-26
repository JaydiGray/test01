// Add imports above this line
import * as basicLightbox from 'basiclightbox';
import simpleLightbox from 'simple-lightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import 'simple-lightbox/dist/simpleLightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryImageList = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (
      acc +
      `<li class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
		</a>
	</li>`
    );
  },
  ''
);

galleryContainer.insertAdjacentHTML('beforeend', galleryImageList);
new simpleLightbox({ elements: '.gallery li a' });

// const onClickModal = event => {
//   event.preventDefault();
//   console.log(event.target.src);
//   const instance = basicLightbox.create(
//     `<img src="${event.target.dataset.source}" width="1024" height="860">`
//   );

//   instance.show();
// };

// galleryContainer.addEventListener('click', onClickModal);

console.log(galleryItems);
