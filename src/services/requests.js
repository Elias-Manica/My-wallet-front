import axios from "axios";

const Base_URL = "http://localhost:5000";

async function login(body) {
  const promise = await axios.post(`${Base_URL}/login`, body);
  return promise;
}

async function singUp(body) {
  const promise = await axios.post(`${Base_URL}/sing-up`, body);
  return promise;
}

export { login, singUp };
