'use client';

import React, { useEffect, useRef } from 'react';
import { Home, ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import gsap from 'gsap';

export default function NotFound() {
    const containerRef = useRef(null);
    const numberRef = useRef(null);
    const contentRef = useRef(null);
    const iconRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(numberRef.current, { opacity: 0, scale: 0.5 });
            gsap.set(contentRef.current, { opacity: 0, y: 30 });
            gsap.set(iconRef.current, { opacity: 0, scale: 0.8 });
            gsap.set(buttonsRef.current, { opacity: 0, y: 20 });

            // Create timeline
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" }
            });

            tl.to(numberRef.current, { opacity: 1, scale: 1, duration: 0.8 })
              .to(contentRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
              .to(iconRef.current, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.6")
              .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-linear-to-br from-background via-accent/5 to-background flex flex-col items-center justify-center px-4">
            {/* Content */}
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Number */}
                <div ref={numberRef} className="mb-8">
                    <h1 className="text-9xl sm:text-[180px] font-bold text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <div ref={contentRef} className="mb-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg sm:text-xl text-accent leading-relaxed">
                        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                    <p className="text-base sm:text-lg text-accent mt-4">
                        Let&apos;s get you back to making payments with EasyPay
                    </p>
                </div>

                {/* Icon */}
                <div ref={iconRef} className="mb-12 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-secondary/10 flex items-center justify-center">
                        <CreditCard className="w-16 h-16 text-secondary" />
                    </div>
                </div>

                {/* Action Buttons */}
                <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        onClick={() => window.location.href = '/'}
                        className="w-full sm:w-auto px-8 py-6 text-lg flex items-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Go to Homepage
                    </Button>
                    <Button
                        onClick={() => window.history.back()}
                        variant="outline"
                        className="w-full sm:w-auto px-8 py-6 text-lg flex items-center gap-2"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </Button>
                </div>

                {/* Helpful Links */}
                <div className="mt-16 pt-8 border-t border-border">
                    <p className="text-base text-accent mb-6">Or explore these pages:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/#features"
                            className="text-accent hover:text-secondary transition-colors"
                        >
                            Features
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link
                            href="/#pricing"
                            className="text-accent hover:text-secondary transition-colors"
                        >
                            Pricing
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link
                            href="/#how-it-works"
                            className="text-accent hover:text-secondary transition-colors"
                        >
                            How It Works
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link
                            href="/#security"
                            className="text-accent hover:text-secondary transition-colors"
                        >
                            Security
                        </Link>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 bg-primary/5 rounded-2xl">
                    <p className="text-sm text-accent leading-relaxed">
                        <strong className="text-primary">Need help?</strong> Contact our support team or visit our Help Center.
                    </p>
                </div>
            </div>
        </div>
    );
}

