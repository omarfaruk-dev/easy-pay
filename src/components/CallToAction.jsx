"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import callToActionImg from '../app/assets/call-to-action.webp';

export default function CallToAction() {
    return (
        <section className="py-16 sm:py-20 lg:py-30 px-3 sm:px-4 md:px-6">
            <div className="max-w-[1170px] mx-auto relative rounded-3xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={callToActionImg}
                        alt="Call to action background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Dark Overlay */}
                <div 
                    className="absolute inset-0"
                    style={{ background: 'rgba(0, 0, 0, 0.7)' }}
                ></div>

                {/* Content */}
                <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 text-center">
                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
                        Ready to experience seamless<br />
                        secure payments globally
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Ready for hassle-free, secure payments anywhere in the world? Start using Monks
                        Pay today! It&apos;s fast, free, and focused on keeping your transactions secure!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button variant="default" className="w-full sm:w-auto px-8 py-6 text-base">
                            Download the App
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-white border-white hover:bg-white hover:text-primary">
                            Get Started Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}