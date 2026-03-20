import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AOSInit from "@/components/AOSInit";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Prestige Imagery",
};

export default function AboutPage() {
  return (
    <>
      <AOSInit />
      <Navbar />

      {/* About Section */}
      <section
        className="about-section"
        style={{ paddingTop: "7rem" }}
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div className="container mx-auto px-4 max-w-6xl my-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1 text-white">
              <h2
                className="text-5xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Meet David Adedeji Osundeyi
              </h2>

              <p
                className="text-gray-400 text-lg mb-4 leading-relaxed"
                style={{ fontFamily: "var(--font-opensans), 'Open Sans', sans-serif" }}
              >
                With over 9 years of experience in professional photography,
                I&apos;ve dedicated my career to capturing the beauty, emotion,
                and authenticity of life&apos;s most precious moments.
              </p>

              <p
                className="text-gray-400 mb-4"
                style={{ fontFamily: "var(--font-opensans), 'Open Sans', sans-serif" }}
              >
                My journey began with a simple camera and a passion for
                storytelling. Today, I lead a talented team of photographers
                who share my commitment to excellence and artistic vision.
              </p>

              <blockquote className="my-6 pl-4 border-l-4 border-yellow-400">
                <p className="text-lg text-white italic mb-0">
                  &ldquo;Every photograph tells a story. My mission is to ensure
                  yours is told beautifully.&rdquo;
                </p>
              </blockquote>

              <p
                className="text-gray-400 mb-8"
                style={{ fontFamily: "var(--font-opensans), 'Open Sans', sans-serif" }}
              >
                Whether it&apos;s the tender moment between newlyweds, the joy
                of a family reunion, or the confidence in a professional
                portrait, I approach each session with the same dedication, to
                create timeless images that you&apos;ll treasure forever.
              </p>

              <Link
                href="/book"
                className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded text-lg hover:bg-yellow-500 transition-colors no-underline"
              >
                Work With Us
              </Link>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="image-wrapper rounded-lg shadow-xl overflow-hidden" style={{ height: 500 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/ceo.jpg"
                  alt="Portrait of David Osundeyi."
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <div
        className="approach-section"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2
            className="text-5xl font-bold mb-10 text-white"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Our Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Consultation",
                desc: "We begin by understanding your vision, preferences, and the story you want to tell",
              },
              {
                title: "Collaboration",
                desc: "Working closely with you throughout the process to ensure every detail is perfect",
              },
              {
                title: "Delivery",
                desc: "Presenting stunning, professionally edited images that exceed your expectations",
              },
            ].map((step) => (
              <div key={step.title} className="px-4">
                <h3
                  className="text-xl font-bold mb-3 text-yellow-400"
                  style={{ fontFamily: "var(--font-opensans), 'Open Sans', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "var(--font-opensans), 'Open Sans', sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
