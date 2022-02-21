import "./App.css";
import '@assets/css/main.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import { BottomNavigation } from "./components/BottomNavigation";
import { IoLocationSharp } from "react-icons/io5";
import CartPage from "./pages/cart/CartPage";

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
    path: "/cart",
    component: <AboutPage />
  },
  {
    path: "/profile",
    component: <ProfilePage />,
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
    <div className="App bg-neutral-200 h-full w-full">
      <Router>
        <div className="root max-w-2xl relative m-auto">
          <section className="navbar sticky top-0 w-full z-50 bg-white px-4 py-2 flex flex-row items-center justify-between">
            <div className="logo font-bold text-xl">
              <span className="tracking-wider">Shopedia</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <IoLocationSharp size={20} className="text-red-500" />
              <div className="ml-2 px-1 w-28 ">
                <p className="text-xs text-gray-400 truncate">Lokasi</p>
                <p className="text-sm font-bold truncate">Pontianak Kota - Pontianak</p>
              </div>
            </div>
          </section>

          <section className="footer fixed left-0 right-0 bottom-0 mx-auto w-full max-w-2xl z-50 bg-white">
            <div className="bottom-navigation">
              <BottomNavigation />
            </div>
          </section>

          <section className="content min-h-screen max-w-2xl py-2 bg-white">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
