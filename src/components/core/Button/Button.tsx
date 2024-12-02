import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}) => {
  const baseStyles = "rounded focus:outline-none transition duration-200";
  const sizeStyles = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
