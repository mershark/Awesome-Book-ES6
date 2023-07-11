import Library from './modules/library.js';
import { displaySection, setDate } from './modules/navigation.js';

const library = new Library();

window.displaySection = displaySection; // Make displaySection globally accessible
window.setDate = setDate; // Make setDate globally accessible

document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navList');
  const navNew = document.getElementById('navNew');
  const navContact = document.getElementById('navContact');

  navList.addEventListener('click', () => displaySection('list'));
  navNew.addEventListener('click', () => displaySection('form'));
  navContact.addEventListener('click', () => displaySection('contact'));

  displaySection('list');
  setDate();
});
