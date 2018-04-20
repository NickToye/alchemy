import React from 'react';
import PropTypes from 'prop-types';
import sampleColours from '../sample-colours';
import Swatch from './Swatch';

class ColoursCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colours: sampleColours,
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

    const colourTypeList = this.state.colourTypes.map((type, key) => {
      const isCurrent = this.state.colourTypePick === type;
      return (
        <button
          className={`c-toolbar__btn  u-text-capitalise ` + (isCurrent ? 'active' : '')}
          key={key}
          value={type}
          onClick={this.showColourTypePick}
        >
          <i className="fas fa-fw fa-tag fa-lg u-padding-right-tiny" />
          {type}
        </button>
      );
    });

    return (
      <section className="o-section  u-padding  u-relative">
        <div className="u-margin-bottom  u-margin-right  c-toolbar">{colourTypeList}</div>
        <header className="u-margin-bottom-large">
          <h2 className="u-margin-bottom-none">Colour</h2>
          <p>A tool that will display the correct colours.</p>
        </header>

        <div className="u-margin-bottom">
          <h3 className="u-text-capitalise">{selectedColourType}</h3>
          <div className="o-grid  o-grid--centre  o-grid--start o-grid--auto">
            {Object.keys(this.state.colours)
              .filter(function(filteredSwatches) {
                return filteredSwatches === selectedColourType;
              })
              .map((key, filteredSwatches) => <Swatch key={key} details={this.state.colours[key]} />)}
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

// TODO Re-apply filter to swatches
