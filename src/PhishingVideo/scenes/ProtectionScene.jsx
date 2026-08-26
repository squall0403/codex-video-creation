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

const actions = [
  {
    step: "01",
    title: "Check the sender",
    detail: "Open the full address—not only the display name.",
    icon: ASSETS.icons.userIsoBlue,
  },
  {
    step: "02",
    title: "Inspect the link",
    detail: "Hover first and read the complete destination.",
    icon: ASSETS.icons.threatPhishingIsoRed,
  },
  {
    step: "03",
    title: "Report it",
    detail: "Use your organization’s approved security channel.",
    icon: ASSETS.icons.threatWarningIsoBlue,
  },
];

export const ProtectionScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneLayout eyebrow="Protection" title="Pause. Inspect. Report.">
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: SPACING.lg,
            flex: 1,
          }}
        >
          {actions.map((action, index) => (
            <div
              key={action.step}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: SPACING.lg,
                backgroundColor: SURFACES.panel,
                border: `2px solid ${index === 2 ? OPSWAT_COLORS.success : SURFACES.panelBorder}`,
                borderRadius: RADII.large,
                color: SURFACES.text,
                fontFamily: TYPOGRAPHY.primary,
                opacity: interpolate(frame, [24 + index * 52, 48 + index * 52], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }),
                translate: interpolate(
                  frame,
                  [24 + index * 52, 54 + index * 52],
                  ["0px 54px", "0px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  },
                ),
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <BrandIcon src={action.icon} size={88} name={`${action.title} icon`} />
                <div
                  style={{
                    color: OPSWAT_COLORS.blueLight,
                    fontFamily: TYPOGRAPHY.mono,
                    fontSize: 42,
                  }}
                >
                  {action.step}
                </div>
              </div>
              <div style={{ marginTop: SPACING.xl, fontSize: 40, fontWeight: TYPOGRAPHY.weights.bold }}>
                {action.title}
              </div>
              <div
                style={{
                  marginTop: SPACING.md,
                  color: OPSWAT_COLORS.neutral300,
                  fontSize: 28,
                  lineHeight: 1.4,
                }}
              >
                {action.detail}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: SPACING.lg,
            padding: `${SPACING.md}px ${SPACING.lg}px`,
            backgroundColor: OPSWAT_COLORS.neutral900,
            borderRadius: RADII.medium,
            color: OPSWAT_COLORS.neutral100,
            fontFamily: TYPOGRAPHY.primary,
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Treat unexpected requests and urgent language as reasons to slow down.
        </div>
      </div>
    </SceneLayout>
  );
};

