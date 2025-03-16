import FeatureSection from "@/components/common/FeatureSection";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/common/HeroSection";
import HowItWorksSection from "@/components/common/HowItWorksSection";
import KnowledgeBased from "@/components/common/Knowledgebased";
import LikeAPro from "@/components/common/LikeAPro";
import WhatOurCustSays from "@/components/common/WhatOurCustSays";
// import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full bg-black overflow-hidden">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <WhatOurCustSays />
      <LikeAPro />
      <KnowledgeBased />
      <Footer />

    </main>
  );
}
