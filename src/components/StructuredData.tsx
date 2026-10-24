import { kostInfo, rooms } from "@/data/kost";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: kostInfo.name,
    description: kostInfo.description,
    telephone: `+${kostInfo.contacts[0].phone}`,
    priceRange: `Rp${Math.min(...rooms.map((r) => r.price)).toLocaleString("id-ID")}+`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gg. Caringin Tonggoh, Ds. Nyangkowek",
      addressLocality: "Cicurug",
      addressRegion: "Jawa Barat",
      postalCode: "43359",
      addressCountry: "ID",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}