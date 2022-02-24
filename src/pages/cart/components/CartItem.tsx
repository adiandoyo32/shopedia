import { Image } from 'antd-mobile'
import { Product } from "../../../models/Product"

interface CartItemProps {
  product: Product
  className?: string
}

const CartItem: React.FC<CartItemProps> = (props) => {
  return (
    <div className='flex bg-white transition hover:bg-gray-50 p-4 space-x-4 cursor-pointer border-gray-200 border-b'>
      <Image className='rounded-md' src={props.product.image} height={80} width={80} fit='contain' />
      <div className='flex flex-col justify-between'>
        <p className='font-bold text-green-500 text-base'>{props.product.price}</p>
        <p className='font-bold text-sm'>{props.product.title}</p>
        <p className='font-bold text-sm'>1</p>
      </div>
    </div>
  )
}

export default CartItem