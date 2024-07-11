import { FC } from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div
      className="flex items-center justify-between p-4 ml-4 mr-4 mt-2 border border-red-300 rounded-lg bg-red-50 shadow-lg animate-fade-in"
      role="alert"
    >
      <div className="flex-1 ml-3">
        <p className="text-red-700">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-red-600 hover:text-red-800 focus:outline-none transition ease-in-out duration-150"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 8.586L15.293 3.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 011.414-1.414L10 8.586z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Alert;
