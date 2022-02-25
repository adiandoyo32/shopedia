import { Image } from "antd-mobile";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import ButtonIcon from "../../../components/ButtonIcon";
import CartItem from "../../../models/CartItem";
import { useAppDispatch } from "../../../redux/hooks";
import { decrementQty, incrementQty } from "../../../redux/slice/cart-slice";

interface CartItemProps {
  product: CartItem;
  className?: string;
}

const CartListTile: React.FC<CartItemProps> = (props) => {
  const dispatch = useAppDispatch()

  const decrementCartItemQty = () => {
    dispatch(decrementQty(props.product));
  }

  const incrementCartItemQty = () => {
    dispatch(incrementQty(props.product));
  }

  return (
    <div className="flex bg-white transition hover:bg-gray-50 p-4 space-x-4 border-gray-200 border-b">
      <Image
        className="rounded-md"
        src={props.product.image}
        height={80}
        width={80}
        fit="contain"
      />
      <div className="flex flex-col justify-between">
        <p className="font-bold text-green-600 text-base">
          {props.product.price}
        </p>
        <p className="font-bold text-sm">{props.product.title}</p>
        <div className="flex items-center space-x-4">
          <ButtonIcon onClick={() => decrementCartItemQty()}>
            <IoRemoveOutline size={16} className="text-green-600" />
          </ButtonIcon>
          <p className="font-bold text-sm">{props.product.qty}</p>
          <ButtonIcon onClick={() => incrementCartItemQty()}>
            <IoAddOutline size={16} className="text-green-600" />
          </ButtonIcon>
        </div>
      </div>
    </div>
  );
};

export default CartListTile;
