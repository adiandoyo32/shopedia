import { useEffect } from "react";
import { ProductListSkeleton } from "./components/ProductListSkeleton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setProductList, selectProduct, fetchProductList } from "../../redux/slice/product-slice";
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
    dispatch(
      setProductList([
        {
          id: 1,
          title: "Product 1",
          description: "",
          category: "",
          image: "",
          price: 1000,
        },
      ])
    );

    load()
    // console.log(productList)
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
