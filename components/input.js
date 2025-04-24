import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
    countryCodeEditable,
    country,
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
        <div className={`relative ${classBox} rounded-lg border ${error ? "border-red-500" : "border-[#104649]"}`}>
            {label && (
                <label htmlFor={name} className="text-[#00FFFC] Gilroy z-10 font-semibold text-sm absolute top-[-11px] left-4">
                    {label}
                </label>
            )}

            {type === "number" ? (
                // React Phone Input for phone numbers
                <PhoneInput
                    value={value}
                    country={country || "us"}  // Default to "us" if countryCode is not set
                    countryCodeEditable={countryCodeEditable}
                    onChange={(phone, country) =>
                        onChange({ target: { name, value: phone, countryCode: country.dialCode } })
                    }
                    inputProps={{
                        name: name,
                        required: required,
                        disabled: disabled,
                    }}

                    containerClass="w-full" // Full-width
                    className={`block px-4 pb-4 pt-4 w-full text-base outline-none font-medium rounded-lg bg-[#04292b] appearance-none peer ${className1} placeholder-[#9ca3af] focus:placeholder-transparent text-[#fff]`}
                />
            ) : (
                // Default Input
                <input
                    type={type}
                    name={name}
                    value={value}
                    id={name}
                    onBlur={onBlur}
                    minLength={minLength}
                    maxLength={maxLength}
                    className={`block px-4 pb-4 pt-4 w-full text-base outline-none font-medium rounded-lg bg-[#04292b] appearance-none peer ${className1} placeholder-[#9ca3af] focus:placeholder-transparent text-[#fff]`}
                    onChange={handleChange}
                    disabled={disabled}
                    required={required}
                    placeholder={placeholder}
                    onWheel={(e) => e.currentTarget.blur()} // Prevents scrolling in number inputs
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                        }
                    }}
                />
            )}
        </div>
    );
};

export default Input;
