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
} from '@fortawesome/free-solid-svg-icons';

import Header from './common/Header';

library.add(faCheck, faTimes, faExclamationTriangle, faInfoCircle, faCog);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
