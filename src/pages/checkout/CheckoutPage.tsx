import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { PageState, setPageState } from "../../redux/slice/page-slice";
import OrderList from "./components/OrderList";
import ShippingAddress from "./components/ShippingAddress";
import ShippingMethodSection from "./components/ShippingMethodSection";

const pageState: PageState = {
    title: "Checkout",
};

const CheckoutPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageState(pageState));

        return () => {};
    }, []);

    return (
        <div className="p-4">
            <ShippingAddress />
            <OrderList />
            <ShippingMethodSection />
            <div className="flex flex-col">
                <div className="text-sm font-medium flex justify-between leading-7">
                    <p>Total Price</p>
                    <p>Rp 20.0000</p>
                </div>
                <div className="text-sm font-medium flex justify-between leading-7">
                    <p>Delivery Fee</p>
                    <p>Rp 20.0000</p>
                </div>
                <div className="text-sm font-medium flex justify-between leading-7">
                    <p>Delivery Fee</p>
                    <p>Rp 20.0000</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
