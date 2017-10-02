import React, {Component} from 'react';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <h1>Movie Gallery</h1>
                    <p>Developed by Andrii Ivaniv</p>
                </div>
                <div className="gallery">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
