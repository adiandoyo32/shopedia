import { useEffect } from "react";
import { ProductListSkeleton } from "./components/ProductListSkeleton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setProductList, selectProduct, fetchProductList } from "../../redux/slice/productSlice";

export default function HomePage() {
  const productState = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();

  const load = async () => {
    dispatch(
      fetchProductList()
    )
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
    if (productState.fetchProductListState == "loading") return <ProductListSkeleton />;

    return (
      <div>
        {productState.productList.map((product) => {
          return <span key={product.id}>{product.title}</span>;
        })}
        {/* <ProductList productList={products} /> */}
        <div className="h-20"></div>
      </div>
    );
  };

  return <div>{renderProductList()}</div>;
}
