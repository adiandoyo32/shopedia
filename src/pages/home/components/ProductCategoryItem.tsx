interface ProductCategoryItemProps {
  name: string;
  children: React.ReactNode;
}

const ProductCategoryItem = (props: ProductCategoryItemProps) => {
  return (
    <div className="mx-3 text-center cursor-pointer">
      {props.children}
      <p className="text-[10px] text-gray-500 mt-2">{props.name}</p>
    </div>
  );
};

export default ProductCategoryItem;
