import { IoLocationSharp } from "react-icons/io5";
import TextButton from "../../../components/TextButton";
import { useAppSelector } from "../../../redux/hooks";
import { selectProfile } from "../../../redux/slice/profile-slice";

const ShippingAddress: React.FC = () => {
  const profileState = useAppSelector(selectProfile);
  

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <IoLocationSharp className="inline text-green-500" size={20} />
          <p className="text-sm font-medium inline">Shipping Address</p>
        </div>
        <div>
          <TextButton className="text-green-500">
            Change
          </TextButton>
        </div>
      </div>
      <div className="mb-6">
        {/* <p className="text-base inline">{profileState.profile.name} </p>
        <p className="text-base inline">{profileState.profile.city}</p> */}
        <p className="text-base font-semibold">
          {profileState.profile.address}
        </p>
      </div>
    </>
  );
};

export default ShippingAddress;
