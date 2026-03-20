import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AOSInit from "@/components/AOSInit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Prestige Imagery",
};

const testimonials = [
  {
    quote:
      "David and his team captured our wedding day perfectly. Every photo tells a story and brings back the emotions we felt. We couldn't be happier!",
    name: "Funke Adelaja",
    role: "",
    image: "/assets/images/funke.jpeg",
  },
  {
    quote:
      "Professional, efficient, and the results exceeded our expectations. The photo's have elevated our entire team's professional image.",
    name: "Sabiboy lilemn",
    role: "",
    image: "/assets/images/SnapInsta.to_497323540_18113158948485065_4556680426189371402_n.jpg",
  },
  {
    quote:
      "Working with this team was an absolute joy. They made our family feel comfortable and natural, resulting in photos we'll treasure forever.",
    name: "Blessing John",
    role: "",
    image: "/assets/images/blessingg.jpeg",
  },
  {
    quote:
      "The attention to detail and artistic vision is unmatched. Our music videos are absolutely stunning and captured with love beautifully.",
    name: "Uche Kelvin",
    role: "",
    image: "/assets/images/SnapInsta.to_474687445_18102957220485065_8955730547995065069_n.jpg",
  },
  {
    quote:
      "They documented our corporate event flawlessly. Every important moment was captured with professionalism and creativity.",
    name: "Jenni Franks",
    role: "Event Coverage",
    image: "/assets/images/jenni.jpg",
  },
  {
    quote:
      "Such a wonderful experience! They made me feel beautiful and confident, and the photos are absolutely magical.",
    name: "Tope Adesanya",
    role: "",
    image: "/assets/images/tope.jpeg",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <AOSInit />
      <Navbar />

      <section
        className="testimonials-section"
        style={{ paddingTop: "7rem" }}
        data-aos="flip-down"
        data-aos-duration="5000"
      >
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2
            className="text-5xl font-bold mb-3 text-white"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Client Love
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Don&apos;t just take our word for it — hear what our clients have
            to say
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card text-left">
                <i
                  className="fas fa-quote-left text-yellow-400 text-3xl mb-3 block opacity-40"
                  aria-hidden="true"
                />
                <p className="text-white mb-6 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-full object-cover flex-shrink-0"
                    width={40}
                    height={40}
                    style={{ width: 40, height: 40 }}
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold mb-0 text-white text-sm">
                      {t.name}
                    </p>
                    {t.role && (
                      <p className="text-gray-400 text-xs mb-0">{t.role}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
