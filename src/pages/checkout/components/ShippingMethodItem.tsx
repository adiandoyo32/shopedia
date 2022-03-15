interface ShippingMethodItemProps {
  name: string;
  estimation: string;
}

const ShippingMethodItem: React.FC<ShippingMethodItemProps> = (props) => {
  return (
    <div className="flex flex-col cursor-pointer p-4 bg-white transition-all hover:bg-gray-50">
      <p className="font-semibold text-base mb-1">{props.name}</p>
      <p className="font-medium text-gray-400">{props.estimation}</p>
    </div>
  );
};

export default ShippingMethodItem;
