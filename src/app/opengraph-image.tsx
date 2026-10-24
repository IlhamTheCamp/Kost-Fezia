import { ImageResponse } from "next/og";

export const alt = "Kost Fezia – Kost nyaman di Cicurug, Sukabumi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #059669, #134e4a)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 36, opacity: 0.8 }}>Kost Umum · Cicurug, Sukabumi</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>Kost Fezia</div>
        <div style={{ fontSize: 40, marginTop: 24 }}>
          Mulai Rp450.000/bulan · listrik & air termasuk
        </div>
      </div>
    ),
    size
  );
}