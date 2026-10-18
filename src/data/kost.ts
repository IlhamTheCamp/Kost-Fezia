import { KostInfo, Room, GalleryImage } from "@/types";

export const kostInfo: KostInfo = {
  name: "Kost Fezia",
  address: "Gg. Caringin Tonggoh, Ds. Nyangkowek, Kec. Cicurug, Kab. Sukabumi, Jawa Barat 43359",
  description:
    "Kost nyaman dan terjangkau di Kec. Cicurug, Kab. Sukabumi, mulai dari Rp450.000/bulan sudah termasuk listrik dan air PAM.",
  nearbyPlaces: [
    "Jalan Utama",
    "Pom Bensin",
    "Indomaret/Alfamart",
    "Stasiun Kereta Cicurug",
    "Sekolah SD, SMP, SMA",
    "Bank BRI & Bank Syariah Mandiri",
  ],
  contacts: [
    { name: "Ibu Risnawati", phone: "6281287194001" },
    { name: "Bapak Djuhana", phone: "628158858098" },
  ],
  mapEmbedUrl:
    "https://maps-api-ssl.google.com/maps?hl=en-US&ll=-6.796998,106.77832&output=embed&q=Gg.+Caringin,+Cicurug,+Sukabumi&z=17",
};

export const rooms: Room[] = [
  {
    id: "standard",
    name: "Kamar Standard",
    price: 450000,
    status: "available",
    facilities: ["Kasur", "Bantal", "Lemari", "TV", "Listrik & Air Termasuk"],
    images: [], // fill with your photo paths
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/images/kamar-1.jpg", alt: "Kamar kost dengan kasur dan lemari" },
  { src: "/images/kamar-2.jpg", alt: "Kamar kost dengan TV" },
  { src: "/images/parkir.jpg", alt: "Area parkir motor" },
];