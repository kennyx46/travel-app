import React, { Component } from 'react';

import TravelOverview from './components/TravelOverview';

import data from './data.json';

class App extends Component {

  state = {
    travel: null
  }

  componentDidMount() {
    this.getTravelInfo();
  }

  getTravelInfo = () => {
    Promise.resolve()
      .then(() => {
        this.setState({ travel: data });
      });
  }

  render() {
    const { travel } = this.state;
    return (
      <div className="App">
          <TravelOverview travelInfo={travel} />
      </div>
    );
  }
}

export default App;
