"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import instantPaymentIcon from "../app/assets/icons/Instant-payments.svg";
import noHiddenFeesIcon from "../app/assets/icons/no-hidden-fees.svg";
import digitalWalletIcon from "../app/assets/icons/digital-wallet.svg";
import secureTransactionsIcon from "../app/assets/icons/secure-transactions.svg";

gsap.registerPlugin(ScrollTrigger);


const features = [
  {
    id: 1,
    title: "Instant payments",
    text: "Send money to friends or family in real-time, for free.",
    icon: <Image src={instantPaymentIcon} alt="Instant payment" width={60} height={60} />,
    bg: "bg-secondary/10",
  },
  {
    id: 2,
    title: "No hidden fees",
    text: "Clear and simple pricing. Always be aware of your costs.",
    icon: <Image src={noHiddenFeesIcon} alt="No hidden fees" width={60} height={60} />,
    bg: "bg-warning/10",
  },
  {
    id: 3,
    title: "Digital wallet",
    text: "Store money securely and make fast transfers or purchases.",
    icon: <Image src={digitalWalletIcon} alt="Digital wallet" width={60} height={60} />,
    bg: "bg-tertiary/10",
  },
  {
    id: 4,
    title: "Secure transactions",
    text: "End-to-end encryption for all transactions.",
    icon: <Image src={secureTransactionsIcon} alt="Secure transactions" width={60} height={60} />,
    bg: "bg-general/20",
  },
];

export default function Features() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for all cards
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.set(card, { opacity: 0, y: 50, scale: 0.9 });
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
            delay: index * 0.15, // Stagger animation by 0.15s
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-15 sm:pt-20 lg:pt-30 pb-10 md:pb-15 lg:pb-18 bg-white">
      <div className="max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div ref={headerRef}>
          <SectionHeader
            label="FEATURES"
            title={
              <>
                Why choose Easy Pay for <br className="hidden md:block" />
                effortless payments?
              </>
            }
            align="center"
          />
        </div>

        {/* Cards Grid */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-6
            justify-center
            items-center
          "
        >
          <div className="flex flex-col xl:flex-row items-center text-center gap-6">
            {features.slice(0, 2).map((f, index) => {
              const cardClass = `
              flex flex-col items-center text-center
              rounded-2xl ${f.bg}
              w-[274px] h-[244px]
              py-8 px-4 gap-6
            `;
              return (
                <div
                  key={f.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={cardClass}
                >
                  <div>{f.icon}</div>
                  <div>
                    <h3 className="text-[20px] font-bold text-primary mb-2">
                      {f.title}
                    </h3>
                    <p className="text-base text-accent leading-snug">
                      {f.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>


          <div className="flex flex-col xl:flex-row items-center text-center gap-6">
            {features.slice(2, 4).map((f, index) => {
              const cardClass = `
              flex flex-col items-center text-center
              rounded-2xl ${f.bg}
              w-[274px] h-[244px] 
              py-8 px-4 gap-6
            `;
              return (
                <div
                  key={f.id}
                  ref={(el) => (cardsRef.current[index + 2] = el)}
                  className={cardClass}
                >
                  <div>{f.icon}</div>
                  <div>
                    <h3 className="text-[20px] font-bold text-primary mb-2">
                      {f.title}
                    </h3>
                    <p className="text-base text-accent leading-snug">
                      {f.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
}