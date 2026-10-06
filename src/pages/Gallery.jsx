import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileContactBar from "../components/layout/MobileContactBar";
import BackToTopButton from "../components/common/BackToTopButton";
import CTASection from "../components/common/CTASection";
import Breadcrumb from "../components/common/Breadcrumb";
import GalleryGrid from "../components/gallery/GalleryGrid";

export default function Gallery() {
  return (
    <>
      <title>Gallery | Pretty Clean</title>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="bg-cream py-14 sm:py-16 border-b border-charcoal/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Gallery" }]} />
            <div className="mt-6 max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-3 font-sans">
                Our Work Portfolio
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-medium text-charcoal mb-4 leading-tight">
                See the Difference
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed">
                Take a look at our recent cleaning work across regular home
                cleans, deep cleans and periodic refreshes.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryGrid />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <MobileContactBar />
      <BackToTopButton />
    </>
  );
}
