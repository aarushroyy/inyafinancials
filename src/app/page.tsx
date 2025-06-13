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
        <div id="services">
          <FinancialServices />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Footer />
    </div>
  );
}
