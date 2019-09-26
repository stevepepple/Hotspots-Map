import React, { Component } from 'react';
import MainPage from './components/pages/main';
import PlacesMap from './components/places/places_map';
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import { Icon,Menu, Dropdown } from 'semantic-ui-react'

import './styles/App.css';

class App extends Component {
  state = { activeItem: 'home' }

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
  
        {/* @TODO: Handle URL Params here; Parse query string from React Reouter this.props.location.search */}
        <Router>
          <div>
            <Menu id="header" pointing>
              <Dropdown button labeled className='icon' icon='list' text='Menu'>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/events">Nearby Events</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/places">Places Map</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
            </Menu>
            
            <Route path="/events" component={MainPage} />
            <Route path="/places" component={PlacesMap} />
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
