const ReactDOM = require('react-dom');
const React = require('react');
import SearchBar from './components/search_bar';

//const API_KEY = 'AIzaSyDCPP6a2un11mqg5PoYqKPlOY_eEVl5rI8';

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));