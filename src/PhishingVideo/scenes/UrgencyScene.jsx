import { Easing, interpolate, useCurrentFrame } from "remotion";
import {
  OPSWAT_COLORS,
  RADII,
  SPACING,
  SURFACES,
  TYPOGRAPHY,
} from "../../theme";
import { ASSETS } from "../assets";
import { BrandIcon, SceneLayout } from "../components/SceneLayout";

const pressurePhrases = ["Act now.", "Verify your account.", "Open this invoice."];

export const UrgencyScene = () => {
  const frame = useCurrentFrame();
  const seconds = Math.max(0, 10 - Math.floor(frame / 30));

  return (
    <SceneLayout eyebrow="The hook" title="Pressure is designed to outrun judgment.">
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 390px",
          gap: SPACING.xl,
          alignItems: "center",
        }}
      >
        <div style={{ display: "grid", gap: SPACING.md }}>
          {pressurePhrases.map((phrase, index) => (
            <div
              key={phrase}
              style={{
                minHeight: 104,
                display: "flex",
                alignItems: "center",
                gap: SPACING.md,
                padding: `${SPACING.md}px ${SPACING.lg}px`,
                backgroundColor: SURFACES.panel,
                border: `2px solid ${index === 0 ? OPSWAT_COLORS.warning : SURFACES.panelBorder}`,
                borderRadius: RADII.medium,
                color: SURFACES.text,
                fontFamily: TYPOGRAPHY.primary,
                fontSize: 42,
                fontWeight: TYPOGRAPHY.weights.bold,
                opacity: interpolate(frame, [20 + index * 28, 36 + index * 28], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }),
                translate: interpolate(
                  frame,
                  [20 + index * 28, 42 + index * 28],
                  ["-60px 0px", "0px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  },
                ),
              }}
            >
              <BrandIcon
                src={index === 2 ? ASSETS.icons.document : ASSETS.icons.warning}
                size={48}
                name={`${phrase} icon`}
              />
              {phrase}
            </div>
          ))}
        </div>
        <div
          style={{
            width: 340,
            height: 340,
            display: "grid",
            placeItems: "center",
            justifySelf: "center",
            border: `12px solid ${frame > 150 ? OPSWAT_COLORS.warning : OPSWAT_COLORS.neutral800}`,
            borderRadius: RADII.pill,
            backgroundColor: SURFACES.panel,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: OPSWAT_COLORS.white,
                fontFamily: TYPOGRAPHY.mono,
                fontSize: 112,
                lineHeight: 1,
              }}
            >
              {String(seconds).padStart(2, "0")}
            </div>
            <div
              style={{
                marginTop: SPACING.sm,
                color: OPSWAT_COLORS.neutral300,
                fontFamily: TYPOGRAPHY.primary,
                fontSize: 25,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              seconds left
            </div>
          </div>
        </div>
      </div>
    </SceneLayout>
  );
};

