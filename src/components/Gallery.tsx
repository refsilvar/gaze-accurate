import { Eye } from "lucide-react";
import { useState } from "react";

type Category = "all" | "ui" | "web" | "graphic" | "wordpress" | "illustration";

type Project = {
  id: number;
  title: string;
  category: string;
  cats: Category[];
  img: string;
};

const IMG = "https://bestwpware.com/html/themetum/koyta/dark/koyta-two/assets/img/02_koyta_img/portfolio";

const projects: Project[] = [
  { id: 1, title: "Cteative Frame", category: "Web Design", cats: ["ui", "web"], img: `${IMG}/1.jpg` },
  { id: 2, title: "Cteative Frame", category: "Web Design", cats: ["wordpress", "graphic"], img: `${IMG}/2.jpg` },
  { id: 3, title: "Cteative Frame", category: "Web Design", cats: ["web", "illustration"], img: `${IMG}/3.jpg` },
  { id: 4, title: "Cteative Frame", category: "Web Design", cats: ["graphic", "illustration"], img: `${IMG}/4.jpg` },
  { id: 5, title: "Cteative Frame", category: "Web Design", cats: ["web", "ui"], img: `${IMG}/5.jpg` },
  { id: 6, title: "Cteative Frame", category: "Web Design", cats: ["wordpress", "illustration"], img: `${IMG}/6.jpg` },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ui", label: "UI Design" },
  { key: "web", label: "Web Development" },
  { key: "graphic", label: "Graphic Design" },
  { key: "wordpress", label: "WordPress" },
  { key: "illustration", label: "Illustration" },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>("all");

  const visible = active === "all" ? projects : projects.filter((p) => p.cats.includes(active));

  return (
    <section id="portfolio" className="bg-[#f3f3f3] py-28 lg:py-[120px] font-[Poppins]">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h5 className="mb-5 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#ff3366] font-[Montserrat]">
            Gallery
          </h5>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-tight text-[#111135] sm:text-[42px] lg:text-[44px] font-[Montserrat]">
            Our Gallery Projects
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`text-[15px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 font-[Montserrat] ${
                active === f.key
                  ? "text-[#ff3366]"
                  : "text-[#111135] hover:text-[#ff3366]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden bg-white shadow-[0_3px_30px_0_rgba(0,0,0,0.05)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-6 transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#ff3366]/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="translate-y-4 text-center transition-transform duration-500 group-hover:translate-y-0">
                    <h5 className="mb-2 text-[20px] font-bold text-white font-[Montserrat]">
                      {String(p.id).padStart(2, "0")}. {p.title}
                    </h5>
                    <span className="mb-5 block text-[14px] font-medium uppercase tracking-[0.15em] text-white/90">
                      {p.category}
                    </span>
                    <a
                      href={p.img}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff3366] transition-transform duration-300 hover:scale-110"
                      aria-label="View project"
                    >
                      <Eye className="h-5 w-5" strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-[14px] font-semibold uppercase tracking-[0.1em] text-[#111135] shadow-[0_3px_30px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:bg-[#ff3366] hover:text-white font-[Montserrat]"
          >
            Load More
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
