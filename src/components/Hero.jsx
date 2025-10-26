import React from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Play, TrendingUp } from "lucide-react";
import Image from "next/image";
import heroBg from "../app/assets/hero-bg.webp";
import heroImage from "../app/assets/man-wearing-t-shirt-gesturing.png";
import avatar1 from "../app/assets/Avatar-1.png";
import avatar2 from "../app/assets/Avatar-2.png";
import avatar3 from "../app/assets/Avatar-3.png";
import vectorLine from "../app/assets/hero-vector-line.svg";
import playStore from "../app/assets/icons/play-store.svg";
import appStore from "../app/assets/icons/app-store.svg";
import Navbar from "./Navbar";
const Hero = () => {
    return (
        <div className="h-[800px] sm:h-[900px] lg:h-[700px] mx-2 sm:mx-4 relative rounded-2xl overflow-hidden">
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
            <Navbar />

            {/* Content Overlay */}
            <div className="max-w-[1170px] mx-auto relative z-20 min-h-screen flex flex-col px-3 sm:px-4 md:px-6">
                {/* Hero Content */}
                <div className="container mx-auto pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center min-h-[500px] sm:min-h-[600px]">
                        {/* Left Content */}
                        <div className="flex flex-col text-center lg:text-left justify-center px-2 sm:px-0">
                            <p className="text-xs sm:text-sm uppercase font-bold text-accent mb-2">Easy Payment</p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-primary relative">
                                <span className="relative inline-block">
                                    Pay fast and smarter
                                    <Image
                                        src={vectorLine}
                                        alt="Vector line"
                                        width={400}
                                        height={10}
                                        className="absolute right-0 -bottom-2 w-20 sm:w-32 lg:w-100 h-auto object-contain hidden sm:block"
                                    />
                                </span>
                                <br />
                                from anywhere
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Experience the future of payments: fast, secure, and tailored for the next generation&apos;s convenience and trust.
                            </p>

                            <div className="flex gap-4 mb-12 text-center lg:text-left justify-center lg:justify-start">
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
                        <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
                            <div className="relative w-full h-full flex items-end justify-center">
                                <Image
                                    src={heroImage}
                                    alt="Man using EasyPay app"
                                    className="h-[650px] w-auto object-contain"
                                />
                            </div>

                            {/* Floating left Cards */}
                            <div className="absolute bottom-5 -left-2 sm:-left-8 lg:-left-12 bg-white rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg z-20">
                                <div className="">
                                    <div className="text-sm sm:text-base font-semibold text-primary">Payment Received</div>
                                    <div className="text-base sm:text-lg font-bold text-secondary mb-1 sm:mb-2">+35,890.00</div>
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
                            <div className="absolute right-0 md:right-30 lg:right-8 bg-card rounded-xl p-4 shadow-lg z-20">
                                <div className="flex items-center space-x-1 sm:space-x-2">
                                    <div className="flex -space-x-1 sm:-space-x-2">
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
                                    <div className="text-xs sm:text-sm">
                                        <div className="font-semibold text-sm sm:text-base text-primary">120k+ Users</div>
                                        <div className="text-xs text-accent">Trust Active Users</div>
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