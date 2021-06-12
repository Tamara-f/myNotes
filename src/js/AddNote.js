import itemsTemplate from '../tamplates/note-items.hbs';
import createNoteData from './helpers/createNoteData';
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
