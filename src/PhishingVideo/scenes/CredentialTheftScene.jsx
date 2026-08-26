import { Easing, interpolate, useCurrentFrame } from "remotion";
import {
  OPSWAT_COLORS,
  RADII,
  SPACING,
  SURFACES,
  TYPOGRAPHY,
} from "../../theme";
import { ASSETS } from "../assets";
import { LoginForm } from "../components/BrowserWindow";
import { DataPath } from "../components/DataPath";
import {
  BrandIcon,
  Panel,
  SceneLayout,
  StatusBadge,
} from "../components/SceneLayout";

export const CredentialTheftScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneLayout eyebrow="Credential theft" title="Submitted information goes to the attacker.">
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "0.8fr 1.15fr 0.55fr",
          gap: SPACING.lg,
          alignItems: "center",
        }}
      >
        <Panel style={{ height: 430, padding: SPACING.md }}>
          <LoginForm compromised />
        </Panel>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <DataPath startFrame={42} compromisedFrame={116} />
          <div
            style={{
              marginTop: SPACING.md,
              color: OPSWAT_COLORS.neutral300,
              fontFamily: TYPOGRAPHY.primary,
              fontSize: 27,
              textAlign: "center",
            }}
          >
            Username · password · verification code
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: SPACING.lg,
            opacity: interpolate(frame, [104, 142], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div
            style={{
              width: 190,
              height: 190,
              display: "grid",
              placeItems: "center",
              backgroundColor: SURFACES.panel,
              border: `3px solid ${frame > 150 ? OPSWAT_COLORS.danger : OPSWAT_COLORS.warning}`,
              borderRadius: RADII.large,
            }}
          >
            <BrandIcon src={ASSETS.icons.phishing} size={116} name="Attacker endpoint" />
          </div>
          <div
            style={{
              color: SURFACES.text,
              fontFamily: TYPOGRAPHY.primary,
              fontSize: 32,
              fontWeight: TYPOGRAPHY.weights.bold,
            }}
          >
            Attacker
          </div>
          {frame > 155 ? (
            <StatusBadge
              icon={ASSETS.icons.warning}
              label="Credentials captured"
              color={OPSWAT_COLORS.danger}
            />
          ) : null}
        </div>
      </div>
    </SceneLayout>
  );
};

