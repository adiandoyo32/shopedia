import "./App.css";
import "./assets/css/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import EditProfilePage from "./pages/profile/EditProfilePage";
import LoginPage from "./pages/login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";
import LayoutFull from "./components/LayoutFull";
import LayoutNavbar from "./components/LayoutNavbar";
import CheckoutPage from "./pages/checkout/CheckoutPage";

interface RouteItem {
    path: string;
    component: JSX.Element;
    isAuth?: boolean;
}

const routes: Array<RouteItem> = [
    {
        path: "/",
        component: <HomePage />,
    },
    {
        path: "/cart",
        component: <AboutPage />,
    },
    {
        path: "/profile",
        component: <ProfilePage />,
    },
    {
        path: "/login",
        component: <LoginPage />,
    },
    {
        path: "*",
        component: <NotFoundPage />,
    },
];

interface PrivateRouteProps {
    route: RouteItem;
}

function PrivateRoute(props: PrivateRouteProps) {
    // if (props.route.isAuth) return <Route path={props.route.path} element={props.route.component} />
    // else return <Route path="*" element={<NotFoundPage /> } />

    return <Route path={props.route.path} element={props.route.component} />;
}

interface PublicRouteProps {
    route: RouteItem;
}

function PublicRoute(props: PublicRouteProps) {
    return <Route path={props.route.path} element={props.route.component} />;
}

function App() {
    return (
        <div className="App bg-neutral-300">
            <Router>
                <div className="page min-h-screen flex flex-col h-full max-w-lg m-auto bg-white pb-24">
                    <Routes>
                        <Route element={<LayoutFull />}>
                            <Route path="/" element={<HomePage />} />
                            <Route element={<ProtectedRoute />}>
                                <Route path="profile" element={<ProfilePage />} />
                            </Route>
                        </Route>
                        <Route element={<LayoutNavbar />}>
                            <Route path="cart" element={<CartPage />} />
                            <Route element={<AuthRoute />}>
                                <Route path="login" element={<LoginPage />} />
                            </Route>
                            <Route element={<ProtectedRoute />}>
                                <Route path="checkout" element={<CheckoutPage />} />
                                <Route path="profile/edit" element={<EditProfilePage />} />
                            </Route>
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
