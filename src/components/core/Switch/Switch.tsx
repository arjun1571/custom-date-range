import React from "react";

interface SwitchProps {
  isOn: boolean;
  onToggle: () => void;
  onLabel?: string;
  offLabel?: string;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onToggle, onLabel = "On", offLabel = "Off", className = "" }) => {
  return (
    <div onClick={onToggle} className={`flex items-center cursor-pointer space-x-2 ${className}`}>
      <div className={`relative w-12 h-6 rounded-full ${isOn ? "bg-green-700" : "bg-gray-400"}`}>
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform transition-transform ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
      <span className="text-sm">{isOn ? onLabel : offLabel}</span>
    </div>
  );
};

export default Switch;
