export interface Room {
  id: string;
  name: string;
  price: number;
  status: "available" | "full";
  facilities: string[];
  images: string[];
}

export interface ContactPerson {
  name: string;
  phone: string; // e.g. "6281287194001"
}

export interface KostInfo {
  name: string;
  address: string;
  description: string;
  nearbyPlaces: string[];
  contacts: ContactPerson[];
  mapEmbedUrl: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}