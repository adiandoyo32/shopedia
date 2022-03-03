import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../redux/hooks"

const ProtectedRoute = () => {
    const isAuth = useAuth()

    if (isAuth) return <Outlet />
    return <Navigate to="/login" />
}

export default ProtectedRoute