import React from "react";

const Input = ({
    type,
    error,
    value,
    onBlur,
    name,
    maxLength,
    minLength,
    required,
    label,
    className1,
    disabled,
    placeholder,
    classBox,
    onChange,
}) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className={`relative ${classBox} rounded-lg border border-[#104649]`}>
            <label className="text-[#00FFFC] Brockmann text-sm absolute top-4 left-4">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                id={name}
                onBlur={onBlur}
                minLength={minLength}
                pattern={type === "number" ? "[0-9]*" : undefined}
                maxLength={maxLength}
                className={`block px-4 pb-4 pt-8 w-full text-base outline-none font-medium rounded-lg bg-[transparent] appearance-none peer ${className1} ${error ? "border-[red]" : ""
                    } placeholder-[#fff] text-[#fff]`}
                onChange={handleChange} // Use the handleChange function
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                onWheel={(e) => e.target.blur()}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};

export default Input;
