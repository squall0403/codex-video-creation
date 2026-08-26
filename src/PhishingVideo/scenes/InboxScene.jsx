import { Easing, interpolate, useCurrentFrame } from "remotion";
import {
  OPSWAT_COLORS,
  RADII,
  SPACING,
  SURFACES,
  TYPOGRAPHY,
} from "../../theme";
import { EmailCard } from "../components/EmailCard";
import { SceneLayout, SectionLabel } from "../components/SceneLayout";

const inboxItems = [
  ["Facilities", "Badge access update"],
  ["ParcelTrack", "Delivery attempt missed"],
  ["Manager", "Quick request"],
];

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
            {inboxItems.map(([sender, subject], index) => (
              <div
                key={sender}
                style={{
                  padding: `${SPACING.md}px ${SPACING.sm}px`,
                  borderTop: index === 0 ? "none" : `2px solid ${SURFACES.panelBorder}`,
                  backgroundColor:
                    index === 1 && frame > 55
                      ? OPSWAT_COLORS.neutral900
                      : OPSWAT_COLORS.neutral1000,
                  color: SURFACES.text,
                  fontFamily: TYPOGRAPHY.primary,
                }}
              >
                <div style={{ fontSize: 28, fontWeight: TYPOGRAPHY.weights.bold }}>{sender}</div>
                <div style={{ marginTop: SPACING.xs, color: OPSWAT_COLORS.neutral300, fontSize: 25 }}>
                  {subject}
                </div>
              </div>
            ))}
          </div>
        </div>
        <EmailCard />
      </div>
    </SceneLayout>
  );
};

