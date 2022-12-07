/* eslint-disable no-useless-escape */
import axios from 'axios';

//Универсальный обработчик запроса на сервер
export const handleRequest = async (url: string, method: string, data = {}, headers = {}) => {
  const res = await axios(url, {
    method: method,
    data: data,
    headers: headers,
  });
  return res;
};

//Функции для работы с куки
export const setCookie = (name: string, value: string | null, props: any) => {
  props = {
    path: '/',
    ...props,
  };
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  if (value !== null) value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name: string) => {
  setCookie(name, null, { expires: -1 });
};

// Функция для работы с датой
export const getDate = (orderDate: Date, dateNow: Date) => {
  const daysPast = Math.round((dateNow.valueOf() - orderDate.valueOf()) / 1000 / 3600 / 24);

  const hours = orderDate.getHours();

  const minutesWithoutZero = orderDate.getMinutes();

  const minutes =
    minutesWithoutZero < 10 ? '0' + minutesWithoutZero.toString() : minutesWithoutZero.toString();

  if (daysPast === 0) return `Сегодня, ${hours}:${minutes} i-GMT+3`;
  if (daysPast === 1) return `Вчера, ${hours}:${minutes} i-GMT+3`;

  let dayMessage = 'дней';
  let daysCopy = daysPast;
  daysCopy %= 100;
  if (daysCopy >= 5 && daysCopy <= 20) {
    dayMessage = 'дней';
  }
  daysCopy %= 10;
  if (daysCopy === 1) {
    dayMessage = 'день';
  }
  if (daysCopy >= 2 && daysCopy <= 4) {
    dayMessage = 'дня';
  }

  return `${daysPast} ${dayMessage} назад, ${hours}:${minutes} i-GMT+3`;
};
