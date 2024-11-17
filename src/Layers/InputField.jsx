import React from "react";

const InputField = ({ label, inputType, placeholder, name, className, req }) => {
  return (
    <div
      className={`input flex flex-col md:gap-2 gap-[2px] text-white ${className}`}
    >
      <label htmlFor={name} className="md:text-xl font-Josefin font-bold">
        {label} <span className="text-[#FCD980]">{req}</span>
      </label>
      <input
        type={inputType}
        id={name}
        placeholder={placeholder}
        className="bg-transparent border-b-2 border-[#dcca8756] outline-none text-base font-Outfit"
      />
    </div>
  );
};

export default InputField;
