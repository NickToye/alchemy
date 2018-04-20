import React from 'react';
import PropTypes from 'prop-types';
import Tone from './Tone';

class Swatch extends React.Component {
  render() {
    const tones = ['l1', 'l2', 'l3', 'l4', 'l5', 'd1', 'd2', 'd3', 'd4', 'd5'];
    const details = this.props.details;
    return (
      <div>
        <div
          className={`u-alchemy-${details.colourClass}-bg  c-swatch  o-grid__el  u-padding`}
          key={details.id}
        />
        <div className="o-flex  o-flex--row  o-flex--wrap  c-swatch__tones">
          {Object.keys(tones).map(key => (
            <Tone key={key} toneDetails={tones[key]} colourClass={details.colourClass} />
          ))}
        </div>
      </div>
    );
  }
}

Swatch.propTypes = {
  details: PropTypes.object,
};

export default Swatch;
