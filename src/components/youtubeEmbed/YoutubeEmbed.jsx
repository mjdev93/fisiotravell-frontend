import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ url }) => {

  const getEmbedId = (url) => {
    const videoId = url.includes("youtu.be")
      ? url.split("/").pop()
      : url.split("v=")[1];
    return videoId ? videoId : null;
  };

  return (
  <div className="video-responsive">
    <iframe
      width="140px"
      height="100px"
      src={`https://www.youtube.com/embed/${getEmbedId(url)}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
}

YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired
};

export default YoutubeEmbed;