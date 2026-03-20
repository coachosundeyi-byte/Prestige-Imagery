"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="navbar-custom fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
      style={{ height: 90 }}
    >
      <div
        className="flex items-center justify-between px-4 h-full"
        style={{ maxWidth: 1400, margin: "0 auto", width: "100%" }}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 text-white no-underline">
          <Image
            src="/assets/images/ChatGPT_Image_Nov_12__2025__08_10_15_PM-removebg-preview.png"
            alt="Prestige Imagery Logo"
            width={60}
            height={60}
            className="img-logo"
          />
          <span className="font-bold text-xl text-white">Prestige Imagery</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link-custom${pathname === link.href ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mr-4" />
          <Link href="/book" className="btn-session ml-2">
            Book a Session
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 border-0 bg-transparent cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-white transition-all" />
          <span className="block w-6 h-0.5 bg-white transition-all" />
          <span className="block w-6 h-0.5 bg-white transition-all" />
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`mobile-nav-menu lg:hidden ${open ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link-custom block py-2${pathname === link.href ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book"
          className="btn-session inline-block mt-2"
          onClick={() => setOpen(false)}
        >
          Book a Session
        </Link>
      </div>
    </nav>
  );
}
