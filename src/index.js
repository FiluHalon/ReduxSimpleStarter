import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchBar from './components/search_bar';

//const API_KEY = 'AIzaSyDCPP6a2un11mqg5PoYqKPlOY_eEVl5rI8';

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

const root = createRoot(document.querySelector('.container'));
root.render(<App />);