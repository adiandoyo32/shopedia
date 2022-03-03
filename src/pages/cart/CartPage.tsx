import { useEffect } from "react"
import ButtonBlock from "../../components/ButtonBlock";
import List from "../../components/List"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCartList, selectCart } from "../../redux/slice/cart-slice";
import CartListTile from "./components/CartListTile";

function CartPage() {
    const cartState = useAppSelector(selectCart)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (cartState.cartList.length == 0) {
            loadCart();
        }
    }, [])

    const loadCart = async () => {
        dispatch(fetchCartList())
    }

    return <>
        {
            cartState.cartList.length > 0 ?
                <div className="flex flex-col">
                    <List
                        data={cartState.cartList}
                        renderItem={(cartItem, index) => <CartListTile
                            key={index}
                            product={cartItem}
                            className={index != cartState.cartList.length - 1 ? 'border-b' : ''}
                        />}
                    />
                    <div className="p-4">
                    <ButtonBlock>
                        Checkout
                    </ButtonBlock>

                    </div>
                </div>
                :
                <div className="m-auto">
                    Cart is empty
                </div>
        }
    </>
}

export default CartPage
