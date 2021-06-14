import editTemplate from '../templates/edit-note.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';
import addNote from './AddNote';

export default function EditNote(e) {
  const listItem = e.target.parentNode.parentNode.parentNode;
  const name = listItem.children[0].textContent;
  const content = listItem.children[3].textContent;
  const ul = listItem.parentNode;

  const data = {
    name,
    content,
  };
  const markup = editTemplate(data);

  basicLightbox
    .create(markup, {
      onShow: basicLightbox => {
        basicLightbox.element().querySelector('.close').onclick =
          basicLightbox.close;
      },
    })
    .show();

  //delete old and save new
  ul.removeChild(listItem);
  document.querySelector('.modal').addEventListener('submit', addNote);
}
