import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const navItems = ["HOME", "ABOUT", "SERVICE", "PORTFOLIO", "BLOG", "CONTACT"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#"
          className="flex items-center text-[28px] font-extrabold tracking-tight font-[Montserrat]"
        >
          <span className="text-primary">K</span>
          <span className={scrolled ? "text-[#0b0b22]" : "text-white"}>OYTA</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex font-[Montserrat]">
          {navItems.map((item, i) => (
            <a
              key={item}
              href="#"
              className={`text-[13px] font-bold tracking-[0.18em] transition-colors hover:text-primary ${
                i < 2
                  ? "text-primary"
                  : scrolled
                  ? "text-[#0b0b22]"
                  : "text-white/95"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className={scrolled ? "text-[#0b0b22]" : "text-white"}
        >
          <Menu className="h-7 w-7" strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
}
