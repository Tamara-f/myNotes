import './styles.css';
import './js/helpers/modal';
import './js/helpers/showArchive';

import dataNotes from './data-notes.json';
import markupNotes from './js/firstRender';

const statsActive = document.querySelector('.statsActive');

function onPageLoaded() {
  markupNotes(dataNotes);

  const notelist = document.querySelectorAll('.note-item');
  statsActive.textContent = `${notelist.length}`;
}

document.addEventListener('DOMContentLoaded', onPageLoaded);
