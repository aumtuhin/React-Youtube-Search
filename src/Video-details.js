import React, { Component } from 'react';

const VideoDetails = ({video}) => {

    if(!video){
        return <h5 className="text-center" >Loading.....</h5>
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/'+videoId;
    console.log(url);

        return (
            <div className="video-details col-md-8" >
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url} ></iframe>
                </div>
                <div className="details" >
                    <h4>{video.snippet.title}</h4>
                    <div> {video.snippet.description} </div>
                </div>
            </div>
        );
};

export default VideoDetails;