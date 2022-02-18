import {axiosIns} from "../libs/axios";
import MockAdapter from "axios-mock-adapter";
import { Product } from "../models/Product";

const apiRoutes = [
  {
    status: 200,
    data: [
      {
        id: "product-1",
        image: "/images/200.png",
        desc: "Lorem ipsum dolor sit amet",
        title: "Product 1",
        price: "Rp.100.000",
      },
      {
        id: "product-2",
        image: "/images/200.png",
        desc: "Lorem ipsum dolor sit amet",
        title: "Product 2",
        price: "Rp.100.000",
      },
      {
        id: "product-3",
        image: "/images/200.png",
        desc: "Lorem ipsum dolor sit amet",
        title: "Product 3",
        price: "Rp.100.000",
      },
      {
        id: "product-4",
        image: "/images/200.png",
        desc: "Lorem ipsum dolor sit amet",
        title: "Product 4",
        price: "Rp.100.000",
      },
      {
        id: "product-5",
        image: "/images/200.png",
        desc: "Lorem ipsum dolor sit amet",
        title: "Product 5",
        price: "Rp.100.000",
      },
    ],
  },
  {
    method: "GET",
    url: "/api/products/product-1",
    status: 200,
    response: [
      {
        id: "product-1",
        image: "/images/200.png",
        desc: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
        title: "Product 1",
        price: "Rp.100.000",
      },
    ],
  },
  {
    method: "GET",
    url: "/api/products/product-2",
    status: 200,
    response: [
      {
        id: "product-2",
        image: "/images/200.png",
        desc: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
        title: "Product 2",
        price: "Rp.100.000",
      },
    ],
  },
  {
    method: "GET",
    url: "/api/carts",
    status: 200,
    response: [
      {
        id: "product-1",
        image: "/images/200.png",
        desc: "Lorem ipsum dolor sit amet",
        title: "Product 1",
        price: "Rp.100.000",
      },
      {
        id: "product-1",
        image: "/images/200.png",
        desc: "Lorem ipsum dolor sit amet",
        title: "Product 1",
        price: "Rp.100.000",
      },
    ],
  },
];

const mock = new MockAdapter(axiosIns);

mock.onGet("/api/products").reply(() => {
  // const product: Product = {
  //   id: 123213,
  //   title: "",
  //   category: "",
  //   description: "",
  //   price: 123,
  //   image: "",
  // };
  return [200, apiRoutes[0]];
});

export default apiRoutes;
