import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

type InfoCard = {
  icon: typeof Phone;
  title: string;
  lines: string[];
  accent: string;
};

const infoCards: InfoCard[] = [
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+435-64773728", "+062-35363782588"],
    accent: "from-[#ff3366] to-[#ff6b9a]",
  },
  {
    icon: Mail,
    title: "Mail Address",
    lines: ["hello@koyta.studio", "projects@koyta.studio"],
    accent: "from-[#7c5cff] to-[#b08bff]",
  },
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["FA — 154 Careon Street,", "California, USA"],
    accent: "from-[#0ea5b7] to-[#5cd9c5]",
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent — I'll get back to you within 24h.");
      form.reset();
      setSubmitting(false);
    }, 700);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-28 lg:py-[120px] font-[Poppins]">
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#ff3366]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[480px] w-[480px] rounded-full bg-[#7c5cff]/[0.07] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h5 className="mb-5 inline-block border-b-[3px] border-[#ff3366]/40 pb-1 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#ff3366] font-[Montserrat]">
            Contact
          </h5>
          <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-[#111135] sm:text-[42px] lg:text-[48px] font-[Montserrat]">
            Let's build something <span className="text-[#ff3366]">remarkable</span>.
          </h2>
          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-[#666]">
            Have a project in mind or just want to say hi? Drop a message — I read
            every one and reply within a day.
          </p>
        </div>

        {/* Info Cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {infoCards.map(({ icon: Icon, title, lines, accent }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-[#eee] bg-white p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_60px_-15px_rgba(17,17,53,0.18)]"
            >
              <div
                className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-white shadow-[0_10px_30px_-10px_rgba(255,51,102,0.55)] transition-transform duration-500 group-hover:scale-110`}
              >
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h4 className="mb-3 text-[20px] font-bold text-[#111135] font-[Montserrat]">
                {title}
              </h4>
              <div className="space-y-1 text-[15px] leading-[1.8] text-[#666]">
                {lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Form Card */}
        <div className="relative mx-auto max-w-[980px]">
          <div className="relative overflow-hidden rounded-[28px] border border-[#eee] bg-white p-8 shadow-[0_30px_80px_-30px_rgba(17,17,53,0.18)] sm:p-12 lg:p-14">
            <div className="mb-10 flex flex-col items-center text-center">
              <span className="mb-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#ff3366] font-[Montserrat]">
                Send Message
              </span>
              <h3 className="text-[26px] font-bold tracking-tight text-[#111135] sm:text-[30px] font-[Montserrat]">
                Tell me about your project
              </h3>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FloatingField name="name" label="Your Full Name" type="text" />
                <FloatingField name="email" label="Your Email Address" type="email" />
              </div>
              <FloatingField name="subject" label="Subject" type="text" />
              <FloatingField name="message" label="Your Message" textarea />

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#111135] px-10 py-4 text-[14px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 hover:bg-[#ff3366] hover:shadow-[0_15px_40px_-10px_rgba(255,51,102,0.6)] disabled:cursor-not-allowed disabled:opacity-60 font-[Montserrat]"
                >
                  <Send className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  {submitting ? "Sending..." : "Submit Message"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
};

function FloatingField({ name, label, type = "text", textarea }: FieldProps) {
  const base =
    "peer w-full rounded-2xl border border-[#e8e8ec] bg-[#fafafb] px-5 pt-6 pb-2 text-[15px] text-[#111135] placeholder-transparent outline-none transition-all duration-300 focus:border-[#ff3366] focus:bg-white focus:ring-4 focus:ring-[#ff3366]/10";
  const labelCls =
    "pointer-events-none absolute left-5 top-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#999] transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#9a9aa3] peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-[#ff3366] font-[Montserrat]";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={label}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={label}
          className={base}
        />
      )}
      <label htmlFor={name} className={textarea ? labelCls.replace("top-1/2 peer-placeholder-shown:-translate-y-1/2", "top-5") : labelCls}>
        {label}
      </label>
    </div>
  );
}
