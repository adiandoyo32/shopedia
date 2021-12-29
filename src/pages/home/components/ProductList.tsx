import { FC } from "react";
import { Product } from "../../../models/Product";
import "../styles/product-card.css"
import { ProductCard } from "./ProductCard";

interface ProductListProps {
    productList: Product[]
}

export const ProductList: FC<ProductListProps> = (props) => {
    return (
        <div>
            <div className="w-full flex flex-wrap items-stretch">
                {props.productList.map((product, index) => {
                    return <ProductCard key={index} product={product} />
                })}
            </div>
        </div>
    )
}