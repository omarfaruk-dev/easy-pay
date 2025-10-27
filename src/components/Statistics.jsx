"use client";
import React, { useEffect, useRef } from "react";
import { Users, DollarSign, TrendingUp, Globe } from "lucide-react";
import SectionHeader from "./SectionHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statistics = [
  {
    id: 1,
    icon: Users,
    number: "5M+",
    label: "Active Users",
    description: "Trusted by millions worldwide",
    bg: "bg-secondary/10",
  },
  {
    id: 2,
    icon: DollarSign,
    number: "$2B+",
    label: "Transaction Volume",
    description: "Processed securely every month",
    bg: "bg-success/10",
  },
  {
    id: 3,
    icon: TrendingUp,
    number: "99.9%",
    label: "Uptime",
    description: "Industry-leading reliability",
    bg: "bg-warning/10",
  },
  {
    id: 4,
    icon: Globe,
    number: "150+",
    label: "Countries",
    description: "Available globally",
    bg: "bg-tertiary/10",
  },
];

const Statistics = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for all cards
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.set(card, { opacity: 0, y: 60, scale: 0.95 });
        }
      });

      // Set initial state for header
      gsap.set(headerRef.current, { opacity: 0, y: 30 });

      // Create timeline for header
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      headerTl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate cards with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
            delay: index * 0.1, // Stagger animation by 0.1s
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 bg-accent/5">
      <div className="max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div ref={headerRef}>
          <SectionHeader
            label="OUR ACHIEVEMENTS"
            title={
              <>
                Trusted by millions to power their
                <br className="hidden md:block" />
                digital payments
              </>
            }
            align="center"
          />
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`${stat.bg} rounded-2xl p-8 text-center`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Number */}
                <h3 className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="text-lg font-semibold text-primary mb-2">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-sm text-accent leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

