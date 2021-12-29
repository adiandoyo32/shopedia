import { FC } from 'react'
import { Image } from 'antd-mobile'
import { Product } from '../../../models/Product'

interface ProductCardProps {
    product: Product
}

export const ProductCard: FC<ProductCardProps> = (props) => {
    return (
        <div className='product-card m-2 self-stretch shadow rounded-md hover:shadow-md transition duration-500 cursor-pointer'>
            <div className="">
                <Image src={props.product.image} height={200} width={200} fit='contain' />
                <div className="p-4">
                    <span className="text-ellipsis overflow-hidden whitespace-pre-wrap break-all leading-5 text-sm">{props.product.title}</span>
                    <div className="font-bold text-lg mt-2">{`$${props.product.price}`}</div>
                </div>
            </div>
        </div>
    )
}