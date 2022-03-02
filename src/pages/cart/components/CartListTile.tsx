import { Image } from "antd-mobile";
import classNames from "classnames";
import { IoAddOutline, IoRemoveOutline, IoTrashOutline } from "react-icons/io5";
import ButtonIconOutline from "../../../components/ButtonIconOutline";
import CartItem from "../../../models/CartItem";
import { useAppDispatch } from "../../../redux/hooks";
import { decrementQty, incrementQty, removeFromCart } from "../../../redux/slice/cart-slice";

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

  const removeItemFromCart = () => {
    dispatch(removeFromCart(props.product.id))
  }

  return (
    <div className={`flex justify-between bg-white transition hover:bg-gray-50 p-4  border-gray-200 ${props.className}`}>
      <div className="grow flex space-x-4">
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
          <div className="flex items-center space-x-4 ">
            <ButtonIconOutline onClick={() => decrementCartItemQty()}>
              <IoRemoveOutline size={16} className="text-green-600" />
            </ButtonIconOutline>
            <p className="font-bold text-sm w-6 text-center">{props.product.qty}</p>
            <ButtonIconOutline disabled={props.product.qty < 99 ? false : true} onClick={() => incrementCartItemQty()}>
              <IoAddOutline size={16} className={classNames({ 'text-green-600': props.product.qty < 99, 'text-gray-300': props.product.qty > 98 })} />
            </ButtonIconOutline>
          </div>
        </div>
      </div>
      <div>
        <ButtonIconOutline color="red" onClick={() => removeItemFromCart()}>
          <IoTrashOutline size={16} className="text-red-500" />
        </ButtonIconOutline>
      </div>
    </div>
  );
};

export default CartListTile;
