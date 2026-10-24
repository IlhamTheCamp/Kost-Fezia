import { Check } from "lucide-react";
import { kostInfo, rooms } from "@/data/kost";
import { formatRupiah } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Room } from "@/types";

const statusLabel: Record<Room["status"], string> = {
  available: "Tersedia",
  full: "Penuh",
};

const statusStyle: Record<Room["status"], string> = {
  available: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  full: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

export default function RoomAvailability() {
  return (
    <section id="kamar" className="bg-surface px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Pilihan Kamar</h2>
        <p className="mt-2 text-muted">Status kamar diperbarui oleh pemilik kost.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => {
            const message =
              room.status === "available"
                ? `Halo, saya tertarik dengan kamar di Kost Fezia. Apakah masih tersedia?`
                : `Halo, kamar di Kost Fezia sedang penuh. Boleh tahu kapan kira-kira kosong?`;

            return (
              <article
                key={room.id}
                className="flex flex-col rounded-2xl border border-line p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-foreground">{room.name}</h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[room.status]}`}
                  >
                    {statusLabel[room.status]}
                  </span>
                </div>

                <p className="mt-3 text-3xl font-bold text-emerald-700 dark:text-emerald-400">
                  {formatRupiah(room.price)}
                  <span className="text-base font-normal text-muted"> /bulan</span>
                </p>

                <ul className="mt-4 space-y-2 text-muted">
                  {room.facilities.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppLink(kostInfo.contacts[0].phone, message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white transition active:scale-95 sm:hover:bg-emerald-700"
                >
                  {room.status === "available" ? "Tanya Kamar Ini" : "Tanya Antrian"}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}