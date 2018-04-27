// This component handles the App template used on every page
import React from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import Header from './common/Header';

fontawesome.library.add(faCheck,faTimes,faExclamationTriangle,faInfoCircle);

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

// TODO Fix the linter issues with Font Awesome
