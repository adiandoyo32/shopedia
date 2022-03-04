import { IoChevronBackOutline } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import Navbar from "./Navbar";

const LayoutNavbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <div className="flex items-center py-2">
          <ButtonIcon
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoChevronBackOutline size={24} />
          </ButtonIcon>
        </div>
      </Navbar>
      <Outlet />
    </>
  );
};

export default LayoutNavbar;
