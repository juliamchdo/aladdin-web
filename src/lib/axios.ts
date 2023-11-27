import axios from "axios";

export const api = axios.create({
    baseURL: "https://aladdin-back.vercel.app/"
});