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
    // const colours = this.state.colours;

    return (
      <section className="o-section  u-padding  u-relative">
        <div className="u-margin-bottom  u-margin-right  c-toolbar">
          {Object.keys(this.state.colourTypes).map(key => (
            <ColourType key={key} details={this.state.colourTypes[key]} action={this.showColourTypePick} />
          ))}
        </div>
        <header className="u-margin-bottom-large">
          <h2 className="u-margin-bottom-none">Colour</h2>
          <p>A tool that will display the correct colours.</p>
        </header>

        <div className="u-margin-bottom">
          <h3 className="u-text-capitalise">{selectedColourType}</h3>
          <div className="o-grid  o-grid--centre  o-grid--start o-grid--auto">
            {Object.keys(this.state.colours)
              .filter(function(filteredSwatches) {
                return colours[filteredSwatches].colourType === selectedColourType;
              })
              .map((key, filteredSwatches) => <SwatchCard key={key} details={this.state.colours[key]} />)}
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
