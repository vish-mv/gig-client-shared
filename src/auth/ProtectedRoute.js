import React from "react";
import {Navigate, useLocation} from 'react-router-dom';
import {AppRoutes} from "../routes/routes";
import {userIsEditAuthorized} from "./Authentication";

export function ProtectedRoute({children}) {
    let location = useLocation();

    if (!userIsEditAuthorized()) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={AppRoutes.login} state={{from: location}} replace/>;
    }

    return children;
}
