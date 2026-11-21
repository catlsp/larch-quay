import moment from 'moment';
import dayjs from 'dayjs';
import _ from 'lodash';
import { round } from 'lodash-es';

export function newsDate(value) {
  moment.locale('en');
  return moment(value).format('D MMMM YYYY');
}

export function monthTitle(value) {
  return dayjs(value + '-01').format('MMMM YYYY');
}

export function pounds(value) {
  return '£' + _.round(value).toLocaleString('en-GB');
}

export function perMonth(value) {
  return '£' + round(value).toLocaleString('en-GB') + ' a month';
}

export function area(value) {
  return _.toNumber(value).toFixed(1) + ' m²';
}
