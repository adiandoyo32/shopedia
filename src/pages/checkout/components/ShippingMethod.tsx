import { ImTruck } from "react-icons/im";
import BottomSheet, { useBottomSheet } from "../../../components/BottomSheet";
import TextButton from "../../../components/TextButton";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { saveShippingMethod, selectOrder } from "../../../redux/slice/order-slice";
import ShippingMethodItem from "./ShippingMethodItem";

const ShippingMethod = () => {
    const { visible, toggle } = useBottomSheet();
    const orderState = useAppSelector(selectOrder);
    const dispatch = useAppDispatch();

    const setShippingMethod = (value: string) => {
        dispatch(saveShippingMethod(value));
        toggle();
    };

    return (
        <>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                    <ImTruck className="inline text-green-500" size={20} />
                    <p className="text-sm font-medium inline">Shipping Method</p>
                </div>
                <div>
                    <TextButton className="text-green-500" onClick={toggle}>
                        Change
                    </TextButton>
                </div>
            </div>

            <div>
                <p className="font-semibold text-base">{orderState.order.shippingMethod}</p>
                {orderState.order.shippingMethod == "" && (
                    <div className="my-8">
                        <TextButton className="text-green-500 text-sm" onClick={toggle}>
                            Choose Shipping Method
                        </TextButton>
                    </div>
                )}
            </div>

            <BottomSheet visible={visible} toggle={toggle}>
                <div className="overflow-y-auto border-t border-gray-200 mb-8">
                    <ShippingMethodItem
                        name="Reguler"
                        price={41000}
                        estimation="1 - 2 Days"
                        onClick={setShippingMethod}
                    />
                </div>
            </BottomSheet>
        </>
    );
};

export default ShippingMethod;
