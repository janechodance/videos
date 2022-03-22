import React from "react";
import './VideoItem.css';
const VideoItem = ({video}) =>{
    const image = video.snippet.thumbnails.default.url
    const name = video.snippet.title
    return(
    <div className="video-item item">
        <img className= "ui image" src={image}/>
        <div className="content">
        <h4 className="header">Name: {name}</h4>
        </div>
    </div>
    );
};
export default VideoItem;