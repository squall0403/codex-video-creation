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
import { BrandIcon, StatusBadge } from "./SceneLayout";

export const EmailCard = ({
  sender = "ParcelTrack",
  address = "delivery@parceltrack.example",
  subject = "Delivery attempt missed",
  action = "Review delivery",
  alert = false,
}) => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Email card"
      style={{
        height: "100%",
        backgroundColor: SURFACES.panel,
        border: `2px solid ${alert ? OPSWAT_COLORS.warning : SURFACES.panelBorder}`,
        borderRadius: RADII.large,
        padding: SPACING.lg,
        color: SURFACES.text,
        fontFamily: TYPOGRAPHY.primary,
        opacity: interpolate(frame, [0, MOTION.standard], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(frame, [0, MOTION.deliberate], ["70px 0px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: SPACING.md }}>
        <div
          style={{
            width: 72,
            height: 72,
            display: "grid",
            placeItems: "center",
            borderRadius: RADII.medium,
            backgroundColor: OPSWAT_COLORS.neutral900,
          }}
        >
          <BrandIcon
            src={alert ? ASSETS.icons.emailAlert : ASSETS.icons.email}
            size={48}
            name="Email icon"
          />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 30, fontWeight: TYPOGRAPHY.weights.bold }}>{sender}</div>
          <div
            style={{
              marginTop: SPACING.xs,
              color: OPSWAT_COLORS.neutral300,
              fontSize: TYPOGRAPHY.sizes.detail,
              overflowWrap: "anywhere",
            }}
          >
            {address}
          </div>
        </div>
      </div>
      <div
        style={{
          height: 2,
          margin: `${SPACING.lg}px 0`,
          backgroundColor: SURFACES.panelBorder,
        }}
      />
      <div style={{ fontSize: 38, fontWeight: TYPOGRAPHY.weights.bold, lineHeight: 1.15 }}>
        {subject}
      </div>
      <div
        style={{
          marginTop: SPACING.md,
          color: OPSWAT_COLORS.neutral300,
          fontSize: TYPOGRAPHY.sizes.label,
          lineHeight: 1.4,
        }}
      >
        We could not complete your request. Use the secure link below to review the details.
      </div>
      <div style={{ marginTop: SPACING.lg }}>
        <StatusBadge
          icon={ASSETS.icons.link}
          label={action}
          color={alert ? OPSWAT_COLORS.warning : OPSWAT_COLORS.blueLight}
        />
      </div>
    </Interactive.Div>
  );
};

