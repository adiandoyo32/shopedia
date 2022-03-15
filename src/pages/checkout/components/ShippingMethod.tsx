import { ImTruck } from "react-icons/im";
import BottomSheet, { useBottomSheet } from "../../../components/BottomSheet";
import TextButton from "../../../components/TextButton";
import ShippingMethodItem from "./ShippingMethodItem";

const ShippingMethod = () => {
  const { visible, toggle } = useBottomSheet();

  return (
    <>
      <div className="flex items-center justify-between">
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

      <div className="my-8">
        <TextButton className="text-green-500 text-base" onClick={toggle}>
          Choose Shipping Method
        </TextButton>
      </div>

      <BottomSheet visible={visible} toggle={toggle}>
        <div className="overflow-y-auto border-t border-gray-200 mb-8">
          <ShippingMethodItem
            name="Next Day (12.000 - 20.000)"
            estimation="1 - 2 Days"
          />
        </div>
      </BottomSheet>
    </>
  );
};

export default ShippingMethod;
