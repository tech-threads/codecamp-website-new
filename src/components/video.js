import React from "react";

const Video = ({ videoId }) => {
  return (
    <div className="relative w-full rounded-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ aspectRatio: "16/9", width: "100%" }}
        className="rounded-2xl"
      ></iframe>
    </div>
  );
};

export default Video;
