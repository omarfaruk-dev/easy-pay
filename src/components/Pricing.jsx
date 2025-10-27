"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import SectionHeader from "./SectionHeader";
import violetEffect from "../app/assets/violet-effect.svg";
import Image from "next/image";

const plans = [
    {
        id: 1,
        name: "Free Plan",
        subtitle: "Free for personal payments.",
        price: "$0",
        buttonText: "Get Free Plan",
        isPopular: false,
        features: [
            "Up to 100 transections per month",
            "Basic proud protection",
            "Email support"
        ]
    },
    {
        id: 2,
        name: "Advanced",
        subtitle: "Minimal fees for advanced transactions",
        price: "$19",
        buttonText: "Get Advanced Plan",
        isPopular: true,
        features: [
            "Up to 1000 transections per month",
            "Advanced proud protection",
            "Detailed transaction reports",
            "Priority email & chat support"
        ]
    },
    {
        id: 3,
        name: "Business",
        subtitle: "Premium business transactions",
        price: "$29",
        buttonText: "Get Business Plan",
        isPopular: false,
        features: [
            "Unlimited transections per month",
            "Premium proud protection",
            "Detailed transaction reports",
            "Priority email & chat support"
        ]
    }
];

export default function Pricing() {
    return (
        <section className="relative pb-16 sm:pb-20 lg:pb-30 bg-white">
            <div className="relative max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6">
                {/* Header */}
                <SectionHeader
                    label="PRICING"
                    title={
                        <>
                            Simple transparent pricing <br className="hidden md:block" />
                            no hidden fees
                        </>
                    }
                    align="center"
                />

                {/* Pricing Cards */}
                <div className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative z-10 flex flex-col rounded-2xl p-6 sm:p-8 h-full ${plan.isPopular
                                    ? "bg-primary text-primary-foreground border border-primary"
                                    : "bg-white border border-gray-200"
                                    }`}
                            >
                                {/* Plan Name */}
                                <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? "text-white" : "text-primary"}`}>
                                    {plan.name}
                                </h3>

                                {/* Subtitle */}
                                <p className={`text-base mb-6 ${plan.isPopular ? "text-gray-300" : "text-accent"}`}>
                                    {plan.subtitle}
                                </p>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className={`text-4xl font-bold ${plan.isPopular ? "text-white" : "text-primary"}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-sm ${plan.isPopular ? "text-gray-300" : "text-accent"}`}>
                                        /month
                                    </span>
                                </div>

                                {/* Gradient Border */}
                                <div className="w-full h-px mb-6"
                                    style={{
                                        background: plan.isPopular
                                            ? 'linear-gradient(90deg, rgba(39, 39, 39, 0.7) 0%, #505050 45.36%, rgba(39, 39, 39, 0.7) 100%)'
                                            : 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                                    }}
                                ></div>

                                {/* Features List */}
                                <ul className="space-y-3 mb-8 grow">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <Check
                                                className={`w-5 h-5 p-0.5 rounded-full shrink-0 mt-0.5 ${plan.isPopular
                                                    ? "bg-accent text-white"
                                                    : "bg-secondary/10 text-secondary"
                                                    }`}
                                            />
                                            <span className={`text-sm ${plan.isPopular ? "text-gray-200" : "text-accent"}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <Button
                                    variant={plan.isPopular ? "default" : "outline"}
                                    className="w-full mt-auto"
                                >
                                    {plan.buttonText}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Violet Effect Background */}
            <div className="absolute bottom-4/12 lg:-bottom-40 xl:-bottom-30 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <Image
                    src={violetEffect}
                    alt="Violet effect"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                />
            </div>
        </section>
    );
}
