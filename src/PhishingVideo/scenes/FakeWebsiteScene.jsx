import { Easing, interpolate, useCurrentFrame } from "remotion";
import {
  OPSWAT_COLORS,
  RADII,
  SPACING,
  SURFACES,
  TYPOGRAPHY,
} from "../../theme";
import { ASSETS } from "../assets";
import {
  BrowserWindow,
  Cursor,
  LoginForm,
} from "../components/BrowserWindow";
import {
  BrandIcon,
  SceneLayout,
  StatusBadge,
} from "../components/SceneLayout";

export const FakeWebsiteScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneLayout eyebrow="The malicious link" title="The page can look right while the address is wrong.">
      <div style={{ position: "relative", height: "100%" }}>
        <BrowserWindow suspicious>
          <LoginForm />
        </BrowserWindow>
        <Cursor/>
        <div
          style={{
            position: "absolute",
            right: SPACING.lg,
            bottom: -18,
            display: "flex",
            gap: SPACING.md,
            opacity: interpolate(frame, [126, 154], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: SPACING.sm,
              padding: `${SPACING.sm}px ${SPACING.md}px`,
              backgroundColor: SURFACES.panel,
              border: `2px solid ${OPSWAT_COLORS.neutral800}`,
              borderRadius: RADII.medium,
              color: SURFACES.text,
              fontFamily: TYPOGRAPHY.primary,
              fontSize: 25,
            }}
          >
            <BrandIcon src={ASSETS.icons.lock} size={32} name="Genuine URL icon" />
            Genuine: accounts.example.com
          </div>
          <StatusBadge
            icon={ASSETS.icons.warning}
            label="Look-alike domain"
            color={OPSWAT_COLORS.warning}
          />
        </div>
      </div>
    </SceneLayout>
  );
};

