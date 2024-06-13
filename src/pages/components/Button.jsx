
import React, { useContext } from "react";

const Button = ({ customClass, disabled, type, icon, label, ...rest }) => {


    

    return (
        <>
            <button
                type={type}
                {...rest}
                className={`${customClass} ${disabled ? " bg-[#374151] opacity-40 pointer-events-none " : ""} font-nunito border border-teal-500 shadow-inner shadow-gray-500 flex items-center gap-2 text-white text-lg font-medium   ml-1  rounded-full px-5 py-2.5   `}
            >
                {icon}
                {label}
            </button>
        </>
    );
};

export default Button;