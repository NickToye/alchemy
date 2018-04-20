import React from 'react';
import PropTypes from 'prop-types';

class Tone extends React.Component {
  render() {
    const details = this.props.toneDetails;
    const colourClass = this.props.colourClass;

    return (
      <div className="o-flex">
        <div className="c-swatch__variants" />

        <div className={`c-swatch__tone  u-alchemy-${colourClass}-${details}-bg`} key={details.key} />
      </div>
    );
  }
}

Tone.propTypes = {
  toneDetails: PropTypes.string,
  colourClass: PropTypes.string,
};

export default Tone;
