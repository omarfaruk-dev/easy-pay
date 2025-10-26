import React from 'react';
import downloadIcon from "../app/assets/icons/download.svg";
import cardIcon from "../app/assets/icons/card.svg";
import startPayIcon from "../app/assets/icons/start-paying.svg";
import howItWorksImg from "../app/assets/how-it-works-image.webp";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";

const steps = [
    {
        id: 1,
        number: "01",
        icon: downloadIcon,
        title: "Download Easy Pay",
        description: "Get the Easy Pay app today from the App Store or Google Play hassle free."
    },
    {
        id: 2,
        number: "02",
        icon: cardIcon,
        title: "Link your bank or card",
        description: "Easily connect your account in seconds with advanced security for peace of mind."
    },
    {
        id: 3,
        number: "03",
        icon: startPayIcon,
        title: "Start paying",
        description: "Easily split bills, send money to friends, and make smooth online payments instantly."
    }
];

const HowItWorks = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-28 bg-accent/5">
            <div className="max-w-[1170px] mx-auto">
                <div className="px-3 sm:px-4 md:px-6">
                    {/* Header Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
                        <div className="-mb-5 lg:mb-0">
                            <SectionHeader
                                label="HOW IT WORKS"
                                title="Make payments, transfers, and more in 3 simple steps"
                                align="center"
                                className="lg:text-left mb-5 md:max-w-xl mx-auto"
                            />
                        </div>
                        <div className="flex items-center pb-5 md:pb-10 lg:pb-0">
                            <p className="text-base text-accent leading-relaxed md:max-w-xl mx-auto md:text-center">
                                <Button variant="default">
                                    Get Started Now
                                </Button>
                            </p>
                        </div>
                    </div>

                    {/* Steps Grid */}
                    <div className="bg-white px-6 py-6 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-16">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative">
                                <div className="text-left">
                                    {/* Step Number */}
                                    <div className="px-10 py-6">
                                        <div className="text-7xl font-bold text-primary/10 mb-4">
                                            {step.number}
                                        </div>

                                        {/* Icon */}
                                        <div className="w-16 h-16 flex items-center justify-center relative -top-12">
                                            <Image
                                                src={step.icon}
                                                alt={step.title}
                                                width={48}
                                                height={48}
                                            />
                                        </div>

                                        <div className="-mt-10 lg:-mt-6">
                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-primary">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-base text-accent leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Vertical separator line for md+ */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-8 w-px h-32 bg-gray-200 transform -translate-y-1/2"></div>
                                )}
                                
                                {/* Horizontal separator line for mobile */}
                                {index < steps.length - 1 && (
                                    <div className="block md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Image Section */}
                <div className="w-full h-96 lg:h-[500px] relative">
                    <Image
                        src={howItWorksImg}
                        alt="Man using Easy Pay app"
                        fill
                        className="object-cover px-5 rounded-3xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;