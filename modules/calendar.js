import { DateTime } from './luxon.js';

export const Currentdate = () => {
  const dateElement = document.querySelector('#date');

  const updateDateTime = () => {
    const currentDateTime = DateTime.now().toLocaleString(
      DateTime.DATETIME_FULL_WITH_SECONDS
    );
    dateElement.innerHTML = currentDateTime;
  };

  setInterval(updateDateTime, 500);
};
