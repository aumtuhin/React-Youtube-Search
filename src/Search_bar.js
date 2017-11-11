import React, { Component } from 'react';

class Searchbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearcChange(term);
    }

    render() {
        return (
            <div className="search-bar" >
                <input
                 value={this.state.term}
                 onChange={event => this.onInputChange(event.target.value)} 
                 type="text" placeholder="Search....." />
            </div>
        );
    }
}

export default Searchbar;