import { IoChevronForwardOutline, IoLocationSharp } from "react-icons/io5";
import TextAreaField from "../../../components/TextAreaField";
import TextButton from "../../../components/TextButton";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectOrder, setAddress } from "../../../redux/slice/order-slice";
import { selectProfile } from "../../../redux/slice/profile-slice";

const ShippingAddress: React.FC = () => {
    const profileState = useAppSelector(selectProfile);
    const orderState = useAppSelector(selectOrder);
    const dispatch = useAppDispatch();

    const setOrderAddress = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setAddress(e.target.value));
    }

    return (
        <>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                    <IoLocationSharp className="inline text-green-500" size={20} />
                    <p className="text-sm font-medium inline">Shipping Address</p>
                </div>
            </div>
            <div className="mb-6">
                <TextAreaField
                    label="Address"
                    value={orderState.order.shippingAddress?.street}
                    onChange={setOrderAddress}
                    valid={true}
                >
                    {/* {orderState.order.shippingAddress?.street} */}
                </TextAreaField>
                {/* <div className="flex p-4 shadow rounded-md justify-between cursor-pointer">
                    <p className="text-sm font-semibold">Choose shipping address</p>
                    <IoChevronForwardOutline size={20} className="text-green-500" />
                </div>
                <div className="flex p-4 rounded-md justify-between cursor-pointer">
                <p className="text-sm font-semibold">{profileState.profile.address}</p>
                    <IoChevronForwardOutline size={20} className="text-green-500" />
                </div> */}
            </div>
        </>
    );
};

export default ShippingAddress;
