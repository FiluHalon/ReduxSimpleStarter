// import React, { Component } from 'react'; 

// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { term: '' };
//     }

//     render() {
//         return (
//             <div>
//                 <input
//                 value={this.state.term}
//                 onChange={event => this.setState({ term: event.target.value})} />
//             </div>
//         );
//     }
// }

import React, { useState } from "react";

function SearchBar(props) {
    const [term, setTerm] = useState("");

    return (
        <div className="search-bar">
            <input
                value={term}
                onChange={(event) => onInputChange(event.target.value)} />
        </div>
    );

    function onInputChange(term) {
        setTerm(term);
        props.onSearchTermChange(term);
    }
}

export default SearchBar;