"use client";

import { motion } from "framer-motion";
import { Images, MessageCircle } from "lucide-react";
import { kostInfo, rooms } from "@/data/kost";
import { formatRupiah } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const startingPrice = Math.min(...rooms.map((r) => r.price));
  const waLink = buildWhatsAppLink(
    kostInfo.contacts[0].phone,
    "Halo, saya tertarik dengan Kost Fezia. Apakah masih ada kamar kosong?"
  );

  return (
    <section className="relative flex min-h-svh items-center bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 px-5 py-20 text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium uppercase tracking-widest text-emerald-200"
        >
          Kost Umum · Cicurug, Sukabumi
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 text-4xl font-bold leading-tight text-balance sm:text-5xl md:text-6xl"
        >
          Kost Fezia: tinggal nyaman, harga terjangkau.
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 inline-flex flex-col rounded-2xl bg-white/10 px-5 py-4 backdrop-blur"
        >
          <span className="text-sm text-emerald-100">Mulai dari</span>
          <span className="text-3xl font-bold">
            {formatRupiah(startingPrice)}
            <span className="text-base font-normal text-emerald-100"> /bulan</span>
          </span>
          <span className="text-sm text-emerald-100">
            Sudah termasuk listrik & air PAM
          </span>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-emerald-800 transition active:scale-95 sm:hover:bg-emerald-50"
          >
            <MessageCircle className="h-5 w-5" />
            Tanya via WhatsApp
          </a>
          <a
            href="#galeri"
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 font-semibold transition active:scale-95 sm:hover:bg-white/10"
          >
            <Images className="h-5 w-5" />
            Lihat Foto
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}