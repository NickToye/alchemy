import React from 'react';
import PropTypes from 'prop-types';

class ToneCard extends React.Component {
  render() {
    const details = this.props.toneDetails;
    const colourClass = this.props.colourClass;

    return <div className={`c-swatch__tone  u-alchemy-${colourClass}-${details}-bg`} key={details.key} />;
  }
}

ToneCard.propTypes = {
  toneDetails: PropTypes.string,
  colourClass: PropTypes.string,
};

export default ToneCard;