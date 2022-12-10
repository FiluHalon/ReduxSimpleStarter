import _ from 'lodash';
import React, { Component } from 'react';
// import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAMr5ESHoJ9wrLtpNGjZK50RDHwcwUNS_I";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('kitty');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); 

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// const App = () => {
//     const [videos, setVideos] = useState([]);

//     YTSearch({ key: API_KEY, term: "cats" }, (videos) => {
//         setVideos(videos);
//     });

//     return (
//         <div>
//             <SearchBar />
//             <VideoDetail video={videos[0]} />
//             <VideoList videos={videos} />
//         </div>
//     );
// }

const root = createRoot(document.querySelector(".container"));
root.render(<App />);