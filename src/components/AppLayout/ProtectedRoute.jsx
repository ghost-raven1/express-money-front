import React from "react"

const ProtectedRoute = ({ children }) => {
    // if (!localStorage.getItem("access")?.length) return <Navigate to={RouterPath.auth} replace />;
    // else return children;
    return children
};

export default ProtectedRoute
