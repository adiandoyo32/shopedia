import { ReactComponent as Avatar } from "@assets/icons/avatar.svg";
import { IoInformation, IoLogOutOutline } from "react-icons/io5";
import MenuItem from "./components/MenuItem";

function ProfilePage() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-4 px-4 space-x-4">
        <Avatar className="w-14 h-14 rounded-full object-cover bg-violet-300" />
        <div className="flex flex-col">
          <p className="text-base font-bold">John Smith</p>
          <p className="text-xs">john.smith@email.com</p>
        </div>
      </div>
      <div className="flex flex-col mb-3 w-full">
        <MenuItem icon={<IoInformation size={16} />} name="About" />
        <MenuItem icon={<IoLogOutOutline size={16} />} name="Logout" />
      </div>
    </div>
  );
}

export default ProfilePage;
