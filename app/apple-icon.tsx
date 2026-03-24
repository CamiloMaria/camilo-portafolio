import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            border: "3px solid #ff00ff",
            borderRadius: 24,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ff00ff",
              letterSpacing: -2,
            }}
          >
            CM
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
