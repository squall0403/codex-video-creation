import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  MOTION,
  OPSWAT_COLORS,
  RADII,
  SAFE_AREA,
  SPACING,
  SURFACES,
  TYPOGRAPHY,
} from "../../theme";
import { ASSETS } from "../assets";

const gridColumns = Array.from({ length: 13 });
const gridRows = Array.from({ length: 8 });

export const GridBackground = ({ animateIn = false }) => {
  const frame = useCurrentFrame();
  const gridOpacity = animateIn
    ? interpolate(frame, [0, MOTION.deliberate], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      })
    : 1;

  return (
    <AbsoluteFill style={{ backgroundColor: SURFACES.canvas, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: SAFE_AREA,
          opacity: gridOpacity,
        }}
      >
        {gridColumns.map((_, index) => (
          <div
            key={`column-${index}`}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${(index / (gridColumns.length - 1)) * 100}%`,
              width: 1,
              backgroundColor: OPSWAT_COLORS.neutral900,
            }}
          />
        ))}
        {gridRows.map((_, index) => (
          <div
            key={`row-${index}`}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${(index / (gridRows.length - 1)) * 100}%`,
              height: 1,
              backgroundColor: OPSWAT_COLORS.neutral900,
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: SAFE_AREA,
          top: SAFE_AREA,
          width: 76,
          height: 4,
          backgroundColor: OPSWAT_COLORS.blue,
          borderRadius: RADII.pill,
          translate: "0px -10px",
        }}
      />
    </AbsoluteFill>
  );
};

export const BrandLogo = ({ compact = false }) => (
  <Img
    name={compact ? "OPSWAT logo" : "OPSWAT logo with tagline"}
    src={staticFile(compact ? ASSETS.logoSecondary : ASSETS.logoPrimary)}
    style={{
      width: compact ? 250 : 360,
      height: compact ? 56 : 82,
      objectFit: "contain",
      objectPosition: "left center",
    }}
  />
);

export const BrandIcon = ({ src, size = 64, name = "Brand icon" }) => (
  <Img
    name={name}
    src={staticFile(src)}
    style={{ width: size, height: size, objectFit: "contain" }}
  />
);

export const AnimatedTitle = ({ eyebrow, title, align = "left" }) => {
  const frame = useCurrentFrame();

  return (
    <div style={{ textAlign: align, maxWidth: 1240 }}>
      {eyebrow ? (
        <Interactive.Div
          name="Scene label"
          style={{
            color: OPSWAT_COLORS.blueLight,
            fontFamily: TYPOGRAPHY.primary,
            fontSize: TYPOGRAPHY.sizes.label,
            fontWeight: TYPOGRAPHY.weights.medium,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: interpolate(frame, [0, MOTION.standard], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          {eyebrow}
        </Interactive.Div>
      ) : null}
      <Interactive.Div
        name="Scene title"
        style={{
          color: SURFACES.text,
          fontFamily: TYPOGRAPHY.primary,
          fontSize: TYPOGRAPHY.sizes.headline,
          fontWeight: TYPOGRAPHY.weights.bold,
          lineHeight: 1.05,
          marginTop: eyebrow ? SPACING.sm : 0,
          opacity: interpolate(frame, [4, MOTION.deliberate], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [4, MOTION.deliberate], ["0px 28px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {title}
      </Interactive.Div>
    </div>
  );
};

export const SceneLayout = ({
  eyebrow,
  title,
  children,
  header = true,
  holdFinalFrame = false,
  animateGrid = false,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const sceneOpacity = holdFinalFrame
    ? interpolate(frame, [0, MOTION.standard], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      })
    : interpolate(
        frame,
        [0, MOTION.standard, durationInFrames - MOTION.standard, durationInFrames - 1],
        [0, 1, 1, 0],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: [
            Easing.bezier(0.16, 1, 0.3, 1),
            Easing.linear,
            Easing.bezier(0.7, 0, 0.84, 0),
          ],
        },
      );

  return (
    <AbsoluteFill style={{ backgroundColor: SURFACES.canvas, overflow: "hidden" }}>
      <GridBackground animateIn={animateGrid} />
      <div
        style={{
          position: "absolute",
          inset: SAFE_AREA,
          display: "flex",
          flexDirection: "column",
          opacity: sceneOpacity,
        }}
      >
        {header ? <AnimatedTitle eyebrow={eyebrow} title={title} /> : null}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            marginTop: header ? SPACING.lg : 0,
          }}
        >
          {children}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Panel = ({ children, style = {} }) => (
  <div
    style={{
      backgroundColor: SURFACES.panel,
      border: `2px solid ${SURFACES.panelBorder}`,
      borderRadius: RADII.large,
      padding: SPACING.lg,
      ...style,
    }}
  >
    {children}
  </div>
);

export const StatusBadge = ({ icon, label, color = OPSWAT_COLORS.blueLight }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: SPACING.sm,
      minHeight: 48,
      padding: `${SPACING.xs}px ${SPACING.md}px`,
      border: `2px solid ${color}`,
      borderRadius: RADII.pill,
      color: SURFACES.text,
      backgroundColor: SURFACES.panel,
      fontFamily: TYPOGRAPHY.primary,
      fontSize: TYPOGRAPHY.sizes.detail,
      fontWeight: TYPOGRAPHY.weights.medium,
    }}
  >
    <BrandIcon src={icon} size={28} name={`${label} icon`} />
    {label}
  </div>
);

export const SectionLabel = ({ children }) => (
  <div
    style={{
      color: OPSWAT_COLORS.neutral500,
      fontFamily: TYPOGRAPHY.primary,
      fontSize: TYPOGRAPHY.sizes.detail,
      fontWeight: TYPOGRAPHY.weights.medium,
      letterSpacing: 1.2,
      textTransform: "uppercase",
    }}
  >
    {children}
  </div>
);
