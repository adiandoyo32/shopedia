import classNames from "classnames";
import { useEffect, useState } from "react";

type ButtonColor = "green" | "red"

interface ButtonIconOutlineProps {
  color?: ButtonColor
  disabled?: boolean
  onClick?: () => void
}

const ButtonIconOutline: React.FC<ButtonIconOutlineProps> = (props) => {

  const color = props.color ?? "green"
  // const disableState = { 'border-gray-300': props.disabled, [`border-${color}-600`]: !props.disabled }

  const colorBorder = () => {
    if (!!props.disabled) {
      return "border-gray-300"
    }

    switch (color) {
      case "green":
        return "border-green-600"
      case "red":
        return "border-red-600"
      default:
        return "border-gray-300"
    }
  }

  const ringColor = () => {
    switch (color) {
      case "green":
        return "focus:ring-green-600/20"
      case "red":
        return "focus:ring-red-600/20"
      default:
        return "focus:ring-gray-300/20"
    }
  }

  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.onClick}
      className={classNames(`border p-0.5 bg-white rounded outline-none focus:outline-none focus:ring transition`, ringColor(), colorBorder())}>
      {props.children}
    </button>
  );
};

export default ButtonIconOutline;
