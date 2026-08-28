import { Easing, interpolate, useCurrentFrame } from "remotion";
import {
  OPSWAT_COLORS,
  RADII,
  SPACING,
  SURFACES,
  TYPOGRAPHY,
} from "../../theme";
import { ASSETS } from "../assets";
import { EmailCard } from "../components/EmailCard";
import {
  BrandIcon,
  Panel,
  SceneLayout,
  SectionLabel,
  StatusBadge,
} from "../components/SceneLayout";

export const ImpersonationScene = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [82, 126], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <SceneLayout eyebrow="The impersonation" title="Trust can be copied.">
      <div style={{ position: "relative", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "58%",
            translate: `${-reveal * 70}px 0px`,
          }}
        >
          <EmailCard
            sender="IT Support"
            address="IT Support"
            subject="Your password expires today"
            action="Keep my account active"
          />
        </div>
        <Panel
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "45%",
            opacity: reveal,
            translate: `${(1 - reveal) * 90}px 0px`,
          }}
        >
          <SectionLabel>Hidden sender layer</SectionLabel>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: SPACING.lg,
              marginTop: SPACING.lg,
            }}
          >
            <div
              style={{
                width: 132,
                height: 132,
                display: "grid",
                placeItems: "center",
                borderRadius: RADII.large,
                backgroundColor: OPSWAT_COLORS.neutral900,
              }}
            >
              <BrandIcon src={ASSETS.icons.user} size={82} name="Unknown sender" />
            </div>
            <div style={{ color: SURFACES.text, fontFamily: TYPOGRAPHY.primary }}>
              <div style={{ fontSize: 38, fontWeight: TYPOGRAPHY.weights.bold }}>Unknown sender</div>
              <div style={{ marginTop: SPACING.sm, color: OPSWAT_COLORS.neutral300, fontSize: 27 }}>
                update@secure-mail.example
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: SPACING.xl,
              display: "grid",
              gap: SPACING.md,
              color: OPSWAT_COLORS.neutral100,
              fontFamily: TYPOGRAPHY.primary,
              fontSize: 29,
              lineHeight: 1.35,
            }}
          >
            <div>Familiar display name</div>
            <div>Copied writing style</div>
            <div>Matching email layout</div>
          </div>
          <div style={{ marginTop: SPACING.lg }}>
            <StatusBadge
              icon={ASSETS.icons.phishing}
              label="Identity does not match"
              color={OPSWAT_COLORS.warning}
            />
          </div>
        </Panel>
      </div>
    </SceneLayout>
  );
};

