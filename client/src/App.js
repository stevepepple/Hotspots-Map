import React, { Component } from 'react';
import EventsPage from './components/events_page';
import PlacesMap from './components/places/places_map';
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import { Menu, Dropdown } from 'semantic-ui-react'

import './App.css';

class App extends Component {
  state = { activeItem: 'home' }

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
  
        <Router>
          <div>
            <Menu pointing>
              <Dropdown item text='Menu'>
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
            
            <Route path="/events" component={EventsPage} />
            <Route path="/places" component={PlacesMap} />
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
