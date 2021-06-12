import updateStats from './helpers/updateStats';
const archivedTasksHolder = document.querySelector('.archived-notes'); //completed-tasks

export default function ArchiveNote(e) {
  const listItem = e.target.parentNode.parentNode.parentNode;

  //hidden for edit & delete
  e.target.parentNode.parentNode.childNodes[1].setAttribute('hidden', '');
  e.target.parentNode.parentNode.childNodes[5].setAttribute('hidden', '');

  const ul = listItem.parentNode;

  archivedTasksHolder.appendChild(listItem);
  archivedTasksHolder.addEventListener('click', onBtnClick);

  updateStats();

  function onBtnClick(e) {
    if (e.target.dataset.title === 'archive') {
      const listItemNew = e.target.parentNode.parentNode.parentNode;
      e.target.parentNode.parentNode.childNodes[1].removeAttribute(
        'hidden',
        '',
      );
      e.target.parentNode.parentNode.childNodes[5].removeAttribute(
        'hidden',
        '',
      );

      ul.appendChild(listItemNew);
      updateStats();
      window.scrollTo({
        top: 500,
        behavior: 'smooth',
      });
    }
  }
}
