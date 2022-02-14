import ProductCategoryItem from "./ProductCategoryItem";
import { ReactComponent as AllProduct } from "@assets/icons/all-product.svg";
import {
  Electronic,
  Handphone,
  MenFashion,
  Sport,
  Stuff,
  WomanFashion,
  ComputerLaptop,
  Health,
  HomeLiving,
  Watches,
  Camera,
} from "../../../assets/images";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const productCategoryList = [
  {
    name: "Electronic",
    image: Electronic,
  },
  {
    name: "Handphone",
    image: Handphone,
  },
  {
    name: "Men Fashion",
    image: MenFashion,
  },
  {
    name: "Woman Fashion",
    image: WomanFashion,
  },
  {
    name: "Sport",
    image: Sport,
  },
  {
    name: "Computer & Laptop",
    image: ComputerLaptop,
  },
  {
    name: "Health",
    image: Health,
  },
  {
    name: "Home & Living",
    image: HomeLiving,
  },
  {
    name: "Watches",
    image: Watches,
  },
  {
    name: "Camera",
    image: Camera,
  },
];

const ProductCategory = () => {
  return (
    <div className="relative">
      <div className="overflow-x-auto w-full no-scrollbar my-4">
        <div className="inline-flex mx-4">
          <ProductCategoryItem name="All Categories">
            <AllProduct className="w-16 h-14 p-1" />
          </ProductCategoryItem>
          {productCategoryList.map((category, index) => {
            return (
              <ProductCategoryItem key={index} name={category.name}>
                <img
                  key={index}
                  src={category.image}
                  className="max-w-sm h-14 p-1 rounded-full"
                />
              </ProductCategoryItem>
            );
          })}
        </div>

        <div className="absolute left-4 top-6 my-auto">
          <div className="flex w-10 h-10 bg-white rounded-full items-center justify-center drop-shadow-xl cursor-pointer">
            <IoChevronBack size={20} />
          </div>
        </div>
        <div className="absolute right-4 top-6 my-auto">
          <div className="flex w-10 h-10 bg-white rounded-full items-center justify-center drop-shadow-xl cursor-pointer">
            <IoChevronForward size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
