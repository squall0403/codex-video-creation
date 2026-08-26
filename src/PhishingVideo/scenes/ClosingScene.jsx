import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
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
  BrandLogo,
  SceneLayout,
} from "../components/SceneLayout";

export const ClosingScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneLayout header={false} holdFinalFrame>
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "430px 1fr",
          gap: SPACING.xxl,
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 390,
            height: 390,
            display: "grid",
            placeItems: "center",
            backgroundColor: SURFACES.panel,
            border: `3px solid ${OPSWAT_COLORS.success}`,
            borderRadius: RADII.large,
            scale: interpolate(frame, [0, 26], [0.86, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        >
          <BrandIcon src={ASSETS.icons.email} size={190} name="Protected inbox" />
          <div
            style={{
              position: "absolute",
              right: 58,
              bottom: 54,
              width: 116,
              height: 116,
              display: "grid",
              placeItems: "center",
              backgroundColor: OPSWAT_COLORS.navy,
              border: `3px solid ${OPSWAT_COLORS.success}`,
              borderRadius: RADII.pill,
              opacity: interpolate(frame, [22, 46], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          >
            <BrandIcon src={ASSETS.icons.lock} size={72} name="Inbox lock" />
          </div>
        </div>
        <div>
          <Interactive.Div
            name="Closing message"
            style={{
              color: SURFACES.text,
              fontFamily: TYPOGRAPHY.primary,
              fontSize: 74,
              fontWeight: TYPOGRAPHY.weights.bold,
              lineHeight: 1.05,
              opacity: interpolate(frame, [10, 34], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
              translate: interpolate(frame, [10, 34], ["0px 36px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          >
            Don’t interact. Report it.
          </Interactive.Div>
          <div
            style={{
              marginTop: SPACING.lg,
              maxWidth: 900,
              color: OPSWAT_COLORS.neutral300,
              fontFamily: TYPOGRAPHY.primary,
              fontSize: TYPOGRAPHY.sizes.body,
              lineHeight: 1.4,
              opacity: interpolate(frame, [28, 52], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          >
            Use your organization’s approved security channel whenever something feels suspicious.
          </div>
          <div style={{ marginTop: SPACING.xl }}>
            <BrandLogo compact />
          </div>
        </div>
      </div>
    </SceneLayout>
  );
};
