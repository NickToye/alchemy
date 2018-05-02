import React from 'react';
import PropTypes from 'prop-types';
import colours from '../data/colours';
import SwatchCard from './SwatchCard';
import ColourType from './ColourType';

class ColoursCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colours: colours,
      colourTypes: ['brand', 'neutral', 'utility'],
      colourTypePick: 'brand',
    };

    this.showColourTypePick = this.showColourTypePick.bind(this);
  }

  showColourTypePick(e) {
    this.setState({ colourTypePick: e.target.value });
  }

  render() {
    const selectedColourType = this.state.colourTypePick;

    return (
      <section className="o-section  u-padding  u-relative">
        <div className="u-margin-bottom  u-margin-right  c-toolbar">
          <div className="tools-wrapper">
            {Object.keys(this.state.colourTypes).map(key => (
              <ColourType
                key={key}
                details={this.state.colourTypes[key]}
                colourTypePick={this.state.colourTypePick}
                action={this.showColourTypePick}
              />
            ))}
          </div>
        </div>
        <header className="u-margin-bottom-large">
          <h1 className="testing u-margin-bottom-none">Colours</h1>
          <p>A tool that will display the correct colours.</p>
        </header>

        <div className="u-margin-bottom">
          <h2 className="u-text-capitalise">{selectedColourType}</h2>
          <div className="o-grid  o-grid--centre  o-grid--start o-grid--auto">
            {Object.keys(this.state.colours)
              .filter(function(filteredSwatches) {
                return colours[filteredSwatches].colourType === selectedColourType;
              })
              .map(key => <SwatchCard key={key} details={this.state.colours[key]} />)}
          </div>
        </div>
      </section>
    );
  }
}

ColoursCard.propTypes = {
  colourClassName: PropTypes.string,
};

export default ColoursCard;
