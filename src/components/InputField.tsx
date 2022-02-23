import { useState } from "react";

interface InputFieldProps {
  label?: string;
  type?: "text" | "number" | "password";
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const [value, setValue] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <div className="mb-4">
      <label htmlFor={props.label} className="block mb-2 text-sm font-medium">{props.label}</label>
      <input
        id={props.label}
        value={value}
        type="text"
        className="w-full block p-2.5 bg-gray-50 border border-gray-200 text-sm rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        placeholder={props.label}
        onChange={handleChange}
        required={props.required}
      />
    </div>
  );
};

export default InputField;
