import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import RoomAvailability from "@/components/RoomAvailability";
import LocationMap from "@/components/LocationMap";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Facilities />
      <Gallery />
      <RoomAvailability />
      <LocationMap />
      <ContactForm />
      <WhatsAppButton />
    </main>
  );
}