import { useEffect } from "react";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
// Locales
import useLocales from "../../locales/useLocales";
// Cookies
import Cookies from "js-cookie";
//---------------------------------------------------

const LoginPage = () => {

  const { translate } = useLocales()

  const access_token = Cookies.get('access_token')
  const role = JSON.parse(localStorage.getItem('user'))?.role

  const navigate = useNavigate()

  useEffect(() => {
    if (access_token && role) {
      // If there is no access_token, redirect to a login page or handle the unauthorized access as needed
      navigate("/");
    }
  }, [])

  // ----- JSX Code -----
  return (
    <>
      login
    </>
  )
}

export default LoginPage