import React from 'react';
import Image from "next/image";
import logo from "../app/assets/easy-pay-logo.svg";

const Logo = ({ className = "", onClick }) => {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <a 
                href="#hero" 
                onClick={onClick}
                className="cursor-pointer"
            >
                <div className="flex items-center justify-center">
                    <Image
                        src={logo}
                        alt="EasyPay Logo"
                        width={150}
                        height={100}
                    />
                </div>
            </a>
        </div>
    );
};

export default Logo;
