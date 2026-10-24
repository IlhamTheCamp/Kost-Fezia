"use client";

import { motion } from "framer-motion";
import {
  Archive,
  BedDouble,
  Bike,
  MapPin,
  Tv,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { kostInfo } from "@/data/kost";

const facilities: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: BedDouble, title: "Kasur & Bantal", desc: "Siap pakai di setiap kamar" },
  { icon: Archive, title: "Lemari", desc: "Tempat simpan pakaian" },
  { icon: Tv, title: "TV", desc: "Tersedia di kamar" },
  { icon: Zap, title: "Listrik & Air", desc: "Sudah termasuk harga sewa" },
  { icon: Bike, title: "Parkir Motor", desc: "Luas, dengan card access" },
  { icon: Users, title: "Pasutri & Anak", desc: "Diterima dengan senang hati" },
];

export default function Facilities() {
  return (
    <section id="fasilitas" className="bg-surface px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Fasilitas</h2>
        <p className="mt-2 text-muted">
          Semua yang kamu butuhkan, tanpa repot urus tagihan.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {facilities.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-line bg-emerald-50/50 p-4 sm:p-6 dark:bg-emerald-950/40"
            >
              <Icon className="h-7 w-7 text-emerald-600" />
              <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground">Lokasi Strategis</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {kostInfo.nearbyPlaces.map((place) => (
              <li
                key={place}
                className="flex items-center gap-1.5 rounded-full bg-surface-alt px-3 py-1.5 text-sm text-muted"
              >
                <MapPin className="h-4 w-4 text-emerald-600" />
                {place}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}