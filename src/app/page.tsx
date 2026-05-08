import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ChatPanel } from "@/components/chat-panel";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatPanel />
    </>
  );
}
