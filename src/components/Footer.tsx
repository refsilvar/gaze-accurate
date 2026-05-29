import { ArrowUp, Dribbble, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "UI/UX Design",
  "Web Development",
  "Branding",
  "Mobile Apps",
  "Motion Design",
  "Consulting",
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative overflow-hidden bg-[#0f0b1e] font-[Poppins]">
      {/* Gradient top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff3366] to-transparent opacity-60" />

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#7c5cff]/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#ff3366]/[0.04] blur-[100px]" />

      {/* Main footer content */}
      <div className="relative mx-auto w-full max-w-[1320px] px-6 pt-24 pb-16 lg:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a
              href="#"
              className="mb-7 inline-flex items-center text-[28px] font-extrabold tracking-tight font-[Montserrat]"
            >
              <span className="text-[#ff3366]">K</span>
              <span className="text-white">OYTA</span>
            </a>
            <p className="mb-8 max-w-[320px] text-[15px] leading-[1.9] text-white/50">
              Crafting pixel-perfect digital experiences that leave lasting
              impressions. Let's turn your vision into reality.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 transition-all duration-300 hover:border-[#ff3366]/30 hover:bg-[#ff3366]/10 hover:text-[#ff3366] hover:shadow-[0_0_20px_-5px_rgba(255,51,102,0.35)]"
                >
                  <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mb-7 text-[14px] font-bold uppercase tracking-[0.18em] text-white/80 font-[Montserrat]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] text-white/45 transition-all duration-300 hover:text-[#ff3366]"
                  >
                    <span className="h-[1px] w-0 bg-[#ff3366] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="mb-7 text-[14px] font-bold uppercase tracking-[0.18em] text-white/80 font-[Montserrat]">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#service"
                    className="group inline-flex items-center gap-2 text-[15px] text-white/45 transition-all duration-300 hover:text-[#ff3366]"
                  >
                    <span className="h-[1px] w-0 bg-[#ff3366] transition-all duration-300 group-hover:w-4" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="mb-7 text-[14px] font-bold uppercase tracking-[0.18em] text-white/80 font-[Montserrat]">
              Stay Updated
            </h4>
            <p className="mb-6 text-[15px] leading-[1.8] text-white/45">
              Subscribe to get the latest design tips, project updates, and
              creative inspiration delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-[14px] text-white/80 placeholder:text-white/25 outline-none transition-all duration-300 focus:border-[#ff3366]/40 focus:bg-white/[0.05] focus:ring-4 focus:ring-[#ff3366]/8"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff3366] to-[#c40342] px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:shadow-[0_10px_35px_-8px_rgba(255,51,102,0.5)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.04]">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row lg:px-10">
          <p className="text-[13px] text-white/30 font-[Montserrat]">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white/50">Koyta</span>. All rights reserved.
            Designed with passion.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 transition-all duration-300 hover:border-[#ff3366]/30 hover:bg-[#ff3366]/10 hover:text-[#ff3366]"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
