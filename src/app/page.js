import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Security from "@/components/Security";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <WhyChoose/>
      <Featured/>
      <HowItWorks/>
      <Security/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
