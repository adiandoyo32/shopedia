import { Image } from "antd-mobile";
import { useDispatch } from "react-redux";
import ButtonBlock from "../../../components/ButtonBlock";
import CartItem from "../../../models/CartItem";
import { Product } from "../../../models/Product";
import { addToCart } from "../../../redux/slice/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const item: CartItem = {
      ...props.product,
      qty: 1,
    };
    dispatch(addToCart(item));
  };

  return (
    <div className="flex flex-col product-card group m-2 overflow-hidden rounded-md shadow-md transition duration-500 cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
        alt=""
      />
      {/* <Image src={props.product.image} height={200} fit="fill" className="object-cover" /> */}
      <div className="p-4">
        <p className="text-ellipsis overflow-hidden whitespace-pre-wrap break-all leading-5 text-sm mb-1">
          {props.product.title}
        </p>
        <p className="font-bold text-sm mb-10">{`${props.product.price}`}</p>
        <ButtonBlock
          onClick={() => addItemToCart()}
          className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-500"
        >
          Add to cart
        </ButtonBlock>
      </div>
    </div>
  );
};
