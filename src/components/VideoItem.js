import React from "react";

const VideoItem = (props) =>{
    const videoURL = props.video.snippet.thumbnails.default
    const name = props.video.snippet.title
    return(
    <div>
        Name: {name}
       <video src={videoURL}/>
    </div>)
};
export default VideoItem;