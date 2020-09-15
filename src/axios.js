import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://tinderclone11.herokuapp.com/" /* "http://localhost:8005", */,
});

export default instance;
