"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Enhanced Violet Gradient Effect */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <div className="relative w-full h-[200px]">
          {/* Main Violet Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 via-violet-400/10 to-transparent"></div>
          
          {/* Additional Glow Effects */}
          <div className="absolute bottom-0 left-1/4 w-1/2 h-32 bg-violet-400/15 blur-3xl rounded-full"></div>
          <div className="absolute bottom-4 left-1/3 w-1/3 h-24 bg-violet-300/10 blur-2xl rounded-full"></div>
          
          {/* Smooth Fade to White */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left Section */}
          <div className="max-w-sm">
            <Logo className="justify-start mb-5" />
            <p className="text-base text-accent leading-relaxed">
              Easy Pay offers secure, seamless, and fee-free payments for effortless global
              transactions.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Short Links */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Short links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#features"
                    className="text-base text-accent hover:text-general transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-base text-accent hover:text-general transition-colors"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#security"
                    className="text-base text-accent hover:text-general transition-colors"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonial"
                    className="text-base text-accent hover:text-general transition-colors"
                  >
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>

            {/* Other Pages */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Other pages</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-base text-accent hover:text-general transition-colors"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-base text-accent hover:text-general transition-colors"
                  >
                    Terms & conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="text-base text-accent hover:text-general transition-colors"
                  >
                    404
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - Fixed width and height */}
      <div className="relative z-10 ">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 md:px-8 border-t border-gray-200">
          <div className="h-[50px] flex items-center justify-center backdrop-blur-md">
            <p className="text-center text-sm text-accent">
              2025 © Easy Pay. All rights reserved. Developed by <a href="https://omarfaruk-dev.web.app" target="_blank" className="text-general hover:text-primary transition-colors">Omar Faruk</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}