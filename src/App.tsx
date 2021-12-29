import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/user/UserPage";
import NotFoundPage from "./pages/error/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import { BottomNavigation } from "./components/BottomNavigation";

interface RouteItem {
  path: string,
  component: JSX.Element
  isAuth?: boolean
}

const routes: Array<RouteItem> = [
  {
    path: "/",
    component: <HomePage />
  },
  {
    path: "/about",
    component: <AboutPage />
  },
  {
    path: "/user",
    component: <UserPage />,
    isAuth: true
  },
  {
    path: "*",
    component: <NotFoundPage />,
    isAuth: true
  },
]

interface PrivateRouteProps {
  route: RouteItem
}

function PrivateRoute(props: PrivateRouteProps) {
  // if (props.route.isAuth) return <Route path={props.route.path} element={props.route.component} />
  // else return <Route path="*" element={<NotFoundPage /> } />

  return <Route path={props.route.path} element={props.route.component} />
}

interface PublicRouteProps {
  route: RouteItem
}

function PublicRoute(props: PublicRouteProps) {
  return <Route path={props.route.path} element={props.route.component} />
}

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <div className="body p-6">
          <Routes>
            {/* {routes.map((route, index) => <PublicRoute key={index} route={route}/>)} */}
            {routes.map((route, index) => <Route key={index} path={route.path} element={route.component} />)}
          </Routes>
        </div>
        <div className="bottom">
          <BottomNavigation />
        </div>
      </Router>
    </div>
  );
}

export default App;
