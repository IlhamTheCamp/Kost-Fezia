"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Pencil } from "lucide-react";
import { kostInfo } from "@/data/kost";
import {
  buildInquiryMessage,
  inquirySchema,
  occupantOptions,
  type InquiryForm,
} from "@/lib/inquiry";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const inputClass =
  "h-12 w-full rounded-xl border border-line bg-surface px-4 text-base text-foreground outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 aria-[invalid=true]:border-red-500 dark:focus:ring-emerald-800";

export default function ContactForm() {
  const [waLink, setWaLink] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      occupant: "sendiri",
      moveInDate: "",
      contactPhone: kostInfo.contacts[0].phone,
      message: "",
    },
  });

  const onSubmit = (values: InquiryForm) => {
    setWaLink(buildWhatsAppLink(values.contactPhone, buildInquiryMessage(values)));
  };

  return (
    <section id="kontak" className="bg-surface px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Tanya Kamar</h2>
        <p className="mt-2 text-muted">
          Isi singkat di bawah, lalu lanjut chat langsung dengan pemilik kost.
        </p>

        {waLink ? (
          <div className="mt-8 rounded-2xl bg-emerald-50 p-6 text-center dark:bg-emerald-950/50">
            <p className="font-semibold text-emerald-900 dark:text-emerald-100">Pesan sudah siap!</p>
            <p className="mt-1 text-sm text-emerald-800 dark:text-emerald-200">
              Ketuk tombol di bawah untuk membuka WhatsApp.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-green-500 font-semibold text-white transition active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Lanjut ke WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setWaLink(null)}
              className="mt-3 inline-flex h-11 items-center gap-1.5 text-sm font-medium text-emerald-800"
            >
              <Pencil className="h-4 w-4" />
              Ubah data
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-muted">
                Nama
              </label>
              <input
                id="name"
                autoComplete="name"
                aria-invalid={!!errors.name}
                className={inputClass}
                {...register("name")}
              />
              {errors.name && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="occupant" className="mb-1.5 block text-sm font-medium text-muted">
                Penghuni
              </label>
              <select id="occupant" className={inputClass} {...register("occupant")}>
                {occupantOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="moveInDate" className="mb-1.5 block text-sm font-medium text-muted">
                Rencana tanggal masuk
              </label>
              <input
                id="moveInDate"
                type="date"
                aria-invalid={!!errors.moveInDate}
                className={inputClass}
                {...register("moveInDate")}
              />
              {errors.moveInDate && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {errors.moveInDate.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contactPhone" className="mb-1.5 block text-sm font-medium text-muted">
                Hubungi
              </label>
              <select id="contactPhone" className={inputClass} {...register("contactPhone")}>
                {kostInfo.contacts.map((c) => (
                  <option key={c.phone} value={c.phone}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted">
                Catatan (opsional)
              </label>
              <textarea
                id="message"
                rows={3}
                aria-invalid={!!errors.message}
                className={`${inputClass} h-auto py-3`}
                {...register("message")}
              />
              {errors.message && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 font-semibold text-white transition active:scale-95 sm:hover:bg-emerald-700"
            >
              <MessageCircle className="h-5 w-5" />
              Siapkan Pesan WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}