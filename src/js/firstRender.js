import itemsTemplate from '../tamplates/note-items.hbs';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';
import ArchiveNote from './ArchiveNote';

const notes = document.querySelector('ul.notes');

function markupNotes(data) {
  const markup = itemsTemplate(data);
  notes.insertAdjacentHTML('afterbegin', markup);

  notes.addEventListener('click', onBtnClick);
  function onBtnClick(e) {
    switch (e.target.dataset.title) {
      case 'edit':
        EditNote(e);
        break;

      case 'archive':
        ArchiveNote(e);
        break;

      case 'delete':
        DeleteNote(e);
        break;

      default:
        null;
    }
  }
}
export default markupNotes;
