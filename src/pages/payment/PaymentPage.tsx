import { useEffect } from "react";
import { IoWallet } from "react-icons/io5";
import { useAppDispatch } from "src/redux/hooks";
import { PageState, setPageState } from "src/redux/slice/page-slice";
import Lottie from "lottie-react";
import underConstruction from "../../assets/images/under-construction.json";

const pageState: PageState = {
  title: "Payment",
};

const PaymentPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPageState(pageState));

    return () => {};
  }, []);
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <IoWallet className="inline text-green-500" size={20} />
          <p className="text-sm font-medium inline">Payment Method</p>
        </div>
      </div>

      <Lottie loop animationData={underConstruction} />

      {/* <div
        onClick={() => props.onClick(props.shippingMethod)}
        className="flex flex-col cursor-pointer px-3 py-4 bg-white transition-all hover:bg-gray-50"
      >
        <div className="flex justify-between mb-1">
          <p className="font-semibold text-base">{props.shippingMethod.name}</p>
          <p className="font-semibold text-base text-green-500">
            {currency(props.shippingMethod.price)}
          </p>
        </div>
        <p className="text-gray-400">{props.shippingMethod.description}</p>
      </div> */}
    </div>
  );
};

export default PaymentPage;
