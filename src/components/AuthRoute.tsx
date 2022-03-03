import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../redux/hooks"

const AuthRoute = () => {
    const isAuth = useAuth()

    if (!isAuth) return <Outlet />
    return <Navigate to="/" />
}

export default AuthRoute