import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/koyta-hero-bg.jpg";
import portrait from "@/assets/koyta-portrait.png";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#1a0f2e] bg-cover bg-center bg-no-repeat font-[Poppins]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Navbar />


      {/* Content grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 px-6 pb-24 pt-40 lg:grid-cols-12 lg:px-10 lg:pt-56">

        <div className="lg:col-span-7 xl:col-span-8">
          <p className="mb-5 text-[15px] font-medium tracking-[0.12em] text-white font-[Montserrat]">
            HARRY JASON
          </p>
          <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[78px] font-[Montserrat]">
            I&rsquo;m a Web Designer
          </h1>
          <p className="mb-12 max-w-[520px] text-[17px] leading-[1.7] text-white font-[Montserrat]">
            Sapiente corrupti duis ipsum a faucibus vero varius nulla? A alias magna
            reiciendis nunc praesentium enim aliquam gollitia
          </p>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-white px-9 py-4 text-sm font-semibold text-white transition-all hover:border-primary hover:bg-primary font-[Montserrat]"
          >
            Go To Portfolio
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Portrait + dual circles */}
        <div className="relative lg:col-span-5 xl:col-span-4">
          <div className="relative mx-auto h-[560px] w-[440px] max-w-full">
            {/* Solid offset circle (back) */}
            <div
              aria-hidden
              className="absolute h-[440px] w-[440px] rounded-full"
              style={{
                top: "-30px",
                right: "-15px",
                backgroundColor: "#c40342",
              }}
            />
            {/* Gradient circle (front of back) */}
            <div
              aria-hidden
              className="absolute h-[440px] w-[440px] rounded-full"
              style={{
                top: 0,
                right: 0,
                backgroundImage:
                  "linear-gradient(11deg, #291342 0%, #c60242 100%)",
              }}
            />
            {/* Portrait */}
            <img
              src={portrait}
              alt="Harry Jason, web designer"
              className="pointer-events-none absolute bottom-0 right-0 h-[640px] w-auto max-w-none object-contain object-bottom"
              style={{ right: "-20px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
