import { MessageCircle } from "lucide-react";
import { kostInfo } from "@/data/kost";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const href = buildWhatsAppLink(
    kostInfo.contacts[0].phone,
    "Halo, saya tertarik dengan Kost Fezia. Apakah masih ada kamar kosong?"
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-14 items-center gap-2 rounded-full bg-green-500 px-4 font-semibold text-white shadow-lg transition active:scale-95 sm:px-5 sm:hover:bg-green-600"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}