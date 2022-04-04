import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonBlock from "src/components/ButtonBlock";
import { currency } from "src/libs/utils";
import { selectCart } from "src/redux/slice/cart-slice";
import { calculateTotalPayment, selectOrder } from "src/redux/slice/order-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PageState, setPageState } from "../../redux/slice/page-slice";
import OrderList from "./components/OrderList";
import ShippingAddress from "./components/ShippingAddress";
import ShippingMethodSection from "./components/ShippingMethodSection";

const pageState: PageState = {
  title: "Checkout",
};

const CheckoutPage = () => {
  const cartState = useAppSelector(selectCart);
  const orderState = useAppSelector(selectOrder);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageState(pageState));
    dispatch(calculateTotalPayment(cartState.paymentAmount));

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
          <p>{currency(cartState.paymentAmount)}</p>
        </div>
        <div className="text-sm font-medium flex justify-between leading-7">
          <p>Shipping Fee</p>
          <p>{currency(orderState.order.shippingMethod?.price ?? 0)}</p>
        </div>
        <div className="text-lg font-semibold flex justify-between leading-7">
          <p>Total Payment</p>
          <p>{currency(orderState.order.totalPayment)}</p>
        </div>
      </div>
      <div className="fixed mx-auto left-0 bottom-0 right-0 max-w-lg p-4 bg-white shadow-lg-top z-30">
        <div>
          <ButtonBlock onClick={() => navigate("/payment")}>
            <span className="font-bold text-base">Select payment method</span>
          </ButtonBlock>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
