import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useAppSelector } from "../redux/hooks";
import { selectProfile } from "../redux/slice/profile-slice";
import { Logo } from "../assets/images";

const Navbar: React.FC = ({ children }) => {
  const [scroll, setScroll] = useState(false);
  const profileState = useAppSelector(selectProfile);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    return cleanUp;
  }, [scroll]);

  const cleanUp = () => {
    window.onscroll = null;
  };

  return (
    <header
      className={`sticky top-0 z-30 bg-white px-4 py-2 flex flex-row items-center justify-between ${
        scroll ? "shadow-md" : ""
      }`}
    >
      {children ?? (
        <>
          <div className="logo font-bold text-xl flex items-center space-x-2">
            <img src={Logo} className="h-6" />
            <span className="tracking-wider">Shopedia</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <IoLocationSharp size={24} className="text-red-500" />
            <div className="ml-3 w-fit ">
              <p className="text-xs text-gray-400 truncate">Location</p>
              <p className="text-sm font-bold truncate">
                {  profileState.profile.city ? profileState.profile.city : '-'}
              </p>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
