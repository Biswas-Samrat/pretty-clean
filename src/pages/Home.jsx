import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileContactBar from "../components/layout/MobileContactBar";
import BackToTopButton from "../components/common/BackToTopButton";
import HeroSection from "../components/home/HeroSection";
import TrustStrip from "../components/home/TrustStrip";
import ServicesPreview from "../components/home/ServicesPreview";
import PricingPreview from "../components/home/PricingPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import GalleryPreview from "../components/home/GalleryPreview";
import ReviewPreview from "../components/home/ReviewPreview";
import ServiceAreasPreview from "../components/home/ServiceAreasPreview";
import FAQPreview from "../components/home/FAQPreview";
import CTASection from "../components/common/CTASection";

export default function Home() {
  return (
    <>
      <title>Pretty Clean | House Cleaning in Swansea</title>
      <AnnouncementBar />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <ServicesPreview />
        <PricingPreview />
        <WhyChooseUs />
        <HowItWorks />
        <GalleryPreview />
        <ReviewPreview />
        <ServiceAreasPreview />
        <FAQPreview />
        <CTASection
          heading="Ready to Make Your Space Shine?"
          subheading="Regular cleaning, deep cleaning and end of tenancy services across Swansea and surrounding areas."
        />
      </main>
      <Footer />
      <MobileContactBar />
      <BackToTopButton />
    </>
  );
}
