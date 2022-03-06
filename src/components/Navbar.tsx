import { useEffect, useRef, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const Navbar: React.FC = ({ children }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    return cleanUp
  }, [scroll])

  const cleanUp = () => {
    window.onscroll = null
  }

  return (
    <header className={`sticky top-0 z-30 bg-white px-4 py-2 flex flex-row items-center justify-between ${scroll ? 'shadow-md' : ''}`}>
      {children ?? (
        <>
          <div className="logo font-bold text-xl">
            <span className="tracking-wider">Shopedia</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <IoLocationSharp size={24} className="text-red-500" />
            <div className="ml-2 px-1 w-32 ">
              <p className="text-xs text-gray-400 truncate">Location</p>
              <p className="text-sm font-bold truncate">Pontianak Kota</p>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
