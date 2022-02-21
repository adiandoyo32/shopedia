import { IoChevronForward } from "react-icons/io5";

interface MenuItemProps {
  name: string;
  single?: boolean;
  icon: JSX.Element;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div className="bg-white hover:bg-gray-50 pl-4">
      <div className="flex justify-between items-center border-gray-200 border-b py-4 pr-3 cursor-pointer">
        <div className="flex items-center space-x-3">
          {props.icon}
          <p className="text-sm font-semibold">{props.name}</p>
        </div>
        <IoChevronForward size={16} />
      </div>
    </div>
  );
};

export default MenuItem;
