import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container mx-auto px-4 text-white max-w-6xl">
        <hr className="border-gray-600 mb-10 opacity-50" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3">
              <Image
                src="/assets/images/ChatGPT_Image_Nov_12__2025__08_10_15_PM-removebg-preview.png"
                alt="Prestige Imagery Logo"
                width={50}
                height={50}
                className="img-logo mr-2"
              />
              <h5 className="font-bold text-white mb-0">Prestige Imagery</h5>
            </div>
            <p className="text-gray-400 text-sm">
              Capturing life's most precious moments with elegance, artistry,
              and timeless beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-3 text-white">Quick Links</h5>
            <ul className="list-none p-0">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/book", label: "Book a Session" },
              ].map((link) => (
                <li key={link.href} className="mb-2">
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm no-underline hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold mb-3 text-white">Contact Info</h5>
            <ul className="list-none p-0 space-y-2">
              <li className="flex items-start gap-2">
                <i className="fas fa-envelope text-gray-400 mt-1 text-sm" />
                <a
                  href="mailto:adedavid50@gmail.com"
                  className="text-gray-400 text-sm no-underline hover:text-white"
                >
                  adedavid50@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-phone-alt text-gray-400 mt-1 text-sm" />
                <span className="text-gray-400 text-sm">+234 916 776 9692</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-gray-400 mt-1 text-sm" />
                <span className="text-gray-400 text-sm">
                  Baale Street
                  <br />
                  Lekki, Ajah, Lagos.
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-bold mb-3 text-white">Follow Us</h5>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.instagram.com/prestigeimagery__?igsh=MXJ3aGxoczl1MHl1ZA=="
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.facebook.com/share/1D1QCjijCw/"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://vm.tiktok.com/ZSH3UE5q738s4-pSeOQ/"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-3">
          <p className="text-gray-400 text-sm mb-0">
            &copy; 2025 Prestige Imagery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
