import FeaturedBrand from "@/components/FeaturedBrand";
import Hero from "@/components/Hero";
import Security from "@/components/Security";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="hero" className="scroll-mt-24">
        <Hero/>
      </section>
      <section id="features" className="scroll-mt-24">
        <Features/>
      </section>
      <section id="brands" className="scroll-mt-24">
        <FeaturedBrand/>
      </section>
      <section id="how-it-works" className="scroll-mt-24">
        <HowItWorks/>
      </section>
      <section id="security" className="scroll-mt-24">
        <Security/>
      </section>
      <section id="pricing" className="scroll-mt-24">
        <Pricing/>
      </section>
      <section id="testimonials" className="scroll-mt-24">
        <Testimonials/>
      </section>
      <section id="contact" className="scroll-mt-24">
        <CallToAction/>
      </section>
      <Footer/>
    </div>
  );
}
