"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const VideoPlayer = ({
  videos,
  controls = true,
  light = true,
  width = "100%",
  height = "260px",
}) => {
  return (
    <ReactPlayer
      url={videos || "/oceans.mp4"}
      controls={controls}
      light={light}
      width={width}
      height={height}
    />
  );
};

export default VideoPlayer;
