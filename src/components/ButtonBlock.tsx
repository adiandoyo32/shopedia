interface ButtonBlockProps {
  onClick?: () => void;
  onPress?: Function;
  className?: string;
}

const ButtonBlock: React.FC<ButtonBlockProps> = (props) => {
  return (
    <button
      type="button"
      onClick={() => props.onPress}
      className={`bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded w-full ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonBlock;
