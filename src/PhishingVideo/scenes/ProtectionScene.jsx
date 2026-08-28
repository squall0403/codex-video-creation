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

const ProtectionActionContent = ({ action }) => (
  <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
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
    <div
      style={{
        marginTop: SPACING.xl,
        fontSize: 40,
        fontWeight: TYPOGRAPHY.weights.bold,
      }}
    >
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
  </>
);

const CheckSenderCard = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Check the sender card"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: SPACING.lg,
        backgroundColor: SURFACES.panel,
        border: `2px solid ${SURFACES.panelBorder}`,
        borderRadius: RADII.large,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        opacity: interpolate(frame, [71, 95], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: [Easing.bezier(0.16, 1, 0.3, 2)],
        }),
        translate: interpolate(frame, [71, 101], ["0px 54px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: [Easing.bezier(0.16, 1, 0.3, 1)],
        }),
      }}
    >
      <ProtectionActionContent action={actions[0]} />
    </Interactive.Div>
  );
};

const InspectLinkCard = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Inspect the link card"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: SPACING.lg,
        backgroundColor: SURFACES.panel,
        border: `2px solid ${SURFACES.panelBorder}`,
        borderRadius: RADII.large,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        opacity: interpolate(frame, [71, 95], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: [Easing.bezier(0.16, 1, 0.3, 2)],
        }),
        translate: interpolate(frame, [71, 101], ["0px 54px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: [Easing.bezier(0.16, 1, 0.3, 1)],
        }),
      }}
    >
      <ProtectionActionContent action={actions[1]} />
    </Interactive.Div>
  );
};

const ReportItCard = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Report it card"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: SPACING.lg,
        backgroundColor: SURFACES.panel,
        border: `2px solid ${OPSWAT_COLORS.success}`,
        borderRadius: RADII.large,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        opacity: interpolate(frame, [71, 95], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: [Easing.bezier(0.16, 1, 0.3, 2)],
        }),
        translate: interpolate(frame, [71, 101], ["0px 54px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: [Easing.bezier(0.16, 1, 0.3, 1)],
        }),
      }}
    >
      <ProtectionActionContent action={actions[2]} />
    </Interactive.Div>
  );
};

export const ProtectionScene = () => {
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
          <Sequence
            name="Action 01 - Check the sender"
            from={95}
            layout="none"
            durationInFrames={215}
            trimBefore={71}
          >
            <CheckSenderCard />
          </Sequence>
          <Sequence
            name="Action 02 - Inspect the link"
            from={95}
            layout="none"
            durationInFrames={215}
            trimBefore={19}
          >
            <InspectLinkCard />
          </Sequence>
          <Sequence
            name="Action 03 - Report it"
            from={116}
            layout="none"
            durationInFrames={215}
            trimBefore={21}
          >
            <ReportItCard />
          </Sequence>
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
