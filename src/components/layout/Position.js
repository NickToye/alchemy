import React from 'react';
import PropTypes from 'prop-types';

class Position extends React.Component {
  render() {
    const details = this.props.details;
    const textPositionPick = this.props.textBlockPositionPick;
    const isCurrent = textPositionPick === details.className;
    return (
      <button
        key={details.key}
        className={`a-toolbar__btn ` + (isCurrent ? 'active' : '')}
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
  textBlockPositionPick: PropTypes.string,
};

export default Position;
