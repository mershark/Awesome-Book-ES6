import { DateTime } from './luxon.js';

const currentDate = () => {
  const dateElement = document.querySelector('#date');

  const updateDateTime = () => {
    const currentDateTime = DateTime.now().toLocaleString(
      DateTime.DATETIME_FULL_WITH_SECONDS,
    );
    dateElement.innerHTML = currentDateTime;
  };

  setInterval(updateDateTime, 500);
};

export default currentDate;
