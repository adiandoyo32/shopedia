import { useEffect } from "react";
import { ImTruck } from "react-icons/im";
import { IoChevronForwardOutline } from "react-icons/io5";
import BottomSheet, { useBottomSheet } from "../../../components/BottomSheet";
import TextButton from "../../../components/TextButton";
import { currency } from "../../../libs/utils";
import ShippingMethod from "../../../models/ShippingMethod";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { saveShippingMethod, selectOrder } from "../../../redux/slice/order-slice";
import { fetchShippingMethodList, selectShippingMethod } from "../../../redux/slice/shipping-method-slice";
import ShippingMethodItem from "./ShippingMethodItem";

const ShippingMethodSection = () => {
    const { visible, toggle } = useBottomSheet();
    const orderState = useAppSelector(selectOrder);
    const shippingMethodState = useAppSelector(selectShippingMethod);
    const dispatch = useAppDispatch();

    const setShippingMethod = (value: ShippingMethod) => {
        dispatch(saveShippingMethod(value));
        toggle();
    };

    const load = async () => {
        dispatch(fetchShippingMethodList());
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                    <ImTruck className="inline text-green-500" size={20} />
                    <p className="text-sm font-medium inline">Shipping Method</p>
                </div>
                {/* <div>
                    <TextButton className="text-green-500" onClick={toggle}>
                        Change
                    </TextButton>
                </div> */}
            </div>

            <div className="mb-6">
                {orderState.order.shippingMethod && (
                    <div
                        className="flex p-3 shadow rounded-md justify-between items-center cursor-pointer"
                        onClick={toggle}
                    >
                        <div>
                            <p className="text-base font-semibold">{orderState.order.shippingMethod?.name}</p>
                            <p className="text-gray-400">{orderState.order.shippingMethod.description}</p>
                            <p className="font-medium text-sm">{ currency(orderState.order.shippingMethod.price)}</p>
                        </div>
                        <IoChevronForwardOutline size={20} className="text-green-500" />
                    </div>
                )}
                {orderState.order.shippingMethod == undefined && (
                    <div className="flex p-4 shadow rounded-md justify-between cursor-pointer" onClick={toggle}>
                        <p className="text-sm font-semibold">Choose shipping method</p>
                        <IoChevronForwardOutline size={20} className="text-green-500" />
                    </div>
                )}
            </div>

            <BottomSheet visible={visible} toggle={toggle}>
                <div className="overflow-y-auto border-t border-gray-200 mb-8">
                    {shippingMethodState.shippingMethodList.map((item, index) => (
                        <ShippingMethodItem key={index} shippingMethod={item} onClick={setShippingMethod} />
                    ))}
                </div>
            </BottomSheet>
        </>
    );
};

export default ShippingMethodSection;
