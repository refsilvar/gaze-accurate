import { ArrowDown, Printer } from "lucide-react";
import aboutImg from "@/assets/koyta-about.jpg";

export default function About() {
  return (
    <section id="about" className="bg-white py-28 lg:py-[120px] font-[Poppins]">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: framed photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="rounded-[10px] bg-white p-8 shadow-[0_3px_60px_0_#ececec] ring-1 ring-[#f3f3f3]">
              <img
                src={aboutImg}
                alt="Herry Jason portrait"
                className="block h-auto w-full max-w-[500px] rounded-[6px]"
              />
            </div>
          </div>

          {/* Right: copy */}
          <div className="flex flex-col justify-center">
            <h5 className="mb-9 inline-block self-start border-b-[4px] border-[#f3f3f3] pb-1 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#111135] font-[Montserrat]">
              About Us
            </h5>

            <h2 className="mb-6 text-4xl font-bold leading-[1.2] tracking-tight text-[#111135] sm:text-[42px] lg:text-[44px] font-[Montserrat]">
              Hi there, I&rsquo;m Herry Jason
            </h2>

            <h5 className="mb-7 text-[15px] font-medium uppercase tracking-[0.08em] text-[#111135] font-[Montserrat]">
              Photographer based in newyork, usa
            </h5>

            <div className="mb-9 space-y-5 text-[16px] leading-[1.8] text-[#565656]">
              <p>
                Eeniam possimus magni quia posuere praesentium laboriosam laudantium
                laborum quam dignissim nihil fugiat cursus, elementum deleniti molestiae
                assumenda. Lste voluptatibus nascetur luctus vitae quam.
              </p>
              <p>
                Dignissimos nobis dignissim tristique, sequi occaecat cum auctor facilis
                interdum torquent pulvinar tenetur tempor ibendum quod.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-[15px] font-semibold text-black shadow-[0_3px_20px_0_#ececec] transition-colors hover:bg-primary hover:text-white"
              >
                Download CV
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-black transition-colors hover:text-primary"
              >
                <Printer className="h-4 w-4" />
                Print Cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
