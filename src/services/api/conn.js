import axios from "axios";

const conn = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8080",
});

conn.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = "Bearer " + token;
  return config;
});

conn.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  },
);

/**
 * Executa uma requisição GET através do axios.
 *
 * @param {string} url - URL da requisição.
 * @param {function?} callback - função a ser executada após a chamada.
 * @returns any - Objeto de resposta da API.
 */
const get = async (url, callback) =>
  await conn.get(url).then((res) => (callback ? callback(res) : res.data));

/**
 * Executa uma requisição POST através do axios.
 *
 * @param {string} url - URL da requisição.
 * @param {any} body - dados a serem enviados.
 * @param {function?} callback - função a ser executada após a chamada.
 * @returns any - Objeto de resposta da API.
 */
const post = async (url, body, callback) =>
  await conn
    .post(url, body)
    .then(callback ? callback(res) : ({ data }) => data);

const api = { get, post };

export default api;
