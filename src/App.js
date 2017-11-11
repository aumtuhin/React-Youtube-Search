import React, { Component } from 'react';
import './styles/style.css';
import YTSearch from 'youtube-api-search';
import Seachbar from './Search_bar';
import Videolist from './Video_list';
import Videodetails from './Video-details';

const API_KEY = 'AIzaSyCfOA-WmjoO5kVOnJ2ixtsWIWfRFOkDzas';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'farhat al amr'
    };

    this.videoSearch(this.state.term);
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term }, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  
  render() {
    return (
      <div>
        <Seachbar onSearcChange={ term => this.videoSearch(term) } />
        <div className="container" >
          <div className="row" >
          <Videodetails video={this.state.selectedVideo} />
          <Videolist
          onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) }
          videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
