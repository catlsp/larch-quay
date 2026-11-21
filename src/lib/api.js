import dayjs from 'dayjs';
import moment from 'moment';
import 'moment/min/locales';
import _ from 'lodash';
import { cloneDeep } from 'lodash-es';

export function getJSON(url) {
  return fetch(url).then((r) => r.json());
}

export function getJSONSync(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send(null);
  try {
    return JSON.parse(xhr.responseText);
  } catch (e) {
    return {};
  }
}

export function formatUpdated(value) {
  if (!value) return '';
  moment.locale('en');
  return moment(value).format('D MMMM YYYY') + ' (' + dayjs(value).format('DD.MM.YYYY') + ')';
}

export const debounced = (fn, wait = 300) => _.debounce(fn, wait);

export function copyOf(value) {
  return cloneDeep(value);
}
