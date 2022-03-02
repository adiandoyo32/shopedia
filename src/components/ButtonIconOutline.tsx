import classNames from "classnames";

interface ButtonIconOutlineProps {
  color?: string
  disabled?: boolean
  onClick?: () => void
}

const ButtonIconOutline: React.FC<ButtonIconOutlineProps> = (props) => {
  const color = props.color ?? 'green'
  const disableState = { 'border-gray-300': props.disabled, [`border-${color}-600`]: !props.disabled }

  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.onClick}
      className={classNames(`border p-0.5 bg-white rounded outline-none focus:outline-none focus:ring focus:ring-${color}-600/20 transition`, disableState)}
    >
      {props.children}
    </button>
  );
};

export default ButtonIconOutline;
