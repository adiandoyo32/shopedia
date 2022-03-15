import { IoBagHandle } from "react-icons/io5";
import List from "../../../components/List";
import { currency } from "../../../libs/utils";
import { useAppSelector } from "../../../redux/hooks";
import { selectCart } from "../../../redux/slice/cart-slice";

const OrderList = () => {
  const cartState = useAppSelector(selectCart);

  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2">
        <IoBagHandle className="inline text-green-500" size={20} />
        <p className="text-sm font-medium inline">Your order</p>
      </div>
      <List
        data={cartState.cartList}
        renderItem={(cartItem, index) => (
          <div key={index} className="flex py-3 space-x-3">
            <img
              src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
              className="rounded-md w-24"
            />
            <div>
              <p className="font-semibold text-ellipsis overflow-hidden whitespace-pre-wrap break-all leading-5 text-sm mb-1">
                {cartItem.title}
              </p>
              <p className="font-bold text-sm mb-10 text-green-500">{`${currency(
                cartItem.price
              )}`}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default OrderList;
