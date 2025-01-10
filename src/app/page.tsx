import HeroSection from "../components/HeroSection";
import ProfileCarousel from "@/components/ProfileCarousel";
import FinancialServices from "@/components/FinancialServices";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <ProfileCarousel />
        <FinancialServices />
        <HowItWorks />
        <Footer />
    </div>
  );
}
