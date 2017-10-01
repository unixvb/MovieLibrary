import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div class="app">
                <div class="app-header">
                    <h1>Movie Gallery</h1>
                    <p>Developed by Andrii Ivaniv</p>
                </div>
                <div class="gallery">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
