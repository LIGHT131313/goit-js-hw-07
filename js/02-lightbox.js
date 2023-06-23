import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

function createMarkupItems(arr) {
	return arr
		.map(
			({ preview, original, description }) =>
				`<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`
		)
		.join('');
}
list.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));

list.addEventListener('click', onClickZoomImg);

function onClickZoomImg(evt) {
	evt.preventDefault();

	if (!evt.target.classList.contains('gallery__image')) {
		return;
	}

	new SimpleLightbox('.gallery a', {
		captionsData: 'alt',
		captionDelay: 250,
	});
}
