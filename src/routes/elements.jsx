import { lazy } from "react";
// ------------------------------------------------

export const Homepage = lazy( () => import("../pages/Homepage/Homepage") )
export const LoginPage = lazy( () => import("../pages/LoginPage/LoginPage") )
export const FavouritePage = lazy( () => import("../pages/User/FavouritePage") )
export const ShoppingCartPage = lazy(() => import("../pages/ShoppingCartPage/ShoppingCartPage") )

