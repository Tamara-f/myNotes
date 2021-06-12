import { nanoid } from 'nanoid';

export default function createNoteData(e) {
  const category = document.querySelector('input[name="radio"]:checked').value;
  const name = e.target[0].value;
  const content = e.target[4].value;
  const dates = findDatesInStr(content);

  const noteData = {
    id: nanoid(),
    name,
    created: new Date().toLocaleDateString(),
    category,
    content,
    dates,
    // archived: false,
  };
  return noteData;
}

function findDatesInStr(string) {
  const arr = string.split(',').join(' ').split(' ');
  const regTestDate =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  const findDates = arr.filter(e => regTestDate.test(e));

  return findDates ? findDates.join(', ') : '';
}
