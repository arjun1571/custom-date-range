import React, { FC } from "react";

interface Option {
  key: string | number;
  value: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  value?: string | number;
  onChange: (selectedKey: string | number) => void;
  customClassName?: string;
}

const Select: FC<SelectProps> = ({ options, placeholder = "", value, onChange, customClassName = "" }) => {
  return (
    <div className={`relative ${customClassName}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
