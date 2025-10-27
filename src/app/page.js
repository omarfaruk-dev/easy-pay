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
      <Hero/>
      <Features/>
      <FeaturedBrand/>
      <HowItWorks/>
      <Security/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
