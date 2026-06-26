import axios from "axios"
import axios from "axios"

const axios = axios.create({
    baseURL: `${import.meta.env.VITE_BURL}`,
    headers:{
        "Accept-Language":"en"
    }
});
export default axiosInstance;