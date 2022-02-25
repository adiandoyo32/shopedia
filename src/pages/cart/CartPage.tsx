import { useEffect } from "react"
import List from "../../components/List"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCartList, selectCart } from "../../redux/slice/cart-slice";
import CartListTile from "./components/CartListTile";

function CartPage() {
    const cartState = useAppSelector(selectCart)
    const dispatch = useAppDispatch()

    useEffect(() => {
        loadCart();
    }, [])

    const loadCart = async () => {
        dispatch(fetchCartList())
    }

    return (
        <div className="flex flex-col">
            <List
                data={cartState.cartList}
                renderItem={(cartItem, index) => <CartListTile key={index} product={cartItem} />}
            />
        </div>
    )
}

export default CartPage
