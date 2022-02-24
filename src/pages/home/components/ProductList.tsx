import { useAppSelector } from "../../../redux/hooks";
import { selectProduct } from "../../../redux/slice/product-slice";
import "../styles/product-card.css"
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
    const productState = useAppSelector(selectProduct);
    return (
        <div className="flex flex-wrap">
            {
                productState.productList.map((product, index) => {
                    return <ProductCard key={index} product={product} />
                })
            }
        </div>
    )
}