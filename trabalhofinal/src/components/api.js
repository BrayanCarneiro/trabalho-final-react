import axios from "axios";

const api = axios.create ({
    baseURL: "https://ecommerce-residencia.herokuapp.com/",
    //baseURL: "https://api-grupo2.herokuapp.com/",
    //baseURL: "http://localhost:9091/"
});

export default api;