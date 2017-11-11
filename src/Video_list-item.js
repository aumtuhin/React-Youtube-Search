import React, { Component } from 'react';

class VideoListItem extends Component {
    render() {
        const imgUrl = this.props.video.snippet.thumbnails.default.url;
        const videoHeading = this.props.video.snippet.title;
        return (
            <li onClick ={ () => this.props.onVideoSelect(this.props.video)} className="list-group-item" >
                <div className="video-list media" >
                    <div className="media-left" >
                        <img className="media-object" src={imgUrl} />
                    </div>
                    <div className="media-body" >
                        <div className="media-heading" >
                            {videoHeading}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;