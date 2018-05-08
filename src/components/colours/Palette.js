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
    const palette = this.props.palette;
    return (
      <ScrollableAnchor id={palette.identifier}>
        <div key={palette.key} className="u-margin-bottom-huge">
          <h2>{palette.section} palette</h2>
          <div className="o-grid  o-grid--centre  o-grid--start o-grid--auto">
            {Object.keys(this.state.colours)
              .filter(function(filteredSwatches) {
                return colours[filteredSwatches].colourType === palette.identifier;
              })
              .map(key => <SwatchCard key={key} colour={this.state.colours[key]} />)}
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

Palette.propTypes = {
  palette: PropTypes.object,
};

export default Palette;
