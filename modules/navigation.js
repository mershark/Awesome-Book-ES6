export const setDate = () => {
  const today = new Date();
  const date = today.toDateString();
  document.getElementById('date').textContent = date;
};

export const displaySection = (section) => {
  const sectionList = document.getElementById('list');
  const sectionForm = document.getElementById('form');
  const sectionContact = document.getElementById('contact');
  const heading = document.getElementById('title');

  switch (section) {
    case 'list':
      sectionList.classList.remove('hidden');
      sectionForm.classList.add('hidden');
      sectionContact.classList.add('hidden');
      heading.innerHTML = 'All Awesome Books';
      break;

    case 'form':
      sectionList.classList.add('hidden');
      sectionForm.classList.remove('hidden');
      sectionContact.classList.add('hidden');
      heading.innerHTML = 'Add a New Book';
      break;

    case 'contact':
      sectionList.classList.add('hidden');
      sectionForm.classList.add('hidden');
      sectionContact.classList.remove('hidden');
      heading.innerHTML = 'Contact Information';
      break;

    default:
      break;
  }
};
