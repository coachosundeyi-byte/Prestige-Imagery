"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AOSInit from "@/components/AOSInit";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AOSInit />
      <Navbar />

      <section
        className="contact-section"
        style={{ paddingTop: "7rem" }}
        data-aos="flip-down"
        data-aos-duration="3000"
      >
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2>Get in Touch</h2>
          <p
            className="text-gray-400 text-lg mb-12"
            style={{ fontSize: 18, fontWeight: 400 }}
          >
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="contact-card">
                <h5 className="text-white font-bold text-lg mb-6">
                  Send Us a Message
                </h5>

                {submitted && (
                  <div className="bg-green-800/30 border border-green-600 text-green-300 rounded p-3 mb-4 text-sm">
                    ✅ Message sent successfully!
                  </div>
                )}
                {error && (
                  <div className="bg-red-800/30 border border-red-600 text-red-300 rounded p-3 mb-4 text-sm">
                    ❌ Failed to send message. Please try again later.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="access_key"
                    value="3cfe7eb6-31a3-4549-b5fb-111167ee8d0d"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-gray-300 text-sm block mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="Name"
                        className="contact-form-control"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm block mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="E-mail"
                        className="contact-form-control"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="text-gray-300 text-sm block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="Subject"
                      className="contact-form-control"
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="text-gray-300 text-sm block mb-1">
                      Message
                    </label>
                    <textarea
                      name="Message"
                      className="contact-form-control"
                      rows={4}
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-400 text-black font-semibold py-2 rounded transition hover:bg-yellow-300 disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="contact-card mb-4">
                <h5 className="text-white font-bold mb-4">
                  Contact Information
                </h5>
                <p className="mb-3">
                  <i className="fas fa-envelope text-yellow-400 mr-2" />
                  <strong className="text-white">Email</strong>
                  <br />
                  <span className="text-gray-400">adedavid50@gmail.com</span>
                </p>
                <p className="mb-3">
                  <i className="fas fa-phone text-yellow-400 mr-2" />
                  <strong className="text-white">Phone</strong>
                  <br />
                  <span className="text-gray-400">+234 916 776 9692</span>
                </p>
                <p>
                  <i className="fas fa-map-marker-alt text-yellow-400 mr-2" />
                  <strong className="text-white">Studio</strong>
                  <br />
                  <span className="text-gray-400">
                    Baale street
                    <br />
                    Lekki, Ajah, Lagos.
                  </span>
                </p>
              </div>

              <div className="contact-card text-center">
                <h5 className="text-white font-bold mb-4">Follow Us</h5>
                <div className="social-links mt-3">
                  <a
                    href="https://www.instagram.com/prestigeimagery__?igsh=MXJ3aGxoczl1MHl1ZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1D1QCjijCw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    href="https://vm.tiktok.com/ZSH3UE5q738s4-pSeOQ/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-tiktok" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
