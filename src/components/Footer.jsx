"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-white relative">
            {/* Violet Effect Background */}
            <div 
                className="absolute bottom-0 left-0 right-0 h-64 z-0"
                style={{
                    background: 'linear-gradient(to top, rgba(196, 181, 253, 0.3) 0%, rgba(221, 214, 254, 0.2) 50%, transparent 100%)'
                }}
            ></div>

            <div className="max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 lg:py-20 relative z-10">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 mb-12">
                    {/* First Column - Easy Pay Logo and Description */}
                    <div className="lg:w-1/4">
                        {/* Logo */}
                        <div className="mb-4">
                            <Logo className="justify-start" />
                        </div>
                        <p className="text-sm text-accent leading-relaxed">
                            Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.
                        </p>
                    </div>

                    {/* Gap area - 2nd and 3rd columns (empty space) */}
                    <div className="lg:flex-1"></div>

                    {/* Fourth and Fifth Columns - Short links and Other pages */}
                    <div className="lg:w-auto flex flex-col md:flex-row gap-12">
                        {/* Short links */}
                        <div>
                            <h4 className="text-base font-bold text-primary mb-4">Short links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#features" className="text-sm text-accent hover:text-primary transition-colors">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#how-it-works" className="text-sm text-accent hover:text-primary transition-colors">
                                        How it works
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#security" className="text-sm text-accent hover:text-primary transition-colors">
                                        Security
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#testimonial" className="text-sm text-accent hover:text-primary transition-colors">
                                        Testimonial
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Other pages */}
                        <div>
                            <h4 className="text-base font-bold text-primary mb-4">Other pages</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/privacy-policy" className="text-sm text-accent hover:text-primary transition-colors">
                                        Privacy policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-sm text-accent hover:text-primary transition-colors">
                                        Terms & conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/404" className="text-sm text-accent hover:text-primary transition-colors">
                                        404
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="border-t border-gray-200 pt-8 relative z-10">
                    <p className="text-center text-sm text-accent">
                        2024 ©Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
                    </p>
                </div>
            </div>
        </footer>
    );
}