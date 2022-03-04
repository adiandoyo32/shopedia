import { useEffect } from "react";
import ButtonBlock from "../../components/ButtonBlock";
import List from "../../components/List";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCartList, selectCart } from "../../redux/slice/cart-slice";
import CartListTile from "./components/CartListTile";
import { ReactComponent as EmptyCart } from "./../../assets/icons/empty-cart.svg";

function CartPage() {
  const cartState = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cartState.cartList.length == 0) {
      loadCart();
    }
  }, []);

  const loadCart = async () => {
    dispatch(fetchCartList());
  };

  return (
    <>
      {cartState.cartList.length > 0 ? (
        <div className="flex flex-col">
          <List
            data={cartState.cartList}
            renderItem={(cartItem, index) => (
              <CartListTile
                key={index}
                product={cartItem}
                className={
                  index != cartState.cartList.length - 1 ? "border-b" : ""
                }
              />
            )}
          />
          <div className="fixed mx-auto left-0 bottom-0 right-0 max-w-lg p-4 bg-white shadow-lg-top z-30">
            <div>
              <ButtonBlock>Checkout</ButtonBlock>
            </div>
          </div>
        </div>
      ) : (
        <div className="grow flex flex-col items-center justify-center -mt-20">
          <EmptyCart className="w-1/2 mb-4" />
          <p className="tracking-wide font-semibold text-lg mb-4">
            Your cart is empty
          </p>
          <p className="tracking-wide font-normal text-gray-400 mb-12 text-center">
            Looks like you haven't added <span className="block"></span>{" "}
            anything to your cart yet
          </p>
          <ButtonBlock className="w-1/2">Go to catalog</ButtonBlock>
        </div>
      )}
    </>
  );
}

export default CartPage;
