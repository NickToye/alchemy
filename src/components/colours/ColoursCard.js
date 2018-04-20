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

  showColourTonesAction(e) {
    this.setState({ showColourTones: e.target.value });
  }

  renderColourTones(props) {
    const tones = ['l1', 'l2', 'l3', 'l4', 'l5', 'd1', 'd2', 'd3', 'd4', 'd5'];
    const colourClassName = this.props.colourClassName;
    return (
      <div className={`o-flex  o-flex--row  o-flex--wrap  c-swatch__tones`}>
        {tones.map((tone, key) => (
          <div className={`c-swatch__tone  u-alchemy-${colourClassName}-${tone}-bg`} key={key} />
        ))}
      </div>
    );
  }

  render() {
    const selectedColourType = this.state.colourTypePick;
    const swatches = this.state.colours;

    // const swatchesList = swatches
    //   .filter(function(filteredSwatches) {
    //     return filteredSwatches.colourType === selectedColourType;
    //   })
    //   .map((swatch, filteredSwatches) => (
    //     <div key={swatch.key}>
    //       <div
    //         className={`u-alchemy-${swatch.colourClass}-bg  c-swatch  o-grid__el  u-padding`}
    //         key={swatch.id}
    //       >
    //         <div className="o-flex">
    //           <div className="c-swatch__variants" />
    //           <span className="swatch-label">{swatch.usage}</span>
    //         </div>
    //       </div>
    //       {this.renderColourTones()}
    //     </div>
    //   ));

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
            {Object.keys(this.state.colours).map(key => (
              <Swatch key={key} details={this.state.colours[key]} />
            ))}
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
// FIX Tones #Important
