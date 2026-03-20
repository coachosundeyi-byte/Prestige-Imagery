import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortfolioFilter from "@/components/PortfolioFilter";
import AOSInit from "@/components/AOSInit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Prestige Imagery",
};

export default function GalleryPage() {
  return (
    <>
      <AOSInit />
      <Navbar />

      <section
        className="portfolio-section text-center"
        style={{ paddingTop: "7rem" }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2>Our Portfolio</h2>
          <p className="text-gray-400 mb-8">
            Explore our collection of captured moments across weddings,
            portraits, events, and more.
          </p>

          <PortfolioFilter />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
