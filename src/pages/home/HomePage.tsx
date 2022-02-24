import { useEffect } from "react";
import { ProductListSkeleton } from "./components/ProductListSkeleton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectProduct, fetchProductList } from "../../redux/slice/product-slice";
import { ProductList } from "./components/ProductList";
import Carousel from "./components/Carousel";
import ProductCategory from "./components/ProductCategory";

export default function HomePage() {
  const productState = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();

  const load = async () => {
    dispatch(fetchProductList())
  }

  useEffect(() => {
    load()
  }, []);

  const renderProductList = () => {
    if (productState.productListStatus == "loading") return <ProductListSkeleton />;

    return (
      <div>
        <Carousel />
        <ProductCategory />
        <ProductList />
        <div className="h-20"></div>
      </div>
    );
  };

  return <div>{renderProductList()}</div>;
}
