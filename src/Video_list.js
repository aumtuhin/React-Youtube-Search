import React, { Component } from 'react';
import VideosListItem from './Video_list-item';


const Videolist = (props) => {
       const videoItems = props.videos.map((video)=>{
           return(
            <VideosListItem
             onVideoSelect={props.onVideoSelect}
             video={video}
             key={video.etag} />
           );
       });

        return (
            <ul className="col-md-4 list-group" >
                {videoItems}
            </ul>
        );
};


export default Videolist;