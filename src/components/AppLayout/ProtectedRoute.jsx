import React from "react"
import {Navigate} from "react-router-dom";
import {RouterPath} from "../../../utils/utils";

const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem("access")?.length) return <Navigate to={RouterPath.auth} replace />;
    else return children;
};

export default ProtectedRoute
