import React from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = ({ url }) => {
  return (
    <>
      <div>
        <ReactPlayer url={url} controls={true} width="350px" height="200px" />
      </div>
    </>
  );
};
