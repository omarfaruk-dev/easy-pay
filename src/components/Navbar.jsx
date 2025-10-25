"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../app/assets/logo.svg";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-background/95 backdrop-blur-md border-b border-border' 
                : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image
                            src={logo}
                            alt="EasyPay Logo"
                            width={40}
                            height={40}
                        />
                        <span className="text-2xl font-bold text-foreground">Easy Pay</span>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-foreground text-lg hover:text-secondary transition-colors">Home</a>
                        <a href="#" className="text-foreground text-lg hover:text-secondary transition-colors">Features</a>
                        <a href="#" className="text-foreground text-lg hover:text-secondary transition-colors">About</a>
                        <a href="#" className="text-foreground text-lg hover:text-secondary transition-colors">Contact</a>
                    </div>
                    
                    {/* Contact Us Button */}
                    <div className="flex items-center space-x-4">
                        <Button 
                            variant="default" 
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

