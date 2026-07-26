import axios from "axios"
import useAuthStore from "../store/useAuthStore";
import i18n from "../i18next";

const token = useAuthStore.getState().token;

const authAxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BURL}`,
    headers:{
        "Accept-Language":i18n.language,
        "Authorization": `Bearer ${token}`,
    }
});
export default authAxiosInstance;