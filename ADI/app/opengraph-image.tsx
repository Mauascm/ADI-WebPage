import { ImageResponse } from "next/og";
export const alt = "ADI — Tu equipo de Datos + IA. Sin construirlo desde cero.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#080e14",
          color: "#f1f4f5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#71def0",
            fontSize: 22,
            letterSpacing: 5,
          }}
        >
          ADI — DATA & AI OFFICE
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 65,
            letterSpacing: -3,
          }}
        >
          <span>Tu equipo de Datos + IA.</span>
          <span style={{ color: "#9eaab4" }}>Sin construirlo desde cero.</span>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 30,
            borderTop: "1px solid #34414b",
            fontSize: 20,
            letterSpacing: 4,
          }}
        >
          DATOS → DECISIONES → RESULTADOS
        </div>
      </div>
    ),
    { ...size },
  );
}
