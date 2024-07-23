import axios from "axios";
// Toast 
// import { errorToast, successToast } from "./toastMessage";
// Cookies
import Cookies from "js-cookie";
// import { toast } from "react-toastify";
// import toast from "react-hot-toast";
// const host = window.location?.origin
// ---------------------------------------
const access_token = Cookies.get('access_token')

const axiosInstance = axios.create({
    baseURL: "https://dashboard.tamrah-one.com/",
    headers: {
        API_SECRET_KEY: 'TamrahEcommerce@123',
        Authorization: `Bearer ${access_token}`
        // LANGUAGE: localStorage.getItem('i18nextLng')
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        // if (response?.status === 200 && response?.data?.status === true) {
        //     // successToast(response?.data?.message); 
        //     successToast('Sucessfull '); 
        // }
        // if (response?.status === 200 && response?.data?.status === false) {
        //     // errorToast(response?.data?.message);
        //     errorToast('Something went wrong');
        // }
        return response?.data
    },
    (error) => {
        // console.log(error)
        // if (error?.message !== 'canceled') {
            // errorToast('Something went wrong');
            return Promise.reject((error.response && error.response.data) || 'Something went wrong')
        // }
        // errorToast(error?.response?.data?.message || 'Something went wrong');
    }
);

export default axiosInstance;