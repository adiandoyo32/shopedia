interface ButtonIconProps {}

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  return (
    <button
      type="button"
      className="border p-0.5 border-green-600 bg-white rounded outline-none focus:outline-none focus:ring focus:ring-green-600/20 transition"
    >
      {props.children}
    </button>
  );
};

export default ButtonIcon;
