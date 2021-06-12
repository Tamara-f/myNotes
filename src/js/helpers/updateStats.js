const archivedTasksHolder = document.querySelector('.archived-notes'); //completed-tasks
const statsActive = document.querySelector('.statsActive');
const statsArchive = document.querySelector('.statsArchive');

export default function setArchive() {
  const notelist = document.querySelectorAll('.note-item');
  const listArr = notelist.length;
  const archive = archivedTasksHolder.childNodes.length - 1;

  statsActive.textContent = `${listArr - archive}`;
  statsArchive.textContent = `${archive}`;
}
