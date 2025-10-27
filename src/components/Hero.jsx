'use client'
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Play, TrendingUp } from "lucide-react";
import Image from "next/image";
import heroBg from "@/app/assets/hero-bg.webp";
import heroImage from "@/app/assets/hero-img-man.png";
import avatar1 from "@/app/assets/Avatar-1.png";
import avatar2 from "@/app/assets/Avatar-2.png";
import avatar3 from "@/app/assets/Avatar-3.png";
import vectorLine from "@/app/assets/hero-vector-line.svg";
import playStore from "@/app/assets/icons/play-store.svg";
import appStore from "@/app/assets/icons/app-store.svg";
import Navbar from "./Navbar";
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const leftContentRef = useRef(null);
    const rightContentRef = useRef(null);
    const floatingCard1Ref = useRef(null);
    const floatingCard2Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(leftContentRef.current, { opacity: 0, y: 50 });
            gsap.set(rightContentRef.current, { opacity: 0, y: 50 });
            gsap.set(floatingCard1Ref.current, { opacity: 0, x: -50 });
            gsap.set(floatingCard2Ref.current, { opacity: 0, x: 50 });

            // Create timeline
            const tl = gsap.timeline({
                defaults: { ease: "power3.out", duration: 1 }
            });

            // Animate elements in sequence
            tl.to(leftContentRef.current, { opacity: 1, y: 0, duration: 1.2 })
              .to(rightContentRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.6")
              .to(floatingCard1Ref.current, { opacity: 1, x: 0, duration: 0.8 }, "-=0.4")
              .to(floatingCard2Ref.current, { opacity: 1, x: 0, duration: 0.8 }, "-=0.5");

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="h-fit mx-2 sm:mx-4 relative rounded-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Hero background"
                    fill
                    className="object-cover h-full w-full"
                    priority
                />
            </div>

            {/* Navbar */}
            <div>
                <Navbar />
            </div>

            {/* Content Overlay */}
            <div className="max-w-[1170px] mx-auto relative z-20 flex flex-col px-3 sm:px-4">
                {/* Hero Content */}
                <div className="container mx-auto pt-26 sm:pt-36 lg:pt-20 2xl:pt-30">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-0 tems-center">
                        {/* Left Content */}
                        <div ref={leftContentRef} className="flex flex-col text-center lg:text-left justify-center px-2 sm:px-0">
                            <p className="text-sm sm:text-lg md:text-xl lg:text-base uppercase font-bold text-general mb-2">Easy Payment</p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[50px] xl:text-6xl leading-8 sm:leading-12 md:leading-14 lg:leading-15 xl:leading-18 font-bold mb-4 sm:mb-6 text-primary relative">
                                <span className="relative inline-block">
                                    Pay fast and smarter
                                    <Image
                                        src={vectorLine}
                                        alt="Vector line"
                                        width={400}
                                        height={10}
                                        className="absolute right-0 -bottom-1 w-20 sm:w-32 lg:w-100 h-auto object-contain hidden sm:block"
                                    />
                                </span>
                                <br />
                                from anywhere
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-xl mb-6 sm:mb-8 text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Experience the future of payments: fast, secure, and tailored for the next generation&apos;s convenience and trust.
                            </p>

                            <div className="flex gap-4 lg:mb-12 text-center lg:text-left justify-center lg:justify-start">
                                {/* App Store Button */}
                                <a href="#" className="flex justify-center lg:justify-start">
                                    <Image
                                        src={appStore}
                                        alt="Download on App Store"
                                        width={150}
                                        height={50}
                                        className="hover:opacity-80 transition-opacity w-[120px] sm:w-[140px] lg:w-[150px] h-auto"
                                    />
                                </a>

                                {/* Google Play Button */}
                                <a href="#" className="flex justify-center lg:justify-start">
                                    <Image
                                        src={playStore}
                                        alt="Get it on Google Play"
                                        width={150}
                                        height={50}
                                        className="hover:opacity-80 transition-opacity w-[120px] sm:w-[140px] lg:w-[150px] h-auto"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Right Content - Hero Image */}
                        <div ref={rightContentRef} className="relative flex items-center justify-center h-full max-h-80 sm:max-h-[400px] md:max-h-[500px] lg:max-h-full">
                            <div className="relative sm:w-full h-full flex sm:items-end justify-center">
                                <Image
                                    src={heroImage}
                                    alt="Man using EasyPay app"
                                    className="h-full w-auto object-contain"
                                />
                            </div>

                            {/* Floating left Cards */}
                            <div ref={floatingCard1Ref} className="absolute bottom-2 left-0 sm:left-2 md:left-14 lg:-left-24 bg-white rounded-xl p-3.5 sm:p-4 lg:p-5 shadow-lg z-20">
                                <div className="">
                                    <div className="text-sx sm:text-base font-semibold text-primary">Payment Received</div>
                                    <div className="text-sm sm:text-lg font-bold text-secondary leading-6 -mt-1 sm:-,t-0 mb-0 sm:mb-2">+35,890.00</div>
                                    <div className="flex items-center justify-between gap-2 sm:gap-3 lg:gap-5">
                                        <div className="text-xs sm:text-sm text-accent">27th Oct, 2025</div>
                                        <div className="flex items-center gap-1 sm:gap-2">
                                            <span className="text-xs sm:text-sm font-medium text-success">3.09%</span>
                                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-success" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Avatar Group card*/}
                            <div ref={floatingCard2Ref} className="absolute bottom-26 sm:bottom-31 md:bottom-43 lg:bottom-44 xl:bottom-50 right-0 md:right-24 lg:right-0 bg-card rounded-xl p-3.5 sm:p-4 shadow-lg z-20">
                                <div className="flex items-center space-x-1 sm:space-x-2">
                                    <div className="flex -space-x-3 sm:-space-x-2">
                                        <Image
                                            src={avatar1}
                                            alt="User 1"
                                            width={32}
                                            height={32}
                                            className="rounded-full border-2 border-card w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8"
                                        />
                                        <Image
                                            src={avatar2}
                                            alt="User 2"
                                            width={32}
                                            height={32}
                                            className="rounded-full border-2 border-card w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8"
                                        />
                                        <Image
                                            src={avatar3}
                                            alt="User 3"
                                            width={32}
                                            height={32}
                                            className="rounded-full border-2 border-card w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8"
                                        />
                                    </div>
                                    <div >
                                        <div className="font-semibold text-xs sm:text-base text-primary leading-3 sm:leading-4">120k+ Users</div>
                                        <div className="text-[10px] sm:text-sm text-accent">Trust Active Users</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
