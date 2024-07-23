// React-router-dom
import { Navigate, Outlet } from 'react-router-dom';
// Cookies
import Cookies from 'js-cookie';
//------------------------------------------------------

export default function AuthUserGuard() {

    const hasAccessToken = Cookies.get('access_token');
    const role = JSON.parse(localStorage.getItem('user'))?.role

    if (hasAccessToken && role) {
        // If the access_token exists, render the protected route
        return <Outlet />;
    } else {
        // If there is no access_token, redirect to a login page or handle the unauthorized access as needed
        return <Navigate to="/login" />;
    }
}