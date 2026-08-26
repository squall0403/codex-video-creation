import { Easing, interpolate, useCurrentFrame } from "remotion";
import {
  OPSWAT_COLORS,
  RADII,
  SPACING,
  SURFACES,
  TYPOGRAPHY,
} from "../../theme";
import { ASSETS } from "../assets";
import {
  BrandIcon,
  SceneLayout,
  StatusBadge,
} from "../components/SceneLayout";

const consequences = [
  {
    title: "Email access",
    detail: "Read messages and reset connected accounts",
    icon: ASSETS.icons.emailAlert,
  },
  {
    title: "Sensitive files",
    detail: "Find documents shared through the account",
    icon: ASSETS.icons.document,
  },
  {
    title: "Coworker targeting",
    detail: "Send convincing messages from your identity",
    icon: ASSETS.icons.users,
  },
];

export const ConsequencesScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneLayout eyebrow="The consequences" title="One compromised account can widen the attack.">
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ alignSelf: "center" }}>
          <StatusBadge
            icon={ASSETS.icons.emailAlert}
            label="Account compromised"
            color={OPSWAT_COLORS.danger}
          />
        </div>
        <div style={{ position: "relative", flex: 1, marginTop: SPACING.lg }}>
          <div
            style={{
              position: "absolute",
              left: "16.67%",
              right: "16.67%",
              top: 52,
              height: 4,
              backgroundColor: OPSWAT_COLORS.neutral800,
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: SPACING.lg,
              height: "100%",
            }}
          >
            {consequences.map((item, index) => (
              <div
                key={item.title}
                style={{
                  position: "relative",
                  padding: `${SPACING.xl}px ${SPACING.lg}px ${SPACING.lg}px`,
                  backgroundColor: SURFACES.panel,
                  border: `2px solid ${index === 2 ? OPSWAT_COLORS.warning : SURFACES.panelBorder}`,
                  borderRadius: RADII.large,
                  color: SURFACES.text,
                  fontFamily: TYPOGRAPHY.primary,
                  opacity: interpolate(frame, [32 + index * 44, 56 + index * 44], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  }),
                  translate: interpolate(
                    frame,
                    [32 + index * 44, 62 + index * 44],
                    ["0px 48px", "0px 0px"],
                    {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: Easing.bezier(0.16, 1, 0.3, 1),
                    },
                  ),
                }}
              >
                <BrandIcon src={item.icon} size={86} name={`${item.title} icon`} />
                <div style={{ marginTop: SPACING.lg, fontSize: 38, fontWeight: TYPOGRAPHY.weights.bold }}>
                  {item.title}
                </div>
                <div
                  style={{
                    marginTop: SPACING.md,
                    color: OPSWAT_COLORS.neutral300,
                    fontSize: 27,
                    lineHeight: 1.4,
                  }}
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SceneLayout>
  );
};

