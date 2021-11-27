import axios from "axios";

const api = axios.create ({
    baseURL: "https://ecommerce-residencia.herokuapp.com/",
});

export default api;