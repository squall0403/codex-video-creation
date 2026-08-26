import { AbsoluteFill, Series, Solid } from "remotion";
import { SURFACES } from "../theme";
import { ClosingScene } from "./scenes/ClosingScene";
import { ConsequencesScene } from "./scenes/ConsequencesScene";
import { CredentialTheftScene } from "./scenes/CredentialTheftScene";
import { FakeWebsiteScene } from "./scenes/FakeWebsiteScene";
import { ImpersonationScene } from "./scenes/ImpersonationScene";
import { InboxScene } from "./scenes/InboxScene";
import { ProtectionScene } from "./scenes/ProtectionScene";
import { TitleScene } from "./scenes/TitleScene";
import { UrgencyScene } from "./scenes/UrgencyScene";

export const PhishingVideo = () => {
  return (
    <>
      <AbsoluteFill name="Master Composition" style={{ backgroundColor: SURFACES.canvas }}>
        <Series name="Scenes Container">
          {/* 0:00–0:04 · frames 0–119 */}
          <Series.Sequence name="Title" durationInFrames={120} premountFor={30}>
            <TitleScene />
          </Series.Sequence>
          {/* 0:04–0:10 · frames 120–299 */}
          <Series.Sequence name="Inbox" durationInFrames={180} premountFor={30}>
            <InboxScene />
          </Series.Sequence>
          {/* 0:10–0:22 · frames 300–659 */}
          <Series.Sequence
            name="Impersonation"
            durationInFrames={360}
            premountFor={30}
          >
            <ImpersonationScene />
          </Series.Sequence>
          {/* 0:22–0:34 · frames 660–1019 */}
          <Series.Sequence
            name="Urgency"
            durationInFrames={360}
            premountFor={30}
          >
            <UrgencyScene />
          </Series.Sequence>
          {/* 0:34–0:47 · frames 1020–1409 */}
          <Series.Sequence
            name="Fake website"
            durationInFrames={390}
            premountFor={30}
          >
            <FakeWebsiteScene />
          </Series.Sequence>
          {/* 0:47–0:59 · frames 1410–1769 */}
          <Series.Sequence
            name="Credential theft"
            durationInFrames={360}
            premountFor={30}
          >
            <CredentialTheftScene />
          </Series.Sequence>
          {/* 0:59–1:10 · frames 1770–2099 */}
          <Series.Sequence
            name="Consequences"
            durationInFrames={330}
            premountFor={30}
          >
            <ConsequencesScene />
          </Series.Sequence>
          {/* 1:10–1:25 · frames 2100–2549 */}
          <Series.Sequence
            name="Protection"
            durationInFrames={450}
            premountFor={30}
          >
            <ProtectionScene />
          </Series.Sequence>
          {/* 1:25–1:30 · frames 2550–2699 */}
          <Series.Sequence
            name="Closing"
            durationInFrames={150}
            premountFor={30}
          >
            <ClosingScene />
          </Series.Sequence>
        </Series>
      </AbsoluteFill>
    </>
  );
};
