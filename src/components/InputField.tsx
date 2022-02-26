import classNames from "classnames";
import { useState } from "react";
import { camelize } from "../libs/utils";

interface InputFieldProps {
  label?: string;
  type?: "text" | "number" | "password";
  required?: boolean;
  value?: string | number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  valid?: boolean
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const [value, setValue] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const inputState = {
    'border-gray-200': props.valid,
    'border-red-500': !props.valid,
    'focus:border-blue-300': props.valid,
    'focus:border-red-300': !props.valid,
    'focus:ring-blue-300': props.valid,
    'focus:ring-red-300': !props.valid
   }

  return (
    <div className="mb-4">
      <label htmlFor={camelize(props.label)} className="inline-block mb-1.5 text-sm font-medium">{props.label}</label>
      <input
        id={camelize(props.label)}
        value={props.value}
        type="text"
        className={classNames(`w-full mb-1.5 block p-2.5 bg-gray-50 border text-sm rounded-md focus:outline-none focus:ring-2 transition`, inputState)}
        placeholder={props.label}
        onChange={props.onChange}
        required={props.required}
      />
      {props.children}
    </div>
  );
};

export default InputField;
