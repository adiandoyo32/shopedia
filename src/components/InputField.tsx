interface InputFieldProps {
  label?: string;
  type?: "text" | "number" | "password";
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <div data-testid="inputField" className="mb-4">
      <label data-testid="label" className="block mb-2 text-sm font-medium">{props.label}</label>
      <input
        data-testid="input"
        type="text"
        className="w-full block p-2.5 bg-gray-50 border border-gray-200 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={props.label}
        required
      />
    </div>
  );
};

export default InputField;
