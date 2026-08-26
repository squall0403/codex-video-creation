import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import {
  MOTION,
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

export const TitleScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneLayout header={false} animateGrid>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <BrandLogo />
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            alignItems: "center",
            gap: SPACING.xxl,
          }}
        >
          <div>
            <Interactive.Div
              name="Title"
              style={{
                maxWidth: 1040,
                color: SURFACES.text,
                fontFamily: TYPOGRAPHY.primary,
                fontSize: TYPOGRAPHY.sizes.impact,
                fontWeight: TYPOGRAPHY.weights.bold,
                lineHeight: 1,
                opacity: interpolate(frame, [5, MOTION.deliberate], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }),
                translate: interpolate(frame, [5, MOTION.deliberate], ["0px 42px", "0px 0px"], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }),
              }}
            >
              How phishing attacks work
            </Interactive.Div>
            <Interactive.Div
              name="Subtitle"
              style={{
                marginTop: SPACING.lg,
                color: OPSWAT_COLORS.neutral300,
                fontFamily: TYPOGRAPHY.primary,
                fontSize: TYPOGRAPHY.sizes.body,
                lineHeight: 1.35,
                opacity: interpolate(frame, [18, 38], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }),
              }}
            >
              A familiar message can hide an unfamiliar destination.
            </Interactive.Div>
          </div>
          <div>
          <Interactive.Div
            name="Icon Holder"
            style={{
              height: 320,
              width: 320,
              display: "grid",
              placeItems: "center",
              justifySelf: "end",
              backgroundColor: OPSWAT_COLORS.blue,
              border: `2px solid ${OPSWAT_COLORS.neutral800}`,
              borderRadius: RADII.large,
              scale: interpolate(frame, [8, 34], [0.85, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200 }),
                output: "perceptual-scale",
              }),
            }}
          >
            <BrandIcon
              src={ASSETS.icons.antiPhishing}
              size={190}
              name="Anti-phishing shield"
            />
          </Interactive.Div>
          </div>
        </div>
      </div>
    </SceneLayout>
  );
};
