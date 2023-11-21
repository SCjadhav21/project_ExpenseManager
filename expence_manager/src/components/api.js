import axios from "axios";

export const userRegister = (user) => {
  return axios("http://localhost:4500/user/register", {
    method: "POST",
    data: user,
    headers: {
      "content-type": "application/json",
    },
  });
};
export const userLogin = (user) => {
  return axios(" http://localhost:4500/user/login", {
    method: "POST",
    data: user,
    headers: {
      "content-type": "application/json",
    },
  });
};

export const getdataIncome = (token) => {
  return axios(`http://localhost:4500/income/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const getdataExpence = (token) => {
  return axios(`http://localhost:4500/expense/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const getTotalExpence = (token) => {
  return axios(`http://localhost:4500/expense/totalexpense`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const getTotalIncome = (token) => {
  return axios(`http://localhost:4500/income/totalincome`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};

export const getResentDataExpence = (token) => {
  return axios(`http://localhost:4500/expense/sortbyDate/DESC`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const getResentDataIncome = (token) => {
  return axios(`http://localhost:4500/income/sortbyDate/DESC`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};

export const addIncome = (data, token) => {
  return axios("http://localhost:4500/income/addincome", {
    method: "POST",
    data: data,
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
export const addExpense = (data, token) => {
  return axios("http://localhost:4500/expense/addexpense", {
    method: "POST",
    data: data,
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};
