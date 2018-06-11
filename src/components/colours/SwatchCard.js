import React from 'react';
import PropTypes from 'prop-types';
import ToneCard from './ToneCard';

class SwatchCard extends React.Component {
  render() {
    const tones = ['tint-10', 'tint-20', 'tint-30', 'tint-40', 'tint-50', 'shade-10', 'shade-20', 'shade-30', 'shade-40', 'shade-50'];
    const colour = this.props.colour;
    return (
      <div>
        <div
          className={`u-alchemy-${colour.colourClass}-bg  c-swatch  o-grid__el  u-padding  o-surface--l1`}
          key={colour.id}
        />
      <div className="o-flex  o-flex--row  o-flex--wrap  c-swatch__tones  u-margin-bottom-small">
          {Object.keys(tones).map(key => (
            <ToneCard key={key} toneDetails={tones[key]} colourClass={colour.colourClass} />
          ))}
        </div>
        <div className={`u-alchemy-${colour.colourClass}-gradient  c-swatch  o-grid__el u-padding  u-border-radius  o-surface--l1`} />
      </div>

    );
  }
}

SwatchCard.propTypes = {
  colour: PropTypes.object,
};

export default SwatchCard;
