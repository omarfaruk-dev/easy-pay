"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Import brand logos
import brand1 from "../app/assets/brand-logo/brand-1.svg";
import brand2 from "../app/assets/brand-logo/brand-2.svg";
import brand3 from "../app/assets/brand-logo/brand-3.svg";
import brand4 from "../app/assets/brand-logo/brand-4.svg";
import brand5 from "../app/assets/brand-logo/brand-5.svg";
import brand6 from "../app/assets/brand-logo/brand-6.svg";

const brands = [
  { id: 1, logo: brand1, name: "Brand 1" },
  { id: 2, logo: brand2, name: "Brand 2" },
  { id: 3, logo: brand3, name: "Brand 3" },
  { id: 4, logo: brand4, name: "Brand 4" },
  { id: 5, logo: brand5, name: "Brand 5" },
  { id: 6, logo: brand6, name: "Brand 6" },
];

// Create more brands to fill white space by duplicating the original brands
const extendedBrands = [
  ...brands,
  ...brands.map(brand => ({ ...brand, id: `${brand.id}-copy1` })),
  ...brands.map(brand => ({ ...brand, id: `${brand.id}-copy2` })),
];

export default function FeaturedBrand() {
  return (
    <section className="pb-8 sm:pb-12 lg:pb-20">
        <div className="relative">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        direction="left"
      >
        {extendedBrands.map((brand) => (
          <div key={brand.id} className="mx-8 flex items-center justify-center">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={160}
              height={80}
              className={`opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 ${
                brand.id === 3 || brand.id === '3-copy1' || brand.id === '3-copy2' 
                  ? 'h-10 w-auto' 
                  : ''
              }`}
            />
          </div>
        ))}
      </Marquee>
    </div>
    </section>
  );
}
