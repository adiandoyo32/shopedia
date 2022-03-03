import "./App.css";
import "./assets/css/main.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import { BottomNavigation } from "./components/BottomNavigation";
import CartPage from "./pages/cart/CartPage";
import EditProfilePage from "./pages/profile/EditProfilePage";
import LoginPage from "./pages/login/LoginPage";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";

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
    <div className="App bg-neutral-200">
      <Router>
        <div className="page min-h-screen flex flex-col h-full max-w-lg m-auto bg-white">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="cart" element={<CartPage />}></Route>
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="profile" element={<ProfilePage />} />
                <Route path="profile/edit" element={<EditProfilePage />} />
              </Route>
              <Route path="/" element={<AuthRoute />}>
                <Route path="login" element={<LoginPage />} />
              </Route>
            </Routes>
          </Layout>

          <section className="footer fixed left-0 right-0 bottom-0 mx-auto max-w-lg z-30 bg-white shadow-lg-top">
            <BottomNavigation />
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
