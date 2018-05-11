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
          className="o-section  u-margin-bottom-huge  o-surface--l2 a-alchemy-bg-dark"
        >
          <div className="a-toolbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">{palette.section} palette</h2>
          </div>
          <div className="o-grid  o-grid--centre  o-grid--start u-padding">
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
