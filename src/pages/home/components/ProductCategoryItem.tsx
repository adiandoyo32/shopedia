interface ProductCategoryItemProps {
  name: string;
  children: React.ReactNode;
}

const ProductCategoryItem = (props: ProductCategoryItemProps) => {
  return (
    <div className="inline-block mx-3 text-center">
      {props.children}
      <p className="text-xs text-gray-500 mt-2 ">{props.name}</p>
    </div>
  );
};

export default ProductCategoryItem;
