import React from "react";

const VideoDetail = ({ selected }) => {
  if (!selected) {
    return <h2>Video Details</h2>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${selected.id.videoId}`;
    return (
      <div>
        <div className="ui segment">
          <div className="ui embed">
            <iframe title="Video Player" src={videoSrc} frameBorder="0" />
          </div>
          <h4 className="ui header">{selected.snippet.title}</h4>
          <p> {selected.snippet.description} </p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
