import axios from "axios";

const Base_URL = "https://my-wallet-elias-manica.herokuapp.com";

async function login(body) {
  const promise = await axios.post(`${Base_URL}/login`, body);
  return promise;
}

async function singUp(body) {
  const promise = await axios.post(`${Base_URL}/sing-up`, body);
  return promise;
}

async function getBalanceUser(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.get(`${Base_URL}/balance`, config);
  return promise;
}

async function getTransitionUser(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.get(`${Base_URL}/transition`, config);
  return promise;
}

async function postTransition(body, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.post(`${Base_URL}/transition`, body, config);
  return promise;
}

async function postWithDrawn(body, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.post(`${Base_URL}/transition`, body, config);
  return promise;
}

async function singOut(token) {
  const body = {};

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.post(`${Base_URL}/sing-out`, body, config);
  return promise;
}

async function deleteTransition(idTransition, token) {
  const promise = await axios.delete(`${Base_URL}/transition`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id: idTransition,
    },
  });
  return promise;
}

async function editTransition(idTransition, valueEdit, descriptionEdit, token) {
  const body = {
    id: idTransition,
    value: valueEdit.replace(",", "."),
    description: descriptionEdit,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.put(`${Base_URL}/transition`, body, config);
  return promise;
}

export {
  login,
  singUp,
  getBalanceUser,
  getTransitionUser,
  postTransition,
  postWithDrawn,
  singOut,
  deleteTransition,
  editTransition,
};
