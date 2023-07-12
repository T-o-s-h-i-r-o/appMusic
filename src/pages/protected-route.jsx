import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
    const isAllowed = localStorage.getItem('token');

    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />
    }

    return children;
}