interface InputFieldProps {
  label?: string;
  type?: "text" | "number" | "password";
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{props.label}</label>
      <input
        type="text"
        className="w-full block p-2.5 bg-gray-50 border border-gray-200 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={props.label}
        required
      />
    </div>
  );
};

export default InputField;
