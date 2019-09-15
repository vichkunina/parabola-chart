import React, { Component } from 'react';
import Parabola from './components/Parabola';
import styles from './index.css';

class App extends Component {
    render() {
        return (
            <div className="root">
                <Parabola />
            </div>
        );
    }
}

export default App;
