import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <WhyChoose/>
      <Featured/>
    </div>
  );
}
