import { useEffect } from "react"
import ItemList from "../../components/ItemList"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCartList, selectCart } from "../../redux/slice/cart-slice";
import CartItem from "./components/CartItem";

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
            <ItemList
                data={cartState.cartList}
                renderItem={(product, index) => <CartItem key={index} product={product} />}
            />
        </div>
    )
}

export default CartPage
