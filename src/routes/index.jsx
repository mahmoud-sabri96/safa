// React-Router-Dom
import { useRoutes } from "react-router-dom";
// Element
import { Homepage } from "./elements";
// import AuthUserGuard
//     from "./route-guard/AuthUserGuard";
//--------------------------------------------------

const Router = () => {
    return useRoutes([
        // { path: `${path?.verificationEmail}/:id`, element: <VerificationEmailPage /> },
        { path: "/", element: < Homepage />},
    ]);
};

export default Router;
