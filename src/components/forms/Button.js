import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const details = this.props.details;
    const roundedButtons = this.props.roundedButtons;
    const largeRoundedButtons = this.props.largeRoundedButtons;
    const showGhost = this.props.showGhost;
    return (
      <button
        className={
          `c-btn  c-btn--${details.colourClass} ` +
          (roundedButtons ? 'c-btn--rounded ' : '') +
          (largeRoundedButtons ? 'c-btn--rounded-large ' : '') +
          (showGhost ? 'c-btn--ghost ' : '') +
          `u-margin-bottom  u-text-capitalise`
        }
        key={details.key}
      >
        {details.colourClass} Button
      </button>
    );
  }
}

Button.propTypes = {
  details: PropTypes.object,
  roundedButtons: PropTypes.object,
  largeRoundedButtons: PropTypes.object,
  showGhost: PropTypes.string,
};

export default Button;
