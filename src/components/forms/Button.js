import React from 'react';
import PropTypes from 'prop-types';

import sizes from '../data/sizes';
import ButtonSized from './ButtonSized';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: sizes,
    };
  }
  render() {
    const details = this.props.details;
    const roundedButtons = this.props.roundedButtons;
    const largeRoundedButtons = this.props.largeRoundedButtons;
    const showGhost = this.props.showGhost;
    const swatch = this.props.details.colourClass;
    return (
      <div className="o-flex  o-flex--column">
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
        {Object.keys(this.state.size).map(key => (
          <ButtonSized
            key={key}
            swatch={swatch}
            ghost={showGhost}
            rounded={roundedButtons}
            largeRounded={largeRoundedButtons}
            sizing={this.state.size[key]}
          />
        ))}
      </div>
    );
  }
}

Button.propTypes = {
  details: PropTypes.object,
  roundedButtons: PropTypes.bool,
  largeRoundedButtons: PropTypes.bool,
  showGhost: PropTypes.bool,
};

export default Button;
