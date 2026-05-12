import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Expertise } from "@/components/expertise";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Projects } from "@/components/projects";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Philosophy />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
