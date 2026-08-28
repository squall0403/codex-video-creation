import {
  Easing,
  Interactive,
  interpolate,
  Sequence,
  useCurrentFrame,
} from "remotion";
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

const ConsequenceCardContent = ({ consequence }) => (
  <>
    <BrandIcon
      src={consequence.icon}
      size={86}
      name={`${consequence.title} icon`}
    />
    <div
      style={{
        marginTop: SPACING.lg,
        fontSize: 38,
        fontWeight: TYPOGRAPHY.weights.bold,
      }}
    >
      {consequence.title}
    </div>
    <div
      style={{
        marginTop: SPACING.md,
        color: OPSWAT_COLORS.neutral300,
        fontSize: 27,
        lineHeight: 1.4,
      }}
    >
      {consequence.detail}
    </div>
  </>
);

const EmailAccessCard = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Email access card"
      style={{
        position: "relative",
        padding: `${SPACING.xl}px ${SPACING.lg}px ${SPACING.lg}px`,
        backgroundColor: SURFACES.panel,
        border: `2px solid ${SURFACES.panelBorder}`,
        borderRadius: RADII.large,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        opacity: interpolate(frame, [0, 24], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(frame, [0, 30], ["0px 48px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <ConsequenceCardContent consequence={consequences[0]} />
    </Interactive.Div>
  );
};

const SensitiveFilesCard = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Sensitive files card"
      style={{
        position: "relative",
        padding: `${SPACING.xl}px ${SPACING.lg}px ${SPACING.lg}px`,
        backgroundColor: SURFACES.panel,
        border: `2px solid ${SURFACES.panelBorder}`,
        borderRadius: RADII.large,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        opacity: interpolate(frame, [0, 24], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(frame, [0, 30], ["0px 48px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <ConsequenceCardContent consequence={consequences[1]} />
    </Interactive.Div>
  );
};

const CoworkerTargetingCard = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Coworker targeting card"
      style={{
        position: "relative",
        padding: `${SPACING.xl}px ${SPACING.lg}px ${SPACING.lg}px`,
        backgroundColor: SURFACES.panel,
        border: `2px solid ${OPSWAT_COLORS.warning}`,
        borderRadius: RADII.large,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        opacity: interpolate(frame, [0, 24], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(frame, [0, 30], ["0px 48px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <ConsequenceCardContent consequence={consequences[2]} />
    </Interactive.Div>
  );
};

export const ConsequencesScene = () => {
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
            <Sequence
              name="Consequence 01 - Email access"
              from={32}
              durationInFrames={220}
              layout="none"
            >
              <EmailAccessCard />
            </Sequence>
            <Sequence
              name="Consequence 02 - Sensitive files"
              from={76}
              durationInFrames={176}
              layout="none"
            >
              <SensitiveFilesCard />
            </Sequence>
            <Sequence
              name="Consequence 03 - Coworker targeting"
              from={120}
              durationInFrames={132}
              layout="none"
            >
              <CoworkerTargetingCard />
            </Sequence>
          </div>
        </div>
      </div>
    </SceneLayout>
  );
};
