// This component handles the App template used on every page
import React from 'react';
import PropTypes from 'prop-types';

import Header from './common/Header';

class App extends React.Component {
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
