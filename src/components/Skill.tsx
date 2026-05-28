import { Play } from "lucide-react";
import skillBg from "@/assets/koyta-skill-bg.jpg";

const skills = [
  { label: "PHOTOGRAPHY", value: 80 },
  { label: "GRAPHICS DESIGN", value: 90 },
  { label: "APPLICATION DEVELOPMENT", value: 90 },
];

export default function Skill() {
  return (
    <section
      id="skill"
      className="relative overflow-hidden bg-[#0a0a12] bg-cover bg-center bg-no-repeat py-28 font-[Poppins] lg:py-[140px]"
      style={{ backgroundImage: `url(${skillBg})`, backgroundAttachment: "fixed" }}
    >
      <div aria-hidden className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: heading + copy + carousel */}
          <div>
            <h5 className="mb-8 inline-block border-b-[3px] border-white/25 pb-1 text-[14px] font-bold uppercase tracking-[0.18em] text-primary font-[Montserrat]">
              My Services
            </h5>

            <h2 className="mb-7 text-4xl font-bold leading-[1.2] tracking-tight text-white sm:text-[42px] lg:text-[44px] font-[Montserrat]">
              My Design and
              <br />
              Development Skill
            </h2>

            <p className="mb-12 max-w-[440px] text-[16px] leading-[1.9] text-white/85">
              Mattis sunt aptent dapibus conubia magnis. Do faucibus volutpat vel
              excepturi accumsan henderit morbi leo, rerum excepturi aptent torquento
            </p>

            {/* Carousel dots + play */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-white/40" />
                <span className="h-2 w-2 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
                <span className="h-2 w-2 rounded-full bg-white/40" />
                <span className="h-2 w-2 rounded-full bg-white/40" />
              </div>
              <button
                aria-label="Play video"
                className="group flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-white/80 transition-all duration-300 hover:border-primary hover:bg-primary"
              >
                <Play className="ml-1 h-5 w-5 fill-white text-white transition-colors group-hover:fill-white" />
              </button>
            </div>
          </div>

          {/* Right: skill bars */}
          <div className="space-y-12">
            {skills.map(({ label, value }) => (
              <div key={label}>
                <div className="mb-4 flex items-center gap-4">
                  <span className="h-2.5 w-2.5 shrink-0 bg-white" />
                  <h6 className="flex-1 text-[15px] font-bold uppercase tracking-[0.14em] text-white font-[Montserrat]">
                    {label}
                  </h6>
                  <span className="text-[15px] font-medium text-white font-[Montserrat]">
                    {value}%
                  </span>
                </div>
                <div className="ml-7 h-[2px] w-full bg-white/25">
                  <div
                    className="h-full bg-white transition-all duration-1000"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}