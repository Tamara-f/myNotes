const archivedTasksHolder = document.querySelector('.archived-notes');
const statsActive = document.querySelector('.statsActive');
const statsArchive = document.querySelector('.statsArchive');

export default function setArchive() {
  const notelist = document.querySelectorAll('.note-item');
  const listArr = notelist.length;
  const archive = archivedTasksHolder.childNodes.length;

  statsActive.textContent = `${listArr - archive}`;
  statsArchive.textContent = `${archive}`;
}
