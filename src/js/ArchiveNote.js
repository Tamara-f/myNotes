import updateStats from './helpers/updateStats';
const archivedTasksHolder = document.querySelector('.archived-notes');

export default async function ArchiveNote(e) {
  const listItem = e.target.parentNode.parentNode.parentNode;
  const icons = e.target.parentNode.parentNode.childNodes;
  const iconData = e.target.dataset;
  //hidden for edit & delete
  icons[1].setAttribute('hidden', '');
  icons[5].setAttribute('hidden', '');
  const ul = listItem.parentNode;

  archivedTasksHolder.appendChild(listItem);
  iconData.title = 'unarchive';

  archivedTasksHolder.addEventListener('click', onBtnClick);

  updateStats();

  function onBtnClick(e) {
    const iconData = e.target.dataset;
    if (iconData.title === 'unarchive') {
      const listItemNew = e.target.parentNode.parentNode.parentNode;
      const icons = e.target.parentNode.parentNode.childNodes;
      icons[1].removeAttribute('hidden', '');
      icons[5].removeAttribute('hidden', '');
      iconData.title = 'archive';

      ul.appendChild(listItemNew);
      updateStats();
      window.scrollTo({
        top: 500,
        behavior: 'smooth',
      });
    }
  }
}
