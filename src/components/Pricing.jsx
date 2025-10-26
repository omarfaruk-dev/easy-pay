"use client";

import React from "react";
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
        buttonVariant: "outline",
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
        buttonVariant: "default",
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
        buttonVariant: "outline",
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
        <section className="pb-16 sm:pb-20 lg:pb-30 bg-white">
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
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative rounded-2xl p-6 sm:p-8 shadow-sm ${plan.isPopular
                                    ? "bg-primary text-primary-foreground shadow-lg border border-primary"
                                    : "bg-white border border-gray-200"
                                    }`}
                            >
                                {/* Plan Name */}
                                <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? "text-white" : "text-primary"}`}>
                                    {plan.name}
                                </h3>

                                {/* Subtitle */}
                                <p className={`text-sm mb-6 ${plan.isPopular ? "text-gray-300" : "text-muted-foreground"}`}>
                                    {plan.subtitle}
                                </p>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className={`text-4xl font-bold ${plan.isPopular ? "text-white" : "text-primary"}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-sm ${plan.isPopular ? "text-gray-300" : "text-muted-foreground"}`}>
                                        /month
                                    </span>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <Check
                                                className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 ${plan.isPopular
                                                    ? "bg-gray-600 text-white"
                                                    : "bg-secondary text-primary"
                                                    }`}
                                            />
                                            <span className={`text-sm ${plan.isPopular ? "text-gray-200" : "text-muted-foreground"}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <Button
                                    variant={plan.buttonVariant}
                                    className={`w-full ${plan.isPopular
                                        ? "bg-secondary hover:bg-secondary/90 text-white"
                                        : "border-gray-300"
                                        }`}
                                >
                                    {plan.buttonText}
                                </Button>
                            </div>
                        ))}
                    </div>


                                 </div>
                 
                 {/* Violet Effect Image - positioned under middle card */}
                 <div className="absolute h-100 w-100 mx-auto bottom-0 z-0">
                     <Image
                         src={violetEffect}
                         alt="Violet effect"
                         width={500}
                         height={300}
                         className="object-contain"
                     />
                 </div>
            </div>
        </section>
    );
}
