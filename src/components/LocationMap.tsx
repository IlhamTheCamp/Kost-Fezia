import { Navigation } from "lucide-react";
import { kostInfo } from "@/data/kost";

export default function LocationMap() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    kostInfo.address
  )}`;

  return (
    <section id="lokasi" className="bg-surface-alt px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Lokasi</h2>
        <p className="mt-2 text-muted">{kostInfo.address}</p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-line">
          <iframe
            src={kostInfo.mapEmbedUrl}
            title="Peta lokasi Kost Fezia"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full border-0 sm:aspect-video"
          />
        </div>

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-emerald-600 font-semibold text-emerald-700 transition active:scale-95 sm:inline-flex sm:w-auto sm:px-6 sm:hover:bg-emerald-50 dark:text-emerald-400 dark:sm:hover:bg-emerald-950"
        >
          <Navigation className="h-5 w-5" />
          Buka di Google Maps
        </a>
      </div>
    </section>
  );
}