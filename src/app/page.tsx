import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Facilities />
      <Gallery />
      <WhatsAppButton />
    </main>
  );
}