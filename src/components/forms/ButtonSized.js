import React from 'react';
import PropTypes from 'prop-types';

class ButtonSized extends React.Component {
  render() {
    const sizing = this.props.sizing;
    const swatch = this.props.swatch;

    return (
      <button
        className={`c-btn  c-btn--${sizing.sizeClass} ` + `u-margin-bottom  u-text-capitalise`}
        key={sizing.key}
      >
        Test Button {swatch}
      </button>
    );
  }
}

ButtonSized.propTypes = {
  sizing: PropTypes.object,
  swatch: PropTypes.object,
};

export default ButtonSized;
