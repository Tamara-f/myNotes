import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';
import AddNote from '../AddNote';
import editTemp from '../../templates/edit-note.hbs';

document.querySelector('.modalBtn').onclick = () => {
  basicLightbox
    .create(editTemp(), {
      onShow: basicLightbox => {
        basicLightbox.element().querySelector('.close').onclick =
          basicLightbox.close;
      },
    })
    .show();

  document.querySelector('.modal').addEventListener('submit', AddNote);
};
