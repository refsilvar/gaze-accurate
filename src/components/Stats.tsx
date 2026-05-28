import { Youtube, Contact, Trophy, type LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const stats: Stat[] = [
  { icon: Youtube, label: "Year of\nExperience", value: "20" },
  { icon: Contact, label: "Global Working\nClient", value: "20" },
  { icon: Trophy, label: "Awards\nWin", value: "20" },
];

export default function Stats() {
  return (
    <section className="bg-white py-20 font-[Poppins] lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-6 lg:gap-8"
            >
              <Icon
                className="h-12 w-12 shrink-0 text-[#111135]"
                strokeWidth={1.5}
              />
              <h6 className="whitespace-pre-line text-[14px] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[#c40342] font-[Montserrat]">
                {label}
              </h6>
              <div className="flex items-baseline gap-1">
                <span className="text-[40px] font-bold leading-none text-[#111135] font-[Montserrat]">
                  {value}
                </span>
                <span className="text-[32px] font-bold leading-none text-[#111135] font-[Montserrat]">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}