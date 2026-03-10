import { ImageResponse } from "next/server"

export const runtime = "edge"
export const alt = "CareerReturns — MBA ROI Calculator & Career Investment Tools"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Brand label */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: 24,
          }}
        >
          CareerReturns
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            textAlign: "center",
            background: "linear-gradient(90deg, #818cf8, #a78bfa, #c084fc)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 24,
          }}
        >
          MBA ROI Calculator
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          NPV · IRR · Break-Even · 12 Industries · 2026 Data
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 40,
            alignItems: "center",
          }}
        >
          {[
            { label: "IRR Range", value: "4%–55%" },
            { label: "Industries", value: "12 Tracks" },
            { label: "Analysis", value: "Free DCF" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: "20px 36px",
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 700, color: "#e2e8f0" }}>{stat.value}</div>
              <div style={{ fontSize: 14, color: "#64748b", marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#475569",
          }}
        >
          careerreturns.com
        </div>
      </div>
    ),
    { ...size }
  )
}
