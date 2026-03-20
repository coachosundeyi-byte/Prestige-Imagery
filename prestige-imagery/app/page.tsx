import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroCarousel from "@/components/HeroCarousel";
import AOSInit from "@/components/AOSInit";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <AOSInit />
      <Navbar />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Why Choose Us */}
      <section
        className="why-choose-us"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-playfair">Why Choose Us</h2>
          <p className="subtitle">
            We combine artistic vision with technical excellence to create
            stunning photography
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fa-solid fa-camera" />
              </div>
              <h4>Professional Quality</h4>
              <p>High-end equipment and expertise for stunning results</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fa-solid fa-heart" />
              </div>
              <h4>Passionate Team</h4>
              <p>Dedicated photographers who love what they do</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fa-solid fa-star" />
              </div>
              <h4>Client Focused</h4>
              <p>Your vision and satisfaction are our top priorities</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fa-solid fa-award" />
              </div>
              <h4>Award Winning</h4>
              <p>Recognized excellence in the photography industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div
        className="cta-banner"
        data-aos="fade-left"
        data-aos-duration="3000"
        style={{
          backgroundImage:
            "url('/assets/images/SnapInsta.to_440166504_378576151309282_5840356128337165510_n.jpg')",
        }}
      >
        <div className="ready-text">
          <h1>Ready to Create Beautiful Moments</h1>
          <p>
            Let&apos;s discuss your photography needs and create something
            extraordinary together
          </p>
        </div>
        <div className="ready-btn">
          <Link href="/book" className="btn-book">
            Book a Session
          </Link>
          <Link href="/gallery" className="btn-view">
            View Portfolio
          </Link>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
