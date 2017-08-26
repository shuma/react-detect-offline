import React, { Component } from 'react';
import { Offline, Online } from './Detect';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          <Online>
            <span>
              <h1>You must go <span style={{ color: 'red' }}>offline</span> to view this page.</h1>
              <h3><span style={{ color: 'red' }}>Disconnect</span> to continue.</h3>
            </span>
          </Online>
          <Offline>
            <div className="offline">
              <h1>Online and offline events</h1>
              <p>Navigator.onLine returns the online status of the browser. The property returns a boolean value,
                with true meaning online and false meaning offline. The property sends updates
                whenever the browser's ability to connect to the network changes.
                The update occurs when the user follows links or when a script requests
                a remote page. For example, the property should return false when users
                click links soon after they lose internet connection.
                </p>
                
            </div>
          </Offline>
        </p>
      </div>
    );
  }
}

export default App;