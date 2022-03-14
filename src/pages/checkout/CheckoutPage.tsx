import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { PageState, setPageState } from "../../redux/slice/page-slice";
import ShippingAddress from "./components/ShippingAddress";

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
        <div className="">
            <ShippingAddress />
        </div>
    );
};

export default CheckoutPage;
