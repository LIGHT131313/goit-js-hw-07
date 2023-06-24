import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

function createMarkupItems(arr) {
	return arr
		.map(
			({ preview, original, description }) =>
				`<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"/>
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

	const createMarkupModal = basicLightbox.create(
		`
    <img src="${evt.target.dataset.source}" width="800" height="600" alt="${evt.target.alt}">
`,
		{ onShow: onAddListEscKeyClose, onClose: onEscKeyClose }
	);

	createMarkupModal.show();

	function onAddListEscKeyClose() {
		document.addEventListener('keydown', onEscKeyClose);
	}

	function onEscKeyClose(e) {
		if (e.code === 'Escape') {
			document.removeEventListener('keydown', onEscKeyClose);
			createMarkupModal.close();
		} else {
			document.removeEventListener('keydown', onEscKeyClose);
		}
	}
}
