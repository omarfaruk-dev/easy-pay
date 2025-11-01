import FeaturedBrand from "@/components/FeaturedBrand";
import Hero from "@/components/Hero";
import Security from "@/components/Security";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="hero" className="section-scroll">
        <Hero />
      </section>
      <section id="features" className="section-scroll">
        <Features />
      </section>
      <section id="brands" className="section-scroll">
        <FeaturedBrand />
      </section>
      <section id="how-it-works" className="section-scroll">
        <HowItWorks />
      </section>
      <section id="security" className="section-scroll">
        <Security />
      </section>
      <section id="statistics" className="section-scroll">
        <Statistics />
      </section>
      <section id="pricing" className="section-scroll">
        <Pricing />
      </section>
      <section id="testimonials" className="section-scroll">
        <Testimonials />
      </section>
      <section>
        <CallToAction />
      </section>
      <section id="contact" className="section-scroll">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
