interface ButtonBlockProps {
  type?: 'button' | 'submit' | 'reset' 
  onClick?: () => void;
  className?: string;
}

const ButtonBlock: React.FC<ButtonBlockProps> = (props) => {
  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={`bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded w-full ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonBlock;
