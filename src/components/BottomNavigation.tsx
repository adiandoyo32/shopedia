import { useLocation, useNavigate } from "react-router-dom";
import {
  IoCart,
  IoCartOutline,
  IoHome,
  IoHomeOutline,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";
import classNames from "classnames";
import { useAppSelector, useAuth } from "../redux/hooks";
import { selectCart } from "../redux/slice/cart-slice";

const BottomNavigation = () => {
  const cartState = useAppSelector(selectCart);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = useAuth();
  const { pathname } = location;

  const tabs = [
    {
      path: "/",
      title: "Home",
      activeIcon: IoHome,
      icon: IoHomeOutline,
    },
    {
      path: "/cart",
      title: "Cart",
      activeIcon: IoCart,
      icon: IoCartOutline,
    },
    {
      path: "/profile",
      title: "Profile",
      activeIcon: IoPerson,
      icon: IoPersonOutline,
    },
  ];

  const setRouteActive = (path: string) => {
    if (path == "/profile" && !isAuth) {
      navigate("/login");
      return;
    }
    navigate(path);
  };

  return (
    <section className="footer fixed left-0 right-0 bottom-0 mx-auto max-w-lg z-30 bg-white shadow-lg-top overflow-hidden">
      <div className="flex flex-row items-center justify-around p-2">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => setRouteActive(tab.path)}
            >
              <div className="flex flex-col items-center relative">
                {pathname === tab.path ? (
                  <tab.activeIcon size={20} className="mb-1 text-green-600" />
                ) : (
                  <tab.icon size={20} className="mb-1 text-gray-400" />
                )}
                {tab.path === "/cart" && cartState.cartList.length > 0 && (
                  <span className="absolute -top-1 -right-3 border-2 border-white bg-red-600 rounded-full w-5 h-5 text-[10px] text-white text-center justify-center">
                    {cartState.cartList.length}
                  </span>
                )}
                <span
                  className={classNames("text-xs tracking-wide", {
                    "text-green-600": pathname === tab.path,
                    "text-gray-400": pathname !== tab.path,
                    "font-bold": pathname === tab.path,
                  })}
                >
                  {tab.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BottomNavigation