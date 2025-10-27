"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import avatar1 from "../app/assets/Avatar-1.png";
import avatar2 from "../app/assets/Avatar-2.png";
import avatar3 from "../app/assets/Avatar-3.png";

const testimonials = [
    {
        id: 1,
        name: "Ethan Williams",
        role: "Digital Marketing Specialist",
        avatar: avatar1,
        text: "Monks Pay has revolutionized how we handle payments. The seamless integration and excellent support made our transition smooth and hassle-free.",
        rating: 5
    },
    {
        id: 2,
        name: "Daniel Thompson",
        role: "Product Designer",
        avatar: avatar2,
        text: "As a designer, I appreciate the clean interface and intuitive user experience. Monks Pay makes financial management effortless.",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah Miller",
        role: "Business Owner",
        avatar: avatar3,
        text: "The transparency and security features give me complete peace of mind. Highly recommend Monks Pay for any business.",
        rating: 5
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(2);
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = Math.max(0, testimonials.length - itemsPerView);
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
    }, [itemsPerView]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = Math.max(0, testimonials.length - itemsPerView);
            return prevIndex <= 0 ? maxIndex : prevIndex - 1;
        });
    }, [itemsPerView]);

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

    return (
        <section className="py-16 sm:py-20 lg:py-28 bg-accent/5">
            <div className="px-3 sm:px-4 md:px-6 lg:px-0 xl:pl-10 lg:ml-[2%] xl:ml-[10%]">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
                    {/* Left Side - Text Content */}
                    <div className="xl:-ml-30 2xl:ml-20 xl:px-20">
                        <SectionHeader
                            label="TESTIMONIAL"
                            title="We've build trust with reviews from real users"
                            align="center"
                            className="lg:text-left md:max-w-xl mx-auto"
                        />
                        <p className="text-base text-accent leading-relaxed text-center lg:text-left">
                            Boost your credibility by featuring genuine testimonials from real users, 
                            showcasing their positive experiences and satisfaction with Monks Pay services.
                        </p>
                        
                        {/* Navigation Arrows */}
                        <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                            <button 
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full flex items-center justify-center border border-primary hover:bg-primary hover:text-white transition-all"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button 
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full flex items-center justify-center border border-primary hover:bg-primary hover:text-white transition-all"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Testimonial Cards */}
                    <div className="flex gap-6 overflow-hidden mt-8 lg:mt-0">
                        {visibleTestimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-full min-w-[300px] lg:w-[calc(50%-12px)] bg-white rounded-2xl p-6 shadow-sm animate-fade-in flex flex-col"
                            >
                                {/* Stars Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-base text-accent leading-relaxed mb-6 grow">
                                    {testimonial.text}
                                </p>

                                {/* User Info */}
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}