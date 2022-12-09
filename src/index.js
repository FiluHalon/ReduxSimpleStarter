// import React, { Component } from 'react';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCrcoazmYnnYs5ocFv3ktI0bebv2myv7os';

// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { videos: [] };

//         YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
//             this.setState({ videos });
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <SearchBar />
//                 <VideoList videos={this.state.videos} />
//             </div>
//         );
//     }
// }

function App () {
    const [videos, setVideos] = useState([]);

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
        setVideos(videos);
    });

    return (
        <div>
            <SearchBar />
            <VideoList videos={videos} />
        </div>
    );
}

const root = createRoot(document.querySelector('.container'));
root.render(<App />);