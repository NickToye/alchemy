// This component handles the App template used on every page
import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faTimes,
  faExclamationTriangle,
  faInfoCircle,
  faCog,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';

import Header from './common/Header';

library.add(faCheck, faTimes, faExclamationTriangle, faInfoCircle, faCog, faDesktop);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      mq: '',
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const breakpoints = {
      room: 0,
      village: 414,
      town: 736,
      city: 768,
      country: 1024,
      continent: 1280,
      world: 1366,
    };

    this.setState({ width: window.innerWidth, height: window.innerHeight });

    if (window.innerWidth > breakpoints.village) {
      this.setState({ mq: 'village' });
    } else if (window.innerWidth > breakpoints.town) {
      this.setState({ mq: 'town' });
    } else if (window.innerWidth <= breakpoints.city) {
      this.setState({ mq: 'city' });
    } else if (window.innerWidth <= breakpoints.country) {
      this.setState({ mq: 'country' });
    } else if (window.innerWidth <= breakpoints.continent) {
      this.setState({ mq: 'continent' });
    } else if (window.innerWidth <= breakpoints.world) {
      this.setState({ mq: 'world' });
    }
  }

  render() {
    return (
      <div className="o-wrapper  o-wrapper--full  u-padding-none">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;

// TODO Create a Media Query card
