"use client";

import React from "react";
import instantPaymentIcon from "../app/assets/icons/Instant-payments.svg";
import noHiddenFeesIcon from "../app/assets/icons/no-hidden-fees.svg";
import digitalWalletIcon from "../app/assets/icons/digital-wallet.svg";
import secureTransactionsIcon from "../app/assets/icons/secure-transactions.svg";
import Image from "next/image";

/* Make sure Tailwind sees these bg classes (they appear literally here) */
/* bg-[#F3F7FF] bg-[#FBF5EE] bg-[#EEF9FF] bg-[#F6EDFF] */

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
    bg: "bg-tertiary/20",
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
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-sm font-semibold text-[#8B5CF6] tracking-wide">FEATURES</p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] leading-tight">
            Why choose Easy Pay for <br className="hidden md:block" />
            effortless payments?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((f) => {
            // build classes with a stable base string + literal bg class from data
            const cardClass = `flex flex-col items-center text-center rounded-xl p-6 sm:p-8 shadow-sm ${f.bg} border border-transparent hover:shadow-lg transition-shadow duration-200`;
            return (
              <div key={f.id} className={cardClass}>
                <div className="mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center">
                    <div className="text-[#0f172a]">{f.icon}</div>
                  </div>
                </div>

                <h3 className="sm:text-lg  md:text-[20px] font-bold text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-accent">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
