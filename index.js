import Library from './modules/library.js';
import displaySection from './modules/navigation.js';
import currentDate from './modules/calendar.js';

const library = new Library();

window.displaySection = displaySection;

document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navList');
  const navNew = document.getElementById('navNew');
  const navContact = document.getElementById('navContact');

  navList.addEventListener('click', () => displaySection('list'));
  navNew.addEventListener('click', () => displaySection('form'));
  navContact.addEventListener('click', () => displaySection('contact'));

  displaySection('list');
  currentDate();
});
