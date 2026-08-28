import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import {
  OPSWAT_COLORS,
  RADII,
  SPACING,
  SURFACES,
  TYPOGRAPHY,
} from "../../theme";
import { EmailCard } from "../components/EmailCard";
import { SceneLayout, SectionLabel } from "../components/SceneLayout";

export const InboxScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneLayout eyebrow="The ordinary email" title="It looks like another workday message.">
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "0.82fr 1.18fr",
          gap: SPACING.lg,
        }}
      >
        <div
          style={{
            backgroundColor: SURFACES.panel,
            border: `2px solid ${SURFACES.panelBorder}`,
            borderRadius: RADII.large,
            padding: SPACING.lg,
            opacity: interpolate(frame, [0, 18], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <SectionLabel>Inbox · 3 new</SectionLabel>
          <div style={{ marginTop: SPACING.md }}>
            <Interactive.Div
              name="Facilities inbox row"
              style={{
                padding: `${SPACING.md}px ${SPACING.sm}px`,
                backgroundColor: OPSWAT_COLORS.neutral1000,
                color: SURFACES.text,
                fontFamily: TYPOGRAPHY.primary,
              }}
            >
              <div style={{ fontSize: 28, fontWeight: TYPOGRAPHY.weights.bold }}>
                Facilities
              </div>
              <div
                style={{
                  marginTop: SPACING.xs,
                  color: OPSWAT_COLORS.neutral300,
                  fontSize: 25,
                }}
              >
                Badge access update
              </div>
            </Interactive.Div>
            <Interactive.Div
              name="ParcelTrack inbox row"
              style={{
                padding: `${SPACING.md}px ${SPACING.sm}px`,
                borderTop: `2px solid ${SURFACES.panelBorder}`,
                backgroundColor:
                  frame > 55
                    ? OPSWAT_COLORS.neutral900
                    : OPSWAT_COLORS.neutral1000,
                color: SURFACES.text,
                fontFamily: TYPOGRAPHY.primary,
              }}
            >
              <div style={{ fontSize: 28, fontWeight: TYPOGRAPHY.weights.bold }}>
                ParcelTrack
              </div>
              <div
                style={{
                  marginTop: SPACING.xs,
                  color: OPSWAT_COLORS.neutral300,
                  fontSize: 25,
                }}
              >
                Delivery attempt missed
              </div>
            </Interactive.Div>
            <Interactive.Div
              name="Manager inbox row"
              style={{
                padding: `${SPACING.md}px ${SPACING.sm}px`,
                borderTop: `2px solid ${SURFACES.panelBorder}`,
                backgroundColor: OPSWAT_COLORS.neutral1000,
                color: SURFACES.text,
                fontFamily: TYPOGRAPHY.primary,
              }}
            >
              <div style={{ fontSize: 28, fontWeight: TYPOGRAPHY.weights.bold }}>
                Manager
              </div>
              <div
                style={{
                  marginTop: SPACING.xs,
                  color: OPSWAT_COLORS.neutral300,
                  fontSize: 25,
                }}
              >
                Quick request
              </div>
            </Interactive.Div>
          </div>
        </div>
        <EmailCard />
      </div>
    </SceneLayout>
  );
};
