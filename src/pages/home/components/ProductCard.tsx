import { Image } from 'antd-mobile'
import { useDispatch } from 'react-redux'
import ButtonBlock from '../../../components/ButtonBlock'
import CartItem from '../../../models/CartItem'
import { Product } from '../../../models/Product'
import { addToCart } from '../../../redux/slice/cart-slice'

interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
    const dispatch = useDispatch()

    const addItemToCart = () => {
        const item: CartItem = {
            ...props.product,
            qty: 1,
        }
        dispatch(addToCart(item))
    }

    return (
        <div className='product-card group m-2 self-stretch overflow-hidden rounded-md hover:shadow-lg transition duration-500 cursor-pointer'>
            <div>
                <Image src={props.product.image} height={200} width={200} fit='contain' />
                <div className="p-4">
                    <span className="text-ellipsis overflow-hidden whitespace-pre-wrap break-all leading-5 text-sm mb-1">{props.product.title}</span>
                    <div className="font-bold text-sm mb-2">{`$${props.product.price}`}</div>
                    <ButtonBlock onClick={() => addItemToCart()} className='opacity-0 group-hover:opacity-100 transition ease-in-out duration-500'>
                        Add to cart
                    </ButtonBlock>
                </div>
            </div>
        </div>
    )
}