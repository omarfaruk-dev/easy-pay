'use client';

import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionHeader from "./SectionHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);
    const cardsRef = useRef([]);

    const contactInfo = [
        {
            id: 1,
            icon: Mail,
            title: "Email Us",
            description: "Send us an email anytime",
            value: "support@easypay.com",
            bg: "bg-primary/10",
        },
        {
            id: 2,
            icon: Phone,
            title: "Call Us",
            description: "Mon-Fri from 8am to 5pm",
            value: "+1 (555) 123-4567",
            bg: "bg-secondary/10",
        },
        {
            id: 3,
            icon: MapPin,
            title: "Visit Us",
            description: "Come say hello at our office",
            value: "123 Financial St, New York",
            bg: "bg-success/10",
        },
        {
            id: 4,
            icon: Clock,
            title: "Business Hours",
            description: "We're here to help you",
            value: "Mon-Fri: 8am-5pm EST",
            bg: "bg-warning/10",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(headerRef.current, { opacity: 0, y: 30 });
            gsap.set(formRef.current, { opacity: 0, x: -50 });
            gsap.set(infoRef.current, { opacity: 0, x: 50 });

            cardsRef.current.forEach((card) => {
                if (card) {
                    gsap.set(card, { opacity: 0, y: 60, scale: 0.95 });
                }
            });

            // Create timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            tl.to(headerRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            })
            .to(formRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
            }, "-=0.4")
            .to(infoRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
            }, "-=0.6")
            .to(cardsRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.1,
            }, "-=0.4");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="pt-16 sm:pt-20 lg:pt-30 bg-white">
            <div className="max-w-[1170px] mx-auto px-3 sm:px-4 md:px-6">
                {/* Header */}
                <div ref={headerRef}>
                    <SectionHeader
                        label="GET IN TOUCH"
                        title={
                            <>
                                Ready to get started?
                                <br className="hidden md:block" />
                                Let&apos;s talk about your needs
                            </>
                        }
                        align="center"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 md:mt-16">
                    {/* Contact Form */}
                    <div ref={formRef} className="flex flex-col h-full">
                        <div className="bg-accent/5 rounded-2xl p-8 flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Send us a message</h3>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-accent">
                                            First Name
                                        </label>
                                        <Input
                                            type="text"
                                            id="firstName"
                                            placeholder="John"
                                            className="h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-accent">
                                            Last Name
                                        </label>
                                        <Input
                                            type="text"
                                            id="lastName"
                                            placeholder="Doe"
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-accent">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-accent">
                                        Phone Number
                                    </label>
                                    <Input
                                        type="tel"
                                        id="phone"
                                        placeholder="+1 (555) 123-4567"
                                        className="h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-accent">
                                        Subject
                                    </label>
                                    <Select>
                                        <SelectTrigger className="h-12">
                                            <SelectValue placeholder="Select a subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="general">General Inquiry</SelectItem>
                                            <SelectItem value="support">Technical Support</SelectItem>
                                            <SelectItem value="sales">Sales Question</SelectItem>
                                            <SelectItem value="partnership">Partnership</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-accent">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project or question..."
                                        className="min-h-[120px] resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full py-6 text-lg flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div ref={infoRef} className="flex flex-col h-full">
                        <div className="bg-accent/5 rounded-2xl p-8 flex-1">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-primary mb-3">Get in Touch</h3>
                                <p className="text-accent leading-relaxed text-sm">
                                    Ready to streamline your payments? Contact us for personalized solutions.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <div
                                            key={info.id}
                                            ref={(el) => (cardsRef.current[index] = el)}
                                            className={`${info.bg} rounded-xl p-4 text-center`}
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center mb-3">
                                                    <Icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <h4 className="text-base font-semibold text-primary mb-1">
                                                    {info.title}
                                                </h4>
                                                <p className="text-xs text-accent mb-2">
                                                    {info.description}
                                                </p>
                                                <p className="text-sm font-medium text-primary">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Why Choose EasyPay */}
                            <div className="bg-primary/5 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-primary mb-4 text-center">
                                    Why Choose EasyPay?
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span className="text-sm text-accent">Bank-level security & encryption</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span className="text-sm text-accent">24/7 customer support</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span className="text-sm text-accent">Fast & reliable payments</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span className="text-sm text-accent">Competitive pricing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    );
};

export default Contact;