import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const AVATAR = "https://bestwpware.com/html/themetum/koyta/dark/koyta-two/assets/img/02_koyta_img/testimonial";

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Copibus conubia magnis. Do faucibus voluptat vel excepturi accumsan hendrerit morbi leo, rerum excepturi aptent torquent voluptatum ridiculus pariatur vehicula metus inceptos earum ab erat repudiandae",
    name: "Michael Daniel",
    role: "CEO of ManySoft agency",
    avatar: `${AVATAR}/1.png`,
  },
  {
    id: 2,
    quote:
      "Working with this team was an absolute pleasure. The attention to detail and the level of creativity they bring to every project is truly remarkable, exceeding all expectations we had.",
    name: "Sarah Johnson",
    role: "Founder of BrightLab",
    avatar: `${AVATAR}/2.png`,
  },
  {
    id: 3,
    quote:
      "From concept to delivery, every step felt smooth and collaborative. The final product was not only beautiful but also performed flawlessly across every device and platform we tested.",
    name: "David Wilson",
    role: "CTO of NovaTech",
    avatar: `${AVATAR}/3.png`,
  },
  {
    id: 4,
    quote:
      "Their design sense is unmatched. They transformed our vague ideas into a polished brand experience that our customers genuinely love and consistently compliment in feedback surveys.",
    name: "Emma Roberts",
    role: "Marketing Lead, Pulse Co.",
    avatar: `${AVATAR}/1.png`,
  },
  {
    id: 5,
    quote:
      "Highly recommended for anyone looking to elevate their digital presence. Communication was excellent, deadlines were met, and the quality of work spoke for itself from day one.",
    name: "James Carter",
    role: "Product Manager, Loop",
    avatar: `${AVATAR}/2.png`,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canPrev, setCanPrev] = useState(true);
  const [canNext, setCanNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="bg-white py-28 lg:py-[120px] font-[Poppins]">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h5 className="mb-5 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#ff3366] font-[Montserrat]">
            Client
          </h5>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-tight text-[#111135] sm:text-[42px] lg:text-[44px] font-[Montserrat]">
            What Our Client Say?
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="group flex h-full flex-col items-center rounded-md bg-[#f8f8f8] px-8 py-12 text-center transition-all duration-500 hover:bg-white hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.08)]">
                    <Quote
                      className="mb-6 h-10 w-10 rotate-180 text-[#e5e5e5] transition-colors duration-500 group-hover:text-[#ff3366]"
                      strokeWidth={1}
                      fill="currentColor"
                    />
                    <p className="mb-8 text-[15px] leading-[1.8] text-[#666] min-h-[140px]">
                      {t.quote}
                    </p>
                    <div className="mb-4 h-16 w-16 overflow-hidden rounded-full ring-4 ring-white">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h5 className="text-[18px] font-bold text-[#111135] font-[Montserrat]">
                      {t.name}
                    </h5>
                    <span className="mt-1 text-[13px] font-semibold text-[#666] font-[Montserrat]">
                      {t.role}
                    </span>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous"
            className="absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111135] shadow-[0_3px_30px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-[#ff3366] hover:text-white disabled:opacity-50 lg:-left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next"
            className="absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111135] shadow-[0_3px_30px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-[#ff3366] hover:text-white disabled:opacity-50 lg:-right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
