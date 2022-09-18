import React, { useEffect } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { videosSelect } from "../state/slice/videos";

export default function Videos() {
  const { videos } = useSelector(videosSelect);

  const renderVideos = videos.data.map((video) => (
    <Post key={video.id} {...video.attributes} />
  ));

  return (
    <div className="videos-container">
      <div className="video-wrap">{renderVideos}</div>
    </div>
  );
}
