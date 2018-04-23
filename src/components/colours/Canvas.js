import React from 'react';
import PropTypes from 'prop-types';

class Canvas extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <button
        className={`u-alchemy-${details.colourClass}-colour c-toolbar__btn `}
        key={details.key}
        value={details.colourClass}
        onClick={this.props.action}
      >
        <i className="fas fa-paint-brush fa-lg" />
      </button>
    );
  }
}

Canvas.propTypes = {
  details: PropTypes.object,
  action: PropTypes.func,
};

export default Canvas;
