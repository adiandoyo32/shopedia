import { IoChevronBackOutline } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectPage } from "../redux/slice/page-slice";
import ButtonIcon from "./ButtonIcon";
import Navbar from "./Navbar";

const LayoutNavbar: React.FC = () => {
  const pageState = useAppSelector(selectPage)
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <div className="flex items-center py-2 space-x-4">
          <ButtonIcon
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoChevronBackOutline size={24} />
          </ButtonIcon>
          <span className="text-lg font-semibold">
            {pageState.title}
          </span>
        </div>
      </Navbar>
      <Outlet />
    </>
  );
};

export default LayoutNavbar;
