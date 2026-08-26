import "./index.css";
import { Composition } from "remotion";
import { PhishingVideo } from "./PhishingVideo";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="PhishingVideo"
        component={PhishingVideo}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
      
    </>
  );
};
