import { interpolate, useCurrentFrame } from "remotion";
import { OPSWAT_COLORS, RADII } from "../../theme";

export const DataPath = ({ startFrame = 0, compromisedFrame = 90 }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pathLength = 620;
  const compromised = frame >= compromisedFrame;

  return (
    <div style={{ position: "relative", width: 660, height: 190 }}>
      <svg viewBox="0 0 660 190" style={{ position: "absolute", inset: 0 }}>
        <path
          d="M20 95 C175 20 390 170 640 95"
          fill="none"
          stroke={OPSWAT_COLORS.neutral800}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M20 95 C175 20 390 170 640 95"
          fill="none"
          stroke={compromised ? OPSWAT_COLORS.warning : OPSWAT_COLORS.teal}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength - pathLength * progress}
        />
      </svg>
      {[0, 1, 2].map((index) => {
        const dotProgress = Math.max(0, Math.min(1, progress - index * 0.12));
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: 18 + dotProgress * 610,
              top: 80 + Math.sin(dotProgress * Math.PI * 2) * 44,
              width: 28,
              height: 28,
              borderRadius: RADII.pill,
              backgroundColor: compromised
                ? OPSWAT_COLORS.warning
                : OPSWAT_COLORS.teal,
              border: `4px solid ${OPSWAT_COLORS.midnight}`,
            }}
          />
        );
      })}
    </div>
  );
};

