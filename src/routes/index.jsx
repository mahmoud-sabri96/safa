// React-Router-Dom
import { useRoutes } from "react-router-dom";
// Components
import {
    Layout,
    // UserLayout
} from "../components";
// Element
import {
    FavouritePage,
    Homepage,
    ShoppingCartPage,
    // LoginPage,
} from "./elements";
// Pathes
import { path } from "./pathes";
// import AuthUserGuard
//     from "./route-guard/AuthUserGuard";
//--------------------------------------------------

const Router = () => {
    return useRoutes([
        // { path: `${path?.verificationEmail}/:id`, element: <VerificationEmailPage /> },
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: path.home, element: <Homepage />, index: true },
                { path: path.user.favourite, element: <FavouritePage /> },
                { path: path.shoppingCart, element: <ShoppingCartPage /> },
                {
                    path: path?.products,
                    children: [
                        // { path: '', element: <ProductsPage /> }
                    ]
                },
            ]
        },

        {
            // path: path.user.index,
            // element:
            //     <AuthUserGuard />
            // ,
            // children: [
            //     {
            //         path: '',
            //         element: <UserLayout />,
            //         children: [
            //             // { path: path.user.profile, element: <UserProfilePage />, index: true },
            //         ]
            //     },
            // ]
        },
    ]);
};

export default Router;
