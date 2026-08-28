import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {
  MOTION,
  OPSWAT_COLORS,
  RADII,
  SPACING,
  SURFACES,
  TYPOGRAPHY,
} from "../../theme";
import { ASSETS } from "../assets";
import { BrandIcon } from "./SceneLayout";

export const BrowserWindow = ({ suspicious = true, children }) => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Browser window"
      style={{
        height: "110%",
        overflow: "hidden",
        backgroundColor: SURFACES.panel,
        border: `2px solid ${SURFACES.panelBorder}`,
        borderRadius: RADII.large,
        opacity: interpolate(frame, [0, MOTION.standard], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(
          frame,
          [0, MOTION.deliberate],
          ["60px 0px", "0px 0px"],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          },
        ),
      }}
    >
      <div
        style={{
          height: 84,
          display: "flex",
          alignItems: "center",
          gap: SPACING.md,
          padding: `0 ${SPACING.lg}px`,
          backgroundColor: OPSWAT_COLORS.neutral900,
          borderBottom: `2px solid ${SURFACES.panelBorder}`,
        }}
      >
        <div style={{ display: "flex", gap: SPACING.xs }}>
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              style={{
                width: 12,
                height: 12,
                borderRadius: RADII.pill,
                backgroundColor: OPSWAT_COLORS.neutral500,
              }}
            />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: SPACING.sm,
            height: 48,
            padding: `0 ${SPACING.md}px`,
            backgroundColor: OPSWAT_COLORS.neutral1000,
            border: `2px solid ${suspicious ? OPSWAT_COLORS.warning : OPSWAT_COLORS.neutral800}`,
            borderRadius: RADII.small,
            color: SURFACES.text,
            fontFamily: TYPOGRAPHY.mono,
            fontSize: TYPOGRAPHY.sizes.detail,
          }}
        >
          <BrandIcon
            src={suspicious ? ASSETS.icons.warning : ASSETS.icons.lock}
            size={28}
            name="Address status icon"
          />
          {suspicious
            ? "accounts-example.verify-login.example"
            : "accounts.example.com"}
        </div>
      </div>
      <div style={{ height: "calc(100% - 84px)", padding: SPACING.lg }}>
        {children}
      </div>
    </Interactive.Div>
  );
};

export const LoginForm = ({ compromised = false }) => (
  <div
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: 560,
      margin: "0 auto",
      color: SURFACES.text,
      fontFamily: TYPOGRAPHY.primary,
    }}
  >
    <div style={{ fontSize: 42, fontWeight: TYPOGRAPHY.weights.bold }}>
      Sign in to continue
    </div>
    <div
      style={{
        marginTop: SPACING.sm,
        color: OPSWAT_COLORS.neutral300,
        fontSize: 26,
      }}
    >
      Confirm your account to review the request.
    </div>
    <Interactive.Div
      name="Username field"
      style={{
        marginTop: SPACING.md,
        padding: `${SPACING.sm}px ${SPACING.md}px`,
        border: `2px solid ${OPSWAT_COLORS.neutral800}`,
        borderRadius: RADII.small,
        backgroundColor: OPSWAT_COLORS.neutral900,
        color: OPSWAT_COLORS.neutral300,
        fontFamily: TYPOGRAPHY.primary,
        fontSize: 28,
      }}
    >
      alex@company.example
    </Interactive.Div>
    <Interactive.Div
      name="Password field"
      style={{
        marginTop: SPACING.md,
        padding: `${SPACING.sm}px ${SPACING.md}px`,
        border: `2px solid ${compromised ? OPSWAT_COLORS.warning : OPSWAT_COLORS.neutral800}`,
        borderRadius: RADII.small,
        backgroundColor: OPSWAT_COLORS.neutral900,
        color: OPSWAT_COLORS.white,
        fontFamily: TYPOGRAPHY.mono,
        fontSize: 28,
      }}
    >
      ••••••••••••
    </Interactive.Div>
    <div
      style={{
        marginTop: SPACING.lg,
        padding: `${SPACING.sm}px ${SPACING.lg}px`,
        alignSelf: "flex-start",
        backgroundColor: OPSWAT_COLORS.blue,
        borderRadius: RADII.pill,
        color: OPSWAT_COLORS.white,
        fontSize: 27,
        fontWeight: TYPOGRAPHY.weights.bold,
      }}
    >
      Verify account
    </div>
  </div>
);

export const Cursor = ({ }) => {
  const frame = useCurrentFrame();

  return (
    <Img
      name="Mouse cursor"
      src={staticFile(ASSETS.cursor)}
      style={{
        position: "absolute",
        width: 50,
        height: 50,
        objectFit: "contain",
        translate: interpolate(
          frame,
          [0, 120],
          ["143px -377.5px", "701.6px -55.3px"],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          },
        ),
      }}
    />
  );
};
