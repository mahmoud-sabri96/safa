import {
    createContext,
    useReducer,
    useContext,
    useState,
    useEffect,
    // useCallback
} from "react";
import PropTypes from "prop-types";
// utils
import Axios from "../utils/Axios";
import { setSession } from "../utils/helper";
// URLS
import * as URLS from "../urls";
// Cookies
import Cookies from "js-cookie";
// ----------------------------------------------------------------------

const initialState = {
    isInitialized: false,
    isAuthenticated: false,
    isRegister: false,
    user: null,
};

const reducer = (state, action) => {
    if (action.type === "INITIAL") {
        return {
            isRegister: false,
        };
    }
    if (action.type === "LOGIN") {
        return {
            ...state,
            isAuthenticated: true,
            isRegister: true,
            email: action.payload.email,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            phoneNumber: action.payload.phoneNumber,
            profilePictureUrl: action.payload.profilePictureUrl,
            id: action.payload.id,
        };
    }

    if (action.type === "REGISTER") {
        return {
            ...state,
            isAuthenticated: false,
            isRegister: true,
            user: null,
        };
    }

    if (action.type === "LOGOUT") {
        return {
            ...state,
            isAuthenticated: false,
            user: null,
        };
    }

    return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuthContext context must be use inside AuthProvider");
    return context;
};

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [registerErrors, setRegisterErrors] = useState(null)
    const [loginErrors, setLoginErrors] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const [forgetPasswordError, setForgetPasswordError] = useState(null)


    const initialize = async () => {
        setIsLoading(false)
        dispatch({
            type: "INITIAL",
        });
    };

    useEffect(() => {
        initialize();
    }, []);


    // LOGIN
    const login = async (data) => {
        try {
            setIsLoading(true)
            const response = await Axios.post(URLS?.loginURL, data);
            if (response?.status === true) {
                setIsLoading(false)
                setLoginErrors(null)
                setSession(response?.data?.access_token);
                Cookies.set('access_token', response?.data?.access_token)
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        name: response.data?.user?.name,
                        phone: response.data?.user?.phone,
                        email: response.data?.user?.email,
                        image: response.data?.user?.image,
                        gender: response.data?.user?.gender,
                        role: response.data?.user?.type,
                    })
                );
                setTimeout(() => window.location.href = "/", 1000)

            } if (response?.status === false) {
                setIsLoading(false)
                setLoginErrors(response?.message)
            }
        } catch (error) {
            setIsLoading(false)
            setLoginErrors(error?.errors)
        }

    };

    // REGISTER
    const register = async (data) => {
        setIsLoading(true)
        try {
            const response = await Axios.post(URLS?.registerURL, data, {
                headers: { "content-type": "multipart/form-data" },
            });
            if (response?.status === true) {
                setIsLoading(false)
                setRegisterErrors(null)
                dispatch({
                    type: "REGISTER",
                    payload: {
                        isRegister: true,
                        user: null,
                    },
                });
            } if (response?.status === false) {
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            setRegisterErrors(error?.errors)
        }
    };

    // LOGOUT
    const logout = async () => {
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        setSession(null);
        Cookies.remove('access_token')
        dispatch({
            type: "LOGOUT",
        });
        window.location.href = "/";
    };

    // VerifyMail
    const verificationEmail = async (id) => {
        setIsLoading(true)
        try {
            const response = await Axios.get(`${URLS?.verificationEmailURL}/${id}`);
            console.log(response)
            if (response?.status === true) {
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        }


    };


    // ForgetPassword 
    const forgetPassword = async (data) => {
        try {
            setIsLoading(true)
            const response = await Axios.post(URLS?.forgetPasswordURL, data);
            if (response?.status === true) {
                setIsLoading(false)
                setForgetPasswordError(null)
                // setTimeout(() => window.location.href = "/", 1000)
            } if (response?.status === false) {
                setIsLoading(false)
                setForgetPasswordError(response?.message)
            }
            return response
        } catch (error) {
            setIsLoading(false)
            setLoginErrors(error?.errors)
        }

    };
    return (
        <AuthContext.Provider
            value={{
                ...state,
                registerErrors,
                loginErrors,
                isLoading,
                forgetPasswordError,
                method: "jwt",
                register,
                verificationEmail,
                login,
                logout,
                forgetPassword,
                initialize
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}