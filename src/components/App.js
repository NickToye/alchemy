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
  faMobileAlt,
  faTabletAlt,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';

import Header from './common/Header';

library.add(faCheck, faTimes, faExclamationTriangle, faInfoCircle, faCog, faDesktop, faMobileAlt, faTabletAlt, faLaptop);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      mq: 'room',
      mqIcon: 'mobile-alt',
      mqIconRotate: ''
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


    if (window.innerWidth < breakpoints.town) {
      this.setState({ mq: 'village' });
      this.setState({ mqIcon: 'mobile-alt'});
      this.setState({ mqIconRotate: 0 });
    } else if (window.innerWidth < breakpoints.city) {
      this.setState({ mq: 'town' });
      this.setState({ mqIcon: 'tablet-alt'});
      this.setState({ mqIconRotate: 0 });
    } else if (window.innerWidth < breakpoints.country) {
      this.setState({ mq: 'city '});
      this.setState({ mqIcon: 'tablet-alt'});
      this.setState({ mqIconRotate: 0 });
    } else if (window.innerWidth < breakpoints.continent) {
      this.setState({ mq: 'country' });
      this.setState({ mqIcon: 'tablet-alt'});
      this.setState({ mqIconRotate: 90 });
    } else if (window.innerWidth < breakpoints.world) {
      this.setState({ mq: 'continent' });
      this.setState({ mqIcon: 'laptop' });
      this.setState({ mqIconRotate: 0 });
    } else {
      this.setState({ mq: 'world' });
      this.setState({ mqIcon: 'desktop' });
      this.setState({ mqIconRotate: 0 });
    }
  }

  render() {
    return (
      <div className="o-wrapper  o-wrapper--full  u-padding-none">
        <Header mq={this.state.mqIcon} mqRotate={this.state.mqIconRotate} />
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
