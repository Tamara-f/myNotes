const showArchBtn = document.querySelector('.seeArch');
const archNotes = document.querySelector('.myArchNotes');

showArchBtn.onclick = () => {
  archNotes.hasAttribute('hidden')
    ? archNotes.removeAttribute('hidden')
    : archNotes.setAttribute('hidden', '');
  window.scrollTo({
    top: 1500,
    behavior: 'smooth',
  });
};
