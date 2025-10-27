"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import securityBg from "../app/assets/security-bg.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const securityFeatures = [
  {
    id: 1,
    title: "Two-factor authentication",
    description: "Two-factor authentication ensures added protection by using verification steps.",
    dotColor: "bg-secondary",
    bgDotColor: "bg-secondary/10"
  },
  {
    id: 2,
    title: "Fraud detection and alerts",
    description: "Fraud detection safeguards your money, sending instant alerts for any activity.",
    dotColor: "bg-danger",
    bgDotColor: "bg-danger/10"
  },
  {
    id: 3,
    title: "Transaction notifications",
    description: "Instant notifications for transaction keep you informed to manage your finances.",
    dotColor: "bg-success",
    bgDotColor: "bg-success/10"
  },
  {
    id: 4,
    title: "Biometric access",
    description: "Easily and securely log in with biometric features, and facial recognition.",
    dotColor: "bg-tertiary",
    bgDotColor: "bg-tertiary/10"
  },
  {
    id: 5,
    title: "End-to-end encryption",
    description: "By encryption, protecting your data from unauthorized access.",
    dotColor: "bg-warning",
    bgDotColor: "bg-warning/10"
  },
  {
    id: 6,
    title: "24/7 Protection support",
    description: "Our dedicated team is available around the clock to help you.",
    dotColor: "bg-general",
    bgDotColor: "bg-general/10"
  }
];

export default function Security() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const featuresRef = useRef([]);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerRef.current, { opacity: 0, y: 30 });
      featuresRef.current.forEach((feature) => {
        if (feature) {
          gsap.set(feature, { opacity: 0, y: 50, scale: 0.9 });
        }
      });
      gsap.set(backgroundRef.current, { opacity: 0, scale: 1.1 });

      // Header animation
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Background image animation
      gsap.to(backgroundRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Features animation with stagger
      featuresRef.current.forEach((feature, index) => {
        if (feature) {
          gsap.to(feature, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
            delay: index * 0.1, // Stagger by 0.1s
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className=" py-16 sm:py-20 lg:py-30 bg-white">
      <div className="max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
          <div className="-mb-5 lg:mb-0">
            <SectionHeader 
              label="SECURITY"
              title="We protect your money at every step with Easy Pay"
              align="center"
              className="lg:text-left mb-5 md:max-w-xl mx-auto"
            />
          </div>
          <div className="flex items-center pb-5 md:pb-10 lg:pb-0">
            <p className="text-base text-accent leading-relaxed md:max-w-xl mx-auto md:text-center">
              Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
            </p>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div ref={backgroundRef} className="absolute inset-0 z-0">
            <Image
              src={securityBg}
              alt="Security background"
              fill
              className="object-cover h-full w-full opacity-40"
              priority
            />
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 p-6 sm:p-8 bg-accent/3 backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={feature.id} 
                  ref={(el) => (featuresRef.current[index] = el)}
                  className="relative"
                >
                  <div className="p-6">
                    <div className="flex flex-col">
                      <div className="relative flex items-center justify-start mb-4">
                        {/* Background dot - larger with less opacity */}
                        <div className={`w-7 h-7 rounded-full ${feature.bgDotColor} absolute -inset-2`}></div>
                        {/* Foreground dot - smaller solid */}
                        <div className={`w-3 h-3 rounded-full ${feature.dotColor} relative z-10`}></div>
                      </div>
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
                  
                  {/* Gradient lines for mobile devices after 1st, 2nd, 3rd, 4th, and 5th cards */}
                  {(index === 0 || index === 1 || index === 2 || index === 3 || index === 4) && (
                    <div className="block md:hidden absolute bottom-0 left-0 w-full h-0">
                      <div 
                        className="w-full h-px"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
                        }}
                      ></div>
                    </div>
                  )}
                  
                  {/* Gradient lines for md devices after 1st, 3rd, and 5th cards */}
                  {(index === 0 || index === 2 || index === 4) && (
                    <div className="hidden md:block lg:hidden absolute top-0 right-0 w-0 h-full">
                      <div 
                        className="w-[148px] h-px transform rotate-90 origin-left"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
                        }}
                      ></div>
                    </div>
                  )}
                  
                  {/* Gradient lines for lg devices after 1st, 2nd, 4th, and 5th cards */}
                  {(index === 0 || index === 1 || index === 3 || index === 4) && (
                    <div className="hidden lg:block absolute top-0 right-0 w-0 h-full">
                      <div 
                        className="w-[148px] h-px transform rotate-90 origin-left"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
