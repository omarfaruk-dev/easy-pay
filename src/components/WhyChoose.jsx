"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

import instantPaymentIcon from "../app/assets/icons/Instant-payments.svg";
import noHiddenFeesIcon from "../app/assets/icons/no-hidden-fees.svg";
import digitalWalletIcon from "../app/assets/icons/digital-wallet.svg";
import secureTransactionsIcon from "../app/assets/icons/secure-transactions.svg";


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

export default function WhyChoose() {
  return (
    <section className="pt-15 sm:pt-20 lg:pt-30 pb-10 md:pb-15 lg:pb-18 bg-white">
      <div className="max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
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

        {/* Cards Grid */}
        <div
          className="
            grid grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-6 
            justify-items-center
          "
        >
          {features.map((f) => {
            const cardClass = `
              flex flex-col items-center text-center
              rounded-2xl ${f.bg}
              w-[274px] h-[244px] lg:w-auto
              py-8 px-4 gap-6
            `;
            return (
              <div key={f.id} className={cardClass}>
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
    </section>
  );
}
