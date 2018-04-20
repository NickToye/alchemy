import React from 'react';
import PropTypes from 'prop-types';

class Droplet extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <button
        className={`u-alchemy-${details.colourClass}-colour c-toolbar__btn `}
        key={details.key}
        value={details.colourClass}
        onClick={this.props.action}
      >
        <i className="fas fa-tint fa-lg" />
      </button>
    );
  }
}

Droplet.propTypes = {
  details: PropTypes.object,
};

export default Droplet;
