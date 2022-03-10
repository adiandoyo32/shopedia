import { useAppSelector } from "../../../redux/hooks";
import { selectProduct } from "../../../redux/slice/product-slice";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
    const productState = useAppSelector(selectProduct);
    return (
        <div className="grid grid-cols-2 gap-1 px-3 justify-items-stretch">
            {
                productState.productList.map((product, index) => {
                    return <ProductCard key={index} product={product} />
                })
            }
        </div>
    )
}