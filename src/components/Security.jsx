"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import securityBg from "../app/assets/security-bg.webp";

const securityFeatures = [
  {
    id: 1,
    title: "Two-factor authentication",
    description: "Two-factor authentication ensures added protection by using verification steps.",
    dotColor: "bg-blue-500"
  },
  {
    id: 2,
    title: "Fraud detection and alerts",
    description: "Fraud detection safeguards your money, sending instant alerts for any activity.",
    dotColor: "bg-red-500"
  },
  {
    id: 3,
    title: "Transaction notifications",
    description: "Instant notifications for transaction keep you informed to manage your finances.",
    dotColor: "bg-green-500"
  },
  {
    id: 4,
    title: "Biometric access",
    description: "Easily and securely log in with biometric features, and facial recognition.",
    dotColor: "bg-blue-400"
  },
  {
    id: 5,
    title: "End-to-end encryption",
    description: "By encryption, protecting your data from unauthorized access.",
    dotColor: "bg-orange-500"
  },
  {
    id: 6,
    title: "24/7 Protection support",
    description: "Our dedicated team is available around the clock to help you.",
    dotColor: "bg-purple-500"
  }
];

export default function Security() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <SectionHeader 
              label="SECURITY"
              title="We protect your money at every step with Easy Pay"
              align="left"
            />
          </div>
          <div className="flex items-center">
            <p className="text-base text-muted-foreground leading-relaxed">
              Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
            </p>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={securityBg}
              alt="Security background"
              fill
              className="object-cover h-full w-full"
              priority
            />
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 p-6 sm:p-8 bg-accent/10 backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature) => (
                <div key={feature.id} className=" p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full ${feature.dotColor} mt-2 flex-shrink-0`}></div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
