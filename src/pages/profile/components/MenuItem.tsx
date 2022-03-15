import { IoChevronForward } from "react-icons/io5";

interface MenuItemProps {
  name: string;
  single?: boolean;
  icon?: JSX.Element;
  onClick?: () => void
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div onClick={props.onClick} className="flex items-center bg-white transition-all hover:bg-gray-50 pl-4 space-x-4 cursor-pointer">
      {props.icon}
      <div className="w-full flex justify-between items-center py-5 pr-3">
        <p className="text-sm font-semibold">{props.name}</p>
        <IoChevronForward size={16} />
      </div>
    </div>
  );
};

export default MenuItem;
