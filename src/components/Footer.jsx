"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const linksSectionRef = useRef(null);
  const copyrightRef = useRef(null);

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
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(leftSectionRef.current, { opacity: 0, y: 30 });
      gsap.set(linksSectionRef.current, { opacity: 0, y: 30 });
      gsap.set(copyrightRef.current, { opacity: 0 });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      // Animate sections
      tl.to(leftSectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          linksSectionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          copyrightRef.current,
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-white overflow-hidden">
      {/* Enhanced Violet Gradient Effect */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <div className="relative w-full h-[200px]">
          {/* Main Violet Gradient */}
          <div className="absolute inset-0 from-violet-500/20 via-violet-400/10 to-transparent"></div>
          
          {/* Additional Glow Effects */}
          <div className="absolute bottom-0 left-1/4 w-1/2 h-32 bg-violet-400/15 blur-3xl rounded-full"></div>
          <div className="absolute bottom-4 left-1/3 w-1/3 h-24 bg-violet-300/10 blur-2xl rounded-full"></div>
          
          {/* Smooth Fade to White */}
          <div className="absolute inset-0 from-white via-white/70 to-transparent"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 md:px-8 pt-14 sm:pt-16 lg:pt-20 pb-5">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left Section */}
          <div ref={leftSectionRef} className="max-w-sm">
            <Logo className="justify-start mb-5" />
            <p className="text-base text-accent leading-relaxed">
              Easy Pay offers secure, seamless, and fee-free payments for effortless global
              transactions.
            </p>
          </div>

          {/* Right Section */}
          <div ref={linksSectionRef} className="flex flex-col sm:flex-row gap-12">
            {/* Short Links */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Short links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    onClick={(e) => handleSmoothScroll(e, 'features')}
                    className="text-base text-accent hover:text-secondary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                    className="text-base text-accent hover:text-secondary transition-colors"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    onClick={(e) => handleSmoothScroll(e, 'security')}
                    className="text-base text-accent hover:text-secondary transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                    className="text-base text-accent hover:text-secondary transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Other Pages */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Other pages</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleSmoothScroll(e, 'pricing')}
                    className="text-base text-accent hover:text-secondary transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                    className="text-base text-accent hover:text-secondary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-base text-accent hover:text-secondary transition-colors"
                  >
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - Fixed width and height */}
      <div ref={copyrightRef} className="relative z-10 ">
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