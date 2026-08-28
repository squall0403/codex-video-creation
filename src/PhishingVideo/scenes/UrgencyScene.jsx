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

const pressurePhrases = ["Act now.", "Verify your account.", "Open this invoice."];

const PressurePhraseContent = ({ phrase, icon }) => (
  <>
    <BrandIcon src={icon} size={48} name={`${phrase} icon`} />
    {phrase}
  </>
);

const ActNowPhrase = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Act now phrase"
      style={{
        minHeight: 104,
        display: "flex",
        alignItems: "center",
        gap: SPACING.md,
        padding: `${SPACING.md}px ${SPACING.lg}px`,
        backgroundColor: SURFACES.panel,
        border: `2px solid ${OPSWAT_COLORS.warning}`,
        borderRadius: RADII.medium,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        fontSize: 42,
        fontWeight: TYPOGRAPHY.weights.bold,
        opacity: interpolate(frame, [0, 16], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(frame, [0, 22], ["-60px 0px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <PressurePhraseContent
        phrase={pressurePhrases[0]}
        icon={ASSETS.icons.warning}
      />
    </Interactive.Div>
  );
};

const VerifyAccountPhrase = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Verify your account phrase"
      style={{
        minHeight: 104,
        display: "flex",
        alignItems: "center",
        gap: SPACING.md,
        padding: `${SPACING.md}px ${SPACING.lg}px`,
        backgroundColor: SURFACES.panel,
        border: `2px solid ${SURFACES.panelBorder}`,
        borderRadius: RADII.medium,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        fontSize: 42,
        fontWeight: TYPOGRAPHY.weights.bold,
        opacity: interpolate(frame, [0, 16], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(frame, [0, 22], ["-60px 0px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <PressurePhraseContent
        phrase={pressurePhrases[1]}
        icon={ASSETS.icons.warning}
      />
    </Interactive.Div>
  );
};

const OpenInvoicePhrase = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Open this invoice phrase"
      style={{
        minHeight: 104,
        display: "flex",
        alignItems: "center",
        gap: SPACING.md,
        padding: `${SPACING.md}px ${SPACING.lg}px`,
        backgroundColor: SURFACES.panel,
        border: `2px solid ${SURFACES.panelBorder}`,
        borderRadius: RADII.medium,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        fontSize: 42,
        fontWeight: TYPOGRAPHY.weights.bold,
        opacity: interpolate(frame, [0, 16], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(frame, [0, 22], ["-60px 0px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <PressurePhraseContent
        phrase={pressurePhrases[2]}
        icon={ASSETS.icons.document}
      />
    </Interactive.Div>
  );
};

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
          <Sequence
              name="Pressure 01 - Act now"
              from={20}
              durationInFrames={234}
            layout="none"
          >
            <ActNowPhrase />
          </Sequence>
          <Sequence
              name="Pressure 02 - Verify your account"
              from={48}
              durationInFrames={206}
            layout="none"
          >
            <VerifyAccountPhrase />
          </Sequence>
          <Sequence
              name="Pressure 03 - Open this invoice"
              from={76}
              durationInFrames={178}
            layout="none"
          >
            <OpenInvoicePhrase />
          </Sequence>
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
