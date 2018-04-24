import React from 'react';
import PropTypes from 'prop-types';

class ButtonSized extends React.Component {
  render() {
    const sizing = this.props.sizing;
    const swatch = this.props.swatch;
    const ghost = this.props.ghost;
    const rounded = this.props.rounded;
    const largeRounded = this.props.largeRounded;

    return (
      <button
        className={
          `c-btn  c-btn--${swatch} c-btn--${sizing.sizeClass} ` +
          `u-margin-bottom  u-text-capitalise ` +
          (rounded ? 'c-btn--rounded ' : '') +
          (largeRounded ? 'c-btn--rounded-large ' : '') +
          (ghost ? 'c-btn--ghost ' : '')
        }
        key={sizing.key}
      >
        {sizing.sizeClass}
      </button>
    );
  }
}

ButtonSized.propTypes = {
  sizing: PropTypes.object,
  swatch: PropTypes.object,
  ghost: PropTypes.bool,
  rounded: PropTypes.bool,
  largeRounded: PropTypes.bool,
};

export default ButtonSized;
