import classNames from "../../utils/classNames";

type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
};

function Input({ type, placeholder, className }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(
        className,
        "w-full px-5 py-3 rounded-lg font-medium bg-medium-gray border border-light-gray placeholder-light-gray text-sm focus:outline-none focus:border-gray-400 focus:bg-medium-gray",
      )}
    />
  );
}

export default Input;
