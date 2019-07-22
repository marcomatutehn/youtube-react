import React from 'react';
import './styles/Badge.css';

class SearchBar extends React.Component {
    state = {
        term: 'Type someting'
    };

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
        console.log("hizo la llamada a submit");
    };

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <br className="justify-content-center"/>
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
