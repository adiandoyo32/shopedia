import classNames from "classnames";
import { camelize } from "../libs/utils";

interface TextFieldProps {
  label?: string;
  required?: boolean;
  value?: string | number
  // onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  valid?: boolean
}

const TextAreaField: React.FC<TextFieldProps> = (props) => {
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
      <textarea
        id={camelize(props.label)}
        value={props.value}
        className={classNames(`w-full mb-1.5 block p-2.5 bg-gray-50 border text-sm rounded-md focus:outline-none focus:ring-2 transition`, inputState)}
        placeholder={props.label}
        required={props.required}
        onChange={props.onChange}
      />
      {props.children}
    </div>
  );
};

export default TextAreaField;
