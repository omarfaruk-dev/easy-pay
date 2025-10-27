"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll function
    const handleSmoothScroll = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100; // Account for fixed navbar with extra spacing
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false); // Close mobile menu after click
    };

    return (
        <div className="">
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/95 backdrop-blur-md border-b border-border'
                : 'bg-transparent'
                }`}>
                <div className="max-w-[1170px] mx-auto px-4 py-1 md:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Logo onClick={(e) => handleSmoothScroll(e, 'hero')} />

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a 
                                href="#features" 
                                onClick={(e) => handleSmoothScroll(e, 'features')}
                                className="text-accent text-lg hover:text-secondary transition-colors"
                            >
                                Features
                            </a>
                            <a 
                                href="#how-it-works" 
                                onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                                className="text-accent text-lg hover:text-secondary transition-colors"
                            >
                                How It Works
                            </a>
                            <a 
                                href="#security" 
                                onClick={(e) => handleSmoothScroll(e, 'security')}
                                className="text-accent text-lg hover:text-secondary transition-colors"
                            >
                                Security
                            </a>
                            <a 
                                href="#pricing" 
                                onClick={(e) => handleSmoothScroll(e, 'pricing')}
                                className="text-accent text-lg hover:text-secondary transition-colors"
                            >
                                Pricing
                            </a>
                        </div>

                        {/* Desktop Contact Us Button */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Button 
                                variant="default"
                                onClick={(e) => handleSmoothScroll(e, 'contact')}
                            >
                                Contact Us
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 text-primary" />
                            ) : (
                                <Menu className="h-6 w-6 text-primary" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Mobile Menu Panel */}
                <div className={`absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-background shadow-2xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between px-6 py-3 border-b border-border">
                            <Logo onClick={(e) => handleSmoothScroll(e, 'hero')} />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 hover:bg-accent rounded-full transition-colors"
                            >
                                <X className="h-6 w-6 text-primary" />
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="flex-1 px-6 py-8">
                            <nav className="space-y-6">
                                <a
                                    href="#features"
                                    onClick={(e) => handleSmoothScroll(e, 'features')}
                                    className="block text-accent text-lg font-medium hover:text-secondary transition-colors border-b border-border pb-4"
                                >
                                    Features
                                </a>
                                <a
                                    href="#how-it-works"
                                    onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                                    className="block text-accent text-lg font-medium hover:text-secondary transition-colors border-b border-border pb-4"
                                >
                                    How It Works
                                </a>
                                <a
                                    href="#security"
                                    onClick={(e) => handleSmoothScroll(e, 'security')}
                                    className="block text-accent text-lg font-medium hover:text-secondary transition-colors border-b border-border pb-4"
                                >
                                    Security
                                </a>
                                <a
                                    href="#pricing"
                                    onClick={(e) => handleSmoothScroll(e, 'pricing')}
                                    className="block text-accent text-lg font-medium hover:text-secondary transition-colors border-b border-border pb-4"
                                >
                                    Pricing
                                </a>
                                {/* Mobile CTA Button */}
                                <Button
                                    variant="default"
                                    className="w-full"
                                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                                >
                                    Contact Us
                                </Button>
                            </nav>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

