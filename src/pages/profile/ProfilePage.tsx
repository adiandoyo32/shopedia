import { ReactComponent as Avatar } from "./../../assets/icons/avatar.svg";
import { IoInformation, IoLogOutOutline } from "react-icons/io5";
import MenuItem from "./components/MenuItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector, useAuth } from "../../redux/hooks";
import { loadProfile, logout, selectProfile } from "../../redux/slice/profile.slice";
import ModalDialog, { useModalDialog } from "../../components/ModalDialog";
import TextButton from "../../components/TextButton";
import ButtonBlock from "../../components/ButtonBlock";

function ProfilePage() {
  const dispatch = useAppDispatch()
  const profileState = useAppSelector(selectProfile)
  const isAuth = useAuth()
  const { visible, toggle } = useModalDialog()

  useEffect(() => {
    if (isAuth) {
      dispatch(loadProfile())
    }
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-4 p-4 space-x-4">
        <Avatar className="w-14 h-14 rounded-full object-cover bg-violet-300" />
        <div>
          <p className="text-base font-bold">{profileState.profile.name}</p>
          <Link to="/profile/edit" className="text-green-500">
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="flex flex-col mb-3 w-full">
        <MenuItem icon={<IoInformation size={16} />} name="About" />
        <MenuItem onClick={toggle} icon={<IoLogOutOutline size={16} />} name="Logout" />
      </div>
      <ModalDialog visible={visible} toggle={toggle}>
        <div className="text-center py-8">
          <p className="font-medium text-sm">
            Are you sure you want to logout?
          </p>
        </div>
        <div className="flex space-x-3">
          <TextButton onClick={toggle}>Cancel</TextButton>
          <ButtonBlock
            onClick={() => {
              dispatch(logout())
              toggle()
            }
            }>
            Logout
          </ButtonBlock>
        </div>
      </ModalDialog>
    </div>
  );
}

export default ProfilePage;
