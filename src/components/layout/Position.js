import React from 'react';
import PropTypes from 'prop-types';

class Position extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <button
        key={details.key}
        className="c-toolbar__btn"
        value={details.className}
        onClick={this.props.action}
      >
        {details.position}
      </button>
    );
  }
}

Position.propTypes = {
  details: PropTypes.object,
  action: PropTypes.func,
};

export default Position;
