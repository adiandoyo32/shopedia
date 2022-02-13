import { useState, useEffect } from "react";
import { Product } from "../../models/Product";
import { loadProducts } from "../../services/product_service";
import { ProductList } from "./components/ProductList";
import { ProductListSkeleton } from "./components/ProductListSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { productActionCreators, State } from "../../redux";

export default function HomePage() {
    const dispatch = useDispatch()
    const { setProductList } = bindActionCreators(productActionCreators, dispatch);
    const productListState = useSelector((state: State) => state.product)

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);

    const initData = async () => {
        setIsLoading(true);
        try {
            const productList = await loadProducts();
            console.log(productList);
            setProductList(productList)
            setProducts(productList);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        initData();
    }, []);

    const renderProductList = () => {
        if (isLoading) return <ProductListSkeleton />

        return <div>
            <ProductList productList={products} />
            <div className="h-20"></div>
        </div>

    }

    return (
        <div>
            {renderProductList()}
        </div>
    );
}
