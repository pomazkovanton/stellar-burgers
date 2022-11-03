import axios from 'axios';

//Универсальный обработчик запроса на сервер
export const handleRequest = async (url: string, method: string, data = {}) => {
  const res = await axios(url, {
    method: method,
    data: data,
  });
  return res;
};
