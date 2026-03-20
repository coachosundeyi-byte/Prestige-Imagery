"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AOSInit from "@/components/AOSInit";
import { useState, FormEvent } from "react";

export default function BookPage() {
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

      <main
        className="page-wrap"
        style={{ paddingTop: 120 }}
        data-aos="flip-down"
        data-aos-duration="5000"
      >
        <h1 className="display-title">Book a Session</h1>
        <p className="subtitle">
          Let&apos;s create something beautiful together. Fill out the form
          below and we&apos;ll get back to you within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          {/* Booking Form */}
          <div className="lg:col-span-6">
            <div className="book-card-dark flex flex-col gap-4 text-white">
              <h5 className="small-card-title text-lg">Request a Session</h5>

              {submitted && (
                <div className="bg-green-800/30 border border-green-600 text-green-300 rounded p-3 text-sm">
                  ✅ Booking request sent successfully!
                </div>
              )}
              {error && (
                <div className="bg-red-800/30 border border-red-600 text-red-300 rounded p-3 text-sm">
                  ❌ Failed to send. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="hidden"
                  name="access_key"
                  value="113552fd-6fa3-4156-b9d8-bdaa79a89176"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Booking Form"
                />
                <input type="hidden" name="template" value="table" />

                {/* Full Name */}
                <div>
                  <label className="book-form-label">Full Name</label>
                  <input
                    className="book-form-control"
                    type="text"
                    placeholder="John Doe"
                    name="Full name"
                    required
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
                  <div className="md:col-span-4">
                    <label className="book-form-label">Email</label>
                    <input
                      className="book-form-control"
                      type="email"
                      placeholder="john@example.com"
                      name="Email"
                      required
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="book-form-label">Phone</label>
                    <input
                      className="book-form-control"
                      type="tel"
                      placeholder="(555) 123-4567"
                      name="Phone"
                      required
                    />
                  </div>
                </div>

                {/* Service + Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label className="book-form-label">Service Type</label>
                    <select
                      className="book-form-control"
                      name="Service type"
                      required
                      style={{ backgroundColor: "#0f0e0e", color: "#bdb5b0" }}
                    >
                      <option value="">Select a service</option>
                      <option>Wedding Photography</option>
                      <option>Portrait Session</option>
                      <option>Event Coverage</option>
                      <option>Family Photos</option>
                      <option>Photoshoot</option>
                    </select>
                  </div>
                  <div>
                    <label className="book-form-label">Preferred Date</label>
                    <input
                      className="book-form-control"
                      type="date"
                      name="Preferred date"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="book-form-label">Message / Details</label>
                  <textarea
                    className="book-form-control"
                    placeholder="Tell us about your vision…"
                    name="Message"
                    rows={5}
                    required
                    style={{ resize: "vertical", minHeight: 120 }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-accent"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Booking Request"}
                </button>
              </form>
            </div>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-5 lg:col-start-8">
            {/* Booking Process */}
            <div className="info-card mb-4">
              <div className="flex items-start gap-3">
                <div style={{ fontSize: 20, marginRight: 8 }}>📅</div>
                <div>
                  <div className="small-card-title">Booking Process</div>
                  <p className="muted-text mb-0">
                    Submit your booking request and we&apos;ll reach out within
                    24 hours to discuss your vision, confirm availability, and
                    finalize the details.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="info-card mb-4">
              <div className="small-card-title">What to Expect</div>
              <ul className="muted-text mb-0 list-none p-0">
                {[
                  "Initial consultation to understand your needs and preferences",
                  "Personalized session planning and location scouting",
                  "Professional photography session with artistic direction",
                  "Expert editing and retouching of selected images",
                  "Delivery of high-resolution images within 2-3 weeks",
                ].map((item, i) => (
                  <li key={i} className="flex items-start mb-2">
                    <span className="list-dot">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability */}
            <div className="info-card availability-card">
              <div className="small-card-title">Availability</div>
              <p className="muted-text mb-0">
                We typically book sessions 2–4 weeks in advance. For weddings
                and large events, we recommend booking 3–6 months ahead to
                ensure availability for your special date.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
