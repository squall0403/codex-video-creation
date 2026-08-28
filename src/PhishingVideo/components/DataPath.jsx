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
  const dotProgress = Math.max(0, Math.min(1, progress));

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
      <div
        style={{
          position: "absolute",
          left: dotProgress * 610,
          top: 80 + Math.sin(dotProgress * Math.PI * 2) * 44,
          width: 100,
          height: 100,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" id="FILES" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke={compromised ? OPSWAT_COLORS.warning : OPSWAT_COLORS.teal}
            strokeMiterlimit="10"
          >
            <path d="M15.67,19.37l-3.41,2.06c-.16.1-.36.1-.52,0l-3.41-2.06c-2.38-1.43-3.83-4.02-3.83-6.81v-7.74c0-.2.12-.39.31-.46l1.15-.46" />
            <path d="M8,3.07l3.82-1.54c.12-.05.25-.05.37,0l7,2.82c.19.08.31.26.31.46v7.74c0,2.02-.76,3.93-2.09,5.38" />
            <circle cx="12" cy="7.5" r="2" />
            <polyline points="12 9.5 12 16.5 14 16.5" />
            <line x1="12" y1="14.5" x2="14" y2="14.5" />
          </g>
        </svg>
      </div>
    </div>
  );
};
