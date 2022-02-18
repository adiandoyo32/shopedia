import ProductCategoryItem from "./ProductCategoryItem";
import { ReactComponent as AllProduct } from "@assets/icons/all-product.svg";
import {
  Electronic,
  Handphone,
  MenFashion,
  Sport,
  WomanFashion,
  ComputerLaptop,
  Health,
  HomeLiving,
  Watches,
  Camera,
} from "../../../assets/images";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useState, useRef } from "react";

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
  const [isReachedLeft, setIsReachedLeft] = useState(false)
  const [isReachedRight, setIsReachedRight] = useState(false)
  const productCategoryScroll = useRef<HTMLDivElement>(null);

  const scrollToLeft = () => {
    productCategoryScroll.current!.scrollLeft -= 80
  }

  const scrollToRight = () => {
    productCategoryScroll.current!.scrollLeft += 80
  }

  const scrollCheck = () => {
    let current = productCategoryScroll.current
    let isOnScroll = current!.scrollLeft <= 0
    let isReached = Math.floor(current!.scrollWidth - current!.scrollLeft) <= current!.offsetWidth

    if (isOnScroll) setIsReachedLeft(false)
    else setIsReachedLeft(true)

    if (isReached) setIsReachedRight(true)
    else setIsReachedRight(false)
  }

  return (
    <div className="relative flex justify-center mb-4">
      <div ref={productCategoryScroll} onScroll={scrollCheck} className="overflow-x-auto max-w-xl no-scrollbar my-4 scroll-smooth">
        <div className="inline-flex">
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

        {isReachedLeft && <div className="absolute left-4 top-10">
          <div className="flex w-10 h-10 bg-white rounded-full items-center justify-center drop-shadow-xl cursor-pointer" onClick={scrollToLeft}>
            <IoChevronBack size={20} />
          </div>
        </div>}
        {!isReachedRight && <div className="absolute right-4 top-10 transition ease-in-out duration-1000">
          <div className="flex w-10 h-10 bg-white rounded-full items-center justify-center drop-shadow-xl cursor-pointer" onClick={scrollToRight}>
            <IoChevronForward size={20} />
          </div>
        </div>}
      </div>
    </div>
  );
};

export default ProductCategory;
