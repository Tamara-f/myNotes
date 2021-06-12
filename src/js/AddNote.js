import itemsTemplate from '../tamplates/note-items.hbs';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';
import createNoteData from './helpers/createNoteData';
import ArchiveNote from './ArchiveNote';
import updateStats from './helpers/updateStats';

const notes = document.querySelector('ul.notes');

export default function addNote(e) {
  e.preventDefault();
  const data = createNoteData(e);
  const markup = itemsTemplate([data]);
  notes.insertAdjacentHTML('afterbegin', markup);

  updateStats();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
