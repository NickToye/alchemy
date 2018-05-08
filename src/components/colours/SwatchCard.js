import React from 'react';
import PropTypes from 'prop-types';
import ToneCard from './ToneCard';

class SwatchCard extends React.Component {
  render() {
    const tones = ['l1', 'l2', 'l3', 'l4', 'l5', 'd1', 'd2', 'd3', 'd4', 'd5'];
    const colour = this.props.colour;
    return (
      <div>
        <div
          className={`u-alchemy-${colour.colourClass}-bg  c-swatch  o-grid__el  u-padding o-surface--l2`}
          key={colour.id}
        />
      <div className="o-flex  o-flex--row  o-flex--wrap  c-swatch__tones o-surface--l1">
          {Object.keys(tones).map(key => (
            <ToneCard key={key} toneDetails={tones[key]} colourClass={colour.colourClass} />
          ))}
        </div>
      </div>
    );
  }
}

SwatchCard.propTypes = {
  colour: PropTypes.object,
};

export default SwatchCard;
