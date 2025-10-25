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
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0"></div>
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Content Overlay */}
            <div className="relative z-20 min-h-screen flex flex-col">
                {/* Hero Content */}
                <div className="container mx-auto px-6 pt-24 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-primary-foreground">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Make Payments
                                <span className="block text-accent-foreground">Easy & Secure</span>
                            </h1>
                            <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                                Experience the future of digital payments with our cutting-edge fintech platform. 
                                Send money, pay bills, and manage your finances with just a few taps.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
                                    <Play className="mr-2" />
                                    Get Started
                                </Button>
                                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
                                    <Apple className="mr-2" />
                                    Download App
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center space-x-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent-foreground">1M+</div>
                                    <div className="text-sm text-muted-foreground">Active Users</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent-foreground">$50B+</div>
                                    <div className="text-sm text-muted-foreground">Transactions</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent-foreground">99.9%</div>
                                    <div className="text-sm text-muted-foreground">Uptime</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Hero Image */}
                        <div className="relative">
                            <div className="relative z-10">
                                <Image
                                    src={heroImage}
                                    alt="Man using EasyPay app"
                                    width={500}
                                    height={600}
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                            
                            {/* Floating Cards */}
                            <div className="absolute -top-4 -left-4 bg-card rounded-xl p-4 shadow-lg z-20 border">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-accent-foreground" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-card-foreground">+$2,500</div>
                                        <div className="text-xs text-muted-foreground">This month</div>
                                    </div>
                                </div>
                            </div>

                            {/* Avatar Group */}
                            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg z-20 border">
                                <div className="flex items-center space-x-2">
                                    <div className="flex -space-x-2">
                                        <Image
                                            src={avatar1}
                                            alt="User 1"
                                            width={32}
                                            height={32}
                                            className="rounded-full border-2 border-card"
                                        />
                                        <Image
                                            src={avatar2}
                                            alt="User 2"
                                            width={32}
                                            height={32}
                                            className="rounded-full border-2 border-card"
                                        />
                                        <Image
                                            src={avatar3}
                                            alt="User 3"
                                            width={32}
                                            height={32}
                                            className="rounded-full border-2 border-card"
                                        />
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-semibold text-card-foreground">120k+ Users</div>
                                        <div className="text-xs text-muted-foreground">Trust Active Users</div>
                                    </div>
                                </div>
                            </div>

                            {/* Vector Line */}
                            <div className="absolute top-1/2 -left-8 z-10">
                                <Image
                                    src={vectorLine}
                                    alt="Vector line"
                                    width={100}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;