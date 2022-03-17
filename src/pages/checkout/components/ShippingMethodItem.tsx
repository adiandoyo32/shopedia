import { currency } from "../../../libs/utils";

interface ShippingMethodItemProps {
    name: string;
    estimation: string;
    price: number;
    onClick: (val: string) => void
}

const ShippingMethodItem: React.FC<ShippingMethodItemProps> = (props) => {
    return (
        <div onClick={() => props.onClick(props.name)} className="flex flex-col cursor-pointer p-4 bg-white transition-all hover:bg-gray-50">
            <div className="flex justify-between mb-1">
                <p className="font-semibold text-base">{props.name}</p>
                <p className="font-semibold text-base text-green-500">{currency(props.price)}</p>
            </div>
            <p className="text-gray-400">{props.estimation}</p>
        </div>
    );
};

export default ShippingMethodItem;
