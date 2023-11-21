import axios from "axios";

export const userRegister = (user) => {
  return axios("https://gray-creepy-fox.cyclic.app/user/register", {
    method: "POST",
    data: user,
    headers: {
      "content-type": "application/json",
    },
  });
};
export const userLogin = (user) => {
  return axios("https://gray-creepy-fox.cyclic.app/user/login", {
    method: "POST",
    data: user,
    headers: {
      "content-type": "application/json",
    },
  });
};

export const getdataIncome = (token) => {
  return axios(`https://gray-creepy-fox.cyclic.app/income/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const getdataExpence = (token) => {
  return axios(`https://gray-creepy-fox.cyclic.app/expense/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const getTotalExpence = (token) => {
  return axios(`https://gray-creepy-fox.cyclic.app/expense/totalexpense`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const getTotalIncome = (token) => {
  return axios(`https://gray-creepy-fox.cyclic.app/income/totalincome`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};

export const getResentDataExpence = (token) => {
  return axios(`https://gray-creepy-fox.cyclic.app/expense/sortbyDate/DESC`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const getResentDataIncome = (token) => {
  return axios(`https://gray-creepy-fox.cyclic.app/income/sortbyDate/DESC`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};

export const addIncome = (data, token) => {
  return axios("https://gray-creepy-fox.cyclic.app/income/addincome", {
    method: "POST",
    data: data,
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const addExpense = (data, token) => {
  return axios("https://gray-creepy-fox.cyclic.app/expense/addexpense", {
    method: "POST",
    data: data,
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
