"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import callToActionImg from '../app/assets/call-to-action.webp';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(contentRef.current, { opacity: 0, y: 50 });
            gsap.set(headingRef.current, { opacity: 0, y: 30 });
            gsap.set(descriptionRef.current, { opacity: 0, y: 30 });
            gsap.set(buttonsRef.current, { opacity: 0, y: 30 });

            // Create timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            // Animate content
            tl.to(contentRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
              .to(headingRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
              .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
              .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="pt-16 sm:pt-20 lg:pt-30">
            <div className="max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6">
            <div className="relative rounded-3xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={callToActionImg}
                        alt="Call to action background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Dark Overlay */}
                <div 
                    className="absolute inset-0"
                    style={{ background: 'rgba(0, 0, 0, 0.7)' }}
                ></div>

                {/* Content */}
                <div ref={contentRef} className="relative z-10 px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 text-center">
                    {/* Main Heading */}
                    <h2 ref={headingRef} className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
                        Ready to experience seamless<br />
                        secure payments globally
                    </h2>

                    {/* Description */}
                    <p ref={descriptionRef} className="text-base sm:text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Ready for hassle-free, secure payments anywhere in the world? Start using Monks
                        Pay today! It&apos;s fast, free, and focused on keeping your transactions secure!
                    </p>

                    {/* CTA Buttons */}
                    <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button variant="default" className="w-full sm:w-auto px-8 py-6 text-base">
                            Download the App
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-white border-white hover:bg-white hover:text-primary">
                            Get Started Now
                        </Button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}