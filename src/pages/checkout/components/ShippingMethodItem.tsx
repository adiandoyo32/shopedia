import { currency } from "../../../libs/utils";
import ShippingMethod from "@models/ShippingMethod"

interface ShippingMethodItemProps {
    shippingMethod: ShippingMethod;
    onClick: (val: ShippingMethod) => void
}

const ShippingMethodItem: React.FC<ShippingMethodItemProps> = (props) => {
    return (
        <div onClick={() => props.onClick(props.shippingMethod)} className="flex flex-col cursor-pointer px-3 py-4 bg-white transition-all hover:bg-gray-50">
            <div className="flex justify-between mb-1">
                <p className="font-semibold text-base">{props.shippingMethod.name}</p>
                <p className="font-semibold text-base text-green-500">{currency(props.shippingMethod.price)}</p>
            </div>
            <p className="text-gray-400">{props.shippingMethod.description}</p>
        </div>
    );
};

export default ShippingMethodItem;
