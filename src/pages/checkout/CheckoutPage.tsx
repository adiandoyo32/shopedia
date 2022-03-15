import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { PageState, setPageState } from "../../redux/slice/page-slice";
import OrderList from "./components/OrderList";
import ShippingAddress from "./components/ShippingAddress";
import ShippingMethod from "./components/ShippingMethod";

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
            <ShippingMethod />
        </div>
    );
};

export default CheckoutPage;
