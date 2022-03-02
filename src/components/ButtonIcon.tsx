import classNames from "classnames";

interface ButtonIconProps {
  color?: string
  disabled?: boolean
  onClick?: () => void
}

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const color = props.color ?? 'green'

  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.onClick}
      className={classNames(`bg-white rounded outline-none focus:outline-none focus:ring-0 transition`)}
    >
      {props.children}
    </button>
  );
};

export default ButtonIcon;
