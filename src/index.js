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

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: "cat" }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
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