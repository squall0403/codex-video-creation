import { Audio } from "@remotion/media";
import { AbsoluteFill, Series, staticFile } from "remotion";
import { SURFACES } from "../theme";
import { ClosingScene } from "./scenes/ClosingScene";
import { CaptionOverlay } from "./components/CaptionOverlay";
import { ConsequencesScene } from "./scenes/ConsequencesScene";
import { CredentialTheftScene } from "./scenes/CredentialTheftScene";
import { FakeWebsiteScene } from "./scenes/FakeWebsiteScene";
import { ImpersonationScene } from "./scenes/ImpersonationScene";
import { InboxScene } from "./scenes/InboxScene";
import { ProtectionScene } from "./scenes/ProtectionScene";
import { TitleScene } from "./scenes/TitleScene";
import { UrgencyScene } from "./scenes/UrgencyScene";
import { MEDIA } from "./media";

export const PhishingVideo = () => {
  return (
    <>
      <AbsoluteFill name="Master Composition" style={{ backgroundColor: SURFACES.canvas }}>
        <Series name="Scenes Container">
          {/* Audio-led timing: narration duration 63.896 seconds. */}
          {/* 0:00–0:04 · frames 0–119 */}
          <Series.Sequence name="Title" durationInFrames={120} premountFor={30}>
            <TitleScene />
          </Series.Sequence>
          {/* 0:04–0:07.73 · frames 120–231 */}
          <Series.Sequence name="Inbox" durationInFrames={112} premountFor={30}>
            <InboxScene />
          </Series.Sequence>
          {/* 0:07.73–0:18.83 · frames 232–564 */}
          <Series.Sequence name="Impersonation" durationInFrames={274} premountFor={30}>
            <ImpersonationScene />
          </Series.Sequence>
          {/* 0:18.83–0:25.97 · frames 565–778 */}
          <Series.Sequence name="Urgency" durationInFrames={254} premountFor={30}>
            <UrgencyScene />
          </Series.Sequence>
          {/* 0:25.97–0:32.27 · frames 779–967 */}
          <Series.Sequence
            name="Fake website"
            durationInFrames={189}
            premountFor={30}
          >
            <FakeWebsiteScene />
          </Series.Sequence>
          {/* 0:32.27–0:39.10 · frames 968–1172 */}
          <Series.Sequence
            name="Credential theft"
            durationInFrames={213}
            premountFor={30}
          >
            <CredentialTheftScene />
          </Series.Sequence>
          {/* 0:39.10–0:47.50 · frames 1173–1424 */}
          <Series.Sequence
            name="Consequences"
            durationInFrames={252}
            premountFor={30}
          >
            <ConsequencesScene />
          </Series.Sequence>
          {/* 0:47.50–0:57.83 · frames 1425–1734 */}
          <Series.Sequence
            name="Protection"
            durationInFrames={310}
            premountFor={30}
            style={{
              translate: "-2px 0px",
            }}
          >
            <ProtectionScene />
          </Series.Sequence>
          {/* 0:57.83–1:04 · frames 1735–1919 */}
          <Series.Sequence name="Closing" durationInFrames={193} premountFor={30}>
            <ClosingScene />
          </Series.Sequence>
        </Series>
      </AbsoluteFill>
      <Audio src={staticFile(MEDIA.narration.path)} volume={MEDIA.narration.volume} />
      <CaptionOverlay />
    </>
  );
};
