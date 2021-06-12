import updateStats from './helpers/updateStats';
import swal from 'sweetalert';

export default function DeleteNote(e) {
  swal({
    title: 'Are you sure?',
    text: 'Once deleted, you will not be able to recover this note',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then(willDelete => {
    if (willDelete) {
      swal('Your note has been deleted!', {
        icon: 'success',
      });
      const listItem = e.target.parentNode.parentNode.parentNode;
      const ul = listItem.parentNode;
      ul.removeChild(listItem);
      updateStats();
    } else {
      swal('Your note is safe!');
    }
  });
}
