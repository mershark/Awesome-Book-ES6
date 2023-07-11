import { DateTime } from 'luxon';

export function getCurrentDate() {
  return DateTime.now().toLocaleString(DateTime.DATE_FULL);
}
