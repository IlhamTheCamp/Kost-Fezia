import { z } from "zod";

export const occupantOptions = [
  { value: "sendiri", label: "Sendiri" },
  { value: "pasutri", label: "Pasutri" },
  { value: "pasutri-anak", label: "Pasutri dengan anak" },
] as const;

const todayLocal = () => new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD

export const inquirySchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  occupant: z.enum(["sendiri", "pasutri", "pasutri-anak"]),
  moveInDate: z
    .string()
    .min(1, "Pilih perkiraan tanggal masuk")
    .refine((d) => d >= todayLocal(), "Tanggal tidak boleh sudah lewat"),
  contactPhone: z.string().min(1),
  message: z.string().max(300, "Maksimal 300 karakter"),
});

export type InquiryForm = z.infer<typeof inquirySchema>;

export function buildInquiryMessage(values: InquiryForm) {
  const occupant = occupantOptions.find((o) => o.value === values.occupant)?.label;
  const date = new Date(`${values.moveInDate}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return [
    `Halo, saya ${values.name}. Saya tertarik dengan Kost Fezia.`,
    `Penghuni: ${occupant}`,
    `Rencana masuk: ${date}`,
    values.message.trim() ? `Catatan: ${values.message.trim()}` : null,
    "Apakah masih ada kamar kosong?",
  ]
    .filter(Boolean)
    .join("\n");
}