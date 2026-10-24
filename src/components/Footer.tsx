import { kostInfo } from "@/data/kost";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default async function Footer() {
  "use cache";

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-alt px-5 pb-28 pt-10 sm:pb-10">
      <div className="mx-auto max-w-5xl space-y-4 text-sm text-muted">
        <p className="text-lg font-bold text-foreground">{kostInfo.name}</p>
        <p>{kostInfo.address}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {kostInfo.contacts.map((c) => (
            <li key={c.phone}>
              <a
                href={buildWhatsAppLink(c.phone, "Halo, saya ingin bertanya tentang Kost Fezia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center font-medium text-emerald-700 dark:text-emerald-400"
              >
                WhatsApp {c.name}
              </a>
            </li>
          ))}
        </ul>
        <p>© {year} {kostInfo.name}</p>
      </div>
    </footer>
  );
}