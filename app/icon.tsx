import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#ff00ff",
            letterSpacing: -1,
          }}
        >
          CM
        </span>
      </div>
    ),
    { ...size }
  );
}
