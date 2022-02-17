import { useState, useEffect } from "react";
import { Product } from "../../models/Product";
import { loadProducts } from "../../services/product_service";
import { ProductList } from "./components/ProductList";
import { ProductListSkeleton } from "./components/ProductListSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { productActionCreators, State } from "../../redux";
import apiRoutes from "../../api-mock";
import axiosIns from "../../libs/axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setProductList, selectProduct } from "../../redux/slice/productSlice";

export default function HomePage() {
  const product = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();
  // const { setProductList } = bindActionCreators(
  //   productActionCreators,
  //   dispatch
  // );
  // const productListState = useSelector((state: State) => state.product);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  // const initData = async () => {
  //   let asd = apiRoutes;

  //   axiosIns.get("/api/products").then((response) => {
  //     // console.log(response.data);
  //   });

  //   setIsLoading(true);
  //   try {
  //     const productList = await loadProducts();
  //     // console.log(productList);
  //     setProductList(productList);
  //     setProducts(productList);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setIsLoading(false);
  // };

  const loadProducts = () => {
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
  };

  useEffect(() => {
    // initData();
    loadProducts();
  }, []);

  const renderProductList = () => {
    if (isLoading) return <ProductListSkeleton />;

    return (
      <div>
        {product.productList.map((product) => {
          return <span key={product.id}>{product.title}</span>;
        })}
        <ProductList productList={products} />
        <div className="h-20"></div>
      </div>
    );
  };

  return <div>{renderProductList()}</div>;
}
