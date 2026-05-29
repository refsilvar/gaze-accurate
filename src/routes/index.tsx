import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Koyta — Harry Jason, Web Designer" },
      { name: "description", content: "Portfolio of Harry Jason, freelance web designer crafting modern digital experiences." },
      { property: "og:title", content: "Koyta — Harry Jason, Web Designer" },
      { property: "og:description", content: "Portfolio of Harry Jason, freelance web designer crafting modern digital experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skill />
      <Stats />
      <Gallery />
      <Testimonials />
      <Contact />
    </>

  );
}
