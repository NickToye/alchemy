import React from 'react';
import PropTypes from 'prop-types';
import colours from '../data/colours';
import SwatchCard from './SwatchCard';
import ScrollableAnchor from 'react-scrollable-anchor';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colours: colours,
    };
  }
  render() {
    // debugger;
    const palette = this.props.palette;
    return (
      <ScrollableAnchor id={palette.identifier}>
        <section
          key={palette.key}
          className="o-section  u-margin-bottom-huge"
        >
          <header>
            <h2>{palette.section} palette</h2>
          </header>
          <div className="o-grid  o-grid--centre  o-grid--start">
            {Object.keys(this.state.colours)
              .filter(function(filteredSwatches) {
                return colours[filteredSwatches].colourType === palette.identifier;
              })
              .map(key => <SwatchCard key={key} colour={this.state.colours[key]} />)}
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

Palette.propTypes = {
  palette: PropTypes.object,
};

export default Palette;
