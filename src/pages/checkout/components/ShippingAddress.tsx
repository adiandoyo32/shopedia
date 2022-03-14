import TextButton from "../../../components/TextButton";
import { useAppSelector } from "../../../redux/hooks";
import { selectProfile } from "../../../redux/slice/profile-slice";

const ShippingAddress: React.FC = () => {
    const profileState = useAppSelector(selectProfile);

    return (
        <div className="px-4 border-b border-gray-200">
            <div className="flex justify-between">
                <p className="text-base font-medium">Shipping Address</p>
                <TextButton className="text-green-500">Select address</TextButton>
            </div>
            <p>{profileState.profile.address}</p>
        </div>
    );
};

export default ShippingAddress;
