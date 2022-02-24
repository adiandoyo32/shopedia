import { IoChevronForward } from "react-icons/io5";

interface MenuItemProps {
  name: string;
  single?: boolean;
  icon: JSX.Element;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div className="flex items-center bg-white hover:bg-gray-50 pl-4 space-x-4">
      {props.icon}
      <div className="w-full flex justify-between items-center border-b border-gray-200 py-4 pr-3 cursor-pointer">
        <p className="text-sm font-semibold">{props.name}</p>
        <IoChevronForward size={16} />
      </div>
    </div>
  );
};

export default MenuItem;
