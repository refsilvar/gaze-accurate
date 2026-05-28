import { Cookie, Monitor, Flame, PencilRuler, FileImage, Lock, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
};

const services: Service[] = [
  { icon: Cookie, title: "Graphics Design" },
  { icon: Monitor, title: "Web Design" },
  { icon: Flame, title: "Trendy Work" },
  { icon: PencilRuler, title: "Easy To Customize" },
  { icon: FileImage, title: "Adobe Photoshop" },
  { icon: Lock, title: "Web Development" },
];

export default function Services() {
  return (
    <section id="service" className="bg-[#f3f3f3] py-28 lg:py-[120px] font-[Poppins]">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h5 className="mb-7 inline-block border-b-[4px] border-[#e2e2e2] pb-1 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#111135] font-[Montserrat]">
            My Services
          </h5>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-tight text-[#111135] sm:text-[42px] lg:text-[44px] font-[Montserrat]">
            Why Choose My Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title }) => (
            <article
              key={title}
              className="group rounded-[10px] bg-white px-10 pb-12 pt-14 text-center shadow-[0_3px_40px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_0_rgba(0,0,0,0.08)]"
            >
              <div className="mx-auto mb-9 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#f3f3f3] transition-colors duration-300 group-hover:bg-primary">
                <Icon
                  className="h-8 w-8 text-[#111135] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.75}
                />
              </div>

              <h4 className="mb-5 text-[22px] font-bold tracking-tight text-[#111135] font-[Montserrat]">
                {title}
              </h4>

              <div className="mx-auto mb-7 h-[2px] w-[60px] bg-[#d9d9d9]" />

              <div className="mb-7 flex items-center justify-center gap-7 text-[14px] font-medium text-[#8a7a6a] font-[Montserrat]">
                <span>Web</span>
                <span>Graphics</span>
                <span>SEO</span>
              </div>

              <p className="mx-auto max-w-[260px] text-[15px] leading-[1.9] text-[#8a7a6a]">
                I have been providing web design services with great success for 9
                years. The client is very happy
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}