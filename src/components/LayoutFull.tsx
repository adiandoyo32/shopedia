import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import Navbar from "./Navbar";

const LayoutFull: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomNavigation />
    </>
  );
};

export default LayoutFull;
