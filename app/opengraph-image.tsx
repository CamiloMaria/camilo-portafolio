import { ImageResponse } from "next/og";

export const alt = "Camilo Maria | Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            display: "flex",
            background: "linear-gradient(90deg, #ff00ff, #bf00ff, #00ffff)",
          }}
        />

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            display: "flex",
            background: "linear-gradient(90deg, #00ffff, #bf00ff, #ff00ff)",
          }}
        />

        {/* Corner decorations */}
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            width: 40,
            height: 40,
            borderLeft: "3px solid #ff00ff",
            borderTop: "3px solid #ff00ff",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 30,
            width: 40,
            height: 40,
            borderRight: "3px solid #ff00ff",
            borderTop: "3px solid #ff00ff",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 30,
            width: 40,
            height: 40,
            borderLeft: "3px solid #00ffff",
            borderBottom: "3px solid #00ffff",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
            width: 40,
            height: 40,
            borderRight: "3px solid #00ffff",
            borderBottom: "3px solid #00ffff",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 20,
              color: "#bf00ff",
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>

          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ff00ff",
              letterSpacing: -1,
            }}
          >
            CAMILO MARIA
          </span>

          <div
            style={{
              width: 200,
              height: 2,
              display: "flex",
              background:
                "linear-gradient(90deg, transparent, #00ffff, transparent)",
              margin: "8px 0",
            }}
          />

          <span
            style={{
              fontSize: 28,
              color: "#00ffff",
              letterSpacing: 4,
            }}
          >
            Full Stack Developer
          </span>

          <span
            style={{
              fontSize: 16,
              color: "#666",
              letterSpacing: 2,
              marginTop: 16,
            }}
          >
            React &bull; TypeScript &bull; Next.js &bull; Node.js
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
