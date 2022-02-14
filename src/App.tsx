import "./App.css";
import '@assets/css/main.css'
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
import { IoLocationSharp } from "react-icons/io5";
import Carousel from "./pages/home/components/Carousel";
import ProductCategory from "./pages/home/components/ProductCategory";

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
    // <div className="App max-w-2xl m-auto">
    //   <Router basename="/">
    //     <div className="body p-6">
    //       <Routes>
    //         {/* {routes.map((route, index) => <PublicRoute key={index} route={route}/>)} */}
    //         {routes.map((route, index) => <Route key={index} path={route.path} element={route.component} />)}
    //       </Routes>
    //     </div>
    //     <div className="bottom">
    //       <BottomNavigation />
    //     </div>
    //   </Router>
    // </div>

    <div className="App bg-neutral-200">
      <div className="root max-w-2xl relative m-auto">
        <section className="navbar sticky top-0 w-full z-50 bg-white px-4 py-2 flex flex-row items-center justify-between">
          <div className="logo font-bold text-xl">
            <span className="tracking-wider">Shopedia</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <IoLocationSharp size={24} className="text-red-500" />
            <div className="ml-2 px-1 w-28 ">
              <p className="text-xs text-gray-400 truncate">Lokasi</p>
              <p className="text-sm font-bold truncate">Pontianak Kota - Pontianak</p>
            </div>
          </div>
        </section>

        <section className="footer fixed bottom-0 w-full max-w-2xl z-50 bg-blue-300">
          Footer
        </section>

        <section className="content bg-white">
          <Carousel/>
          <ProductCategory />
          <HomePage />
        </section>
      </div>
    </div>
  );
}

export default App;
