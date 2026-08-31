import { AbsoluteFill, Interactive, useCurrentFrame, useVideoConfig } from "remotion";
import {
  CAPTION_LAYOUT,
  OPSWAT_COLORS,
  RADII,
  SAFE_AREA,
  SPACING,
  TYPOGRAPHY,
} from "../../theme";
import captions from "../captions.json";

export const CaptionOverlay = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const timeMs = (frame / fps) * 1000;
  const caption = captions.find(
    (entry) => timeMs >= entry.startMs && timeMs < entry.endMs,
  );

  if (!caption) {
    return null;
  }

  return (
    <AbsoluteFill
      name="Captions"
      style={{
        zIndex: 10,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: `0 ${SAFE_AREA}px ${SAFE_AREA}px`,
        pointerEvents: "none",
      }}
    >
      <Interactive.Div
        name="Current caption"
        style={{
          maxWidth: CAPTION_LAYOUT.maxWidth,
          padding: `${SPACING.sm}px ${SPACING.lg}px`,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          backgroundColor: OPSWAT_COLORS.neutral1200,
          border: `2px solid ${OPSWAT_COLORS.neutral800}`,
          borderRadius: RADII.medium,
          color: OPSWAT_COLORS.white,
          fontFamily: TYPOGRAPHY.primary,
          fontSize: TYPOGRAPHY.sizes.caption,
          fontWeight: TYPOGRAPHY.weights.regular,
          lineHeight: 1.3,
          textAlign: "center",
        }}
        hidden
      >
        {caption.text}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
