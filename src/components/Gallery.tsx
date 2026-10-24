"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/data/kost";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const total = galleryImages.length;

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % total)),
    [total]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + total) % total)),
    [total]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  return (
    <section id="galeri" className="bg-surface-alt px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Foto Kost</h2>
        <p className="mt-2 text-muted">Ketuk foto untuk melihat lebih besar.</p>

        {total === 0 ? (
          <p className="mt-8 text-muted">Foto akan segera ditambahkan.</p>
        ) : (
          <ul className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {galleryImages.map((img, i) => (
              <li key={img.src}>
                <button
                  onClick={() => setActive(i)}
                  aria-label={`Buka foto: ${img.alt}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-line active:opacity-80"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Galeri foto"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Tutup"
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Foto sebelumnya"
              className="absolute left-3 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:flex"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Foto berikutnya"
              className="absolute right-3 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:flex"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={active}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[80svh] w-full max-w-4xl"
            >
              <Image
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                fill
                sizes="100vw"
                draggable={false}
                className="object-contain"
              />
            </motion.div>

            <p className="absolute bottom-6 text-sm text-white/80">
              {active + 1} / {total}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}