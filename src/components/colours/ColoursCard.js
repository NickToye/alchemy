import React from 'react';

class ColoursCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBrandPalette: false,
      showNeutralPalette: false,
      showUtilityPalette: false,
      colourTypes: [
        'brand',
        'neutral',
        'utility',
      ],
      colourTypePick: 'brand',
      colourTones: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    };

    this.showColourTypePick = this.showColourTypePick.bind(this);

  }

  showColourTypePick(e) {
    this.setState({ colourTypePick: e.target.value });
  }



  render() {
    const swatches = [
      { id: 1, usage: 'This is the primary colour. Used mainly in the logo and accents.', colourClass: 'primary', colourType: 'brand' },
      { id: 2, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'secondary1', colourType: 'brand' },
      { id: 3, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'secondary2', colourType: 'brand' },
      { id: 4, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'secondary3', colourType: 'brand' },
      { id: 5, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'black', colourType: 'neutral' },
      { id: 6, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'white', colourType: 'neutral' },
      { id: 7, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'pale-grey', colourType: 'neutral' },
      { id: 8, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'light-grey', colourType: 'neutral' },
      { id: 9, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'grey', colourType: 'neutral' },
      { id: 10, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'medium-grey', colourType: 'neutral' },
      { id: 11, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'dark-grey', colourType: 'neutral' },
      { id: 12, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'positive', colourType: 'utility' },
      { id: 13, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'caution', colourType: 'utility' },
      { id: 14, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'negative', colourType: 'utility' },
      { id: 15, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'info', colourType: 'utility' },
    ];

    const selectedColourType = this.state.colourTypePick;

    const colourTones = this.state.colourTones.map((tone, key) => {
      return (
        <div className={`c-swatch__tone  c-swatch__tone-${tone}`}
          key={key}
        />
      );
    });

    const swatchesList = swatches.filter(function(filteredSwatches) { return filteredSwatches.colourType ===  selectedColourType; })
    .map((swatch, filteredSwatches) => (
      <div>
      <div
        className={`u-alchemy-${swatch.colourClass}-bg  c-swatch  o-grid__el  u-padding`}
        key={swatch.id}
      >
        <div className="o-flex">
          <div className="c-swatch__variants"/>
          <span className="swatch-label">{swatch.usage}</span>
        </div>
      </div>
      <div className={`u-alchemy-${swatch.colourClass}-bg o-flex  o-flex__row  o-flex__wrap  c-swatch__tones`}>
        {colourTones}
      </div>
    </div>
    ));

    const colourTypePick = this.state.colourTypePick;

    const colourTypeList = this.state.colourTypes.map((type, key) => {
      const isCurrent = this.state.colourTypePick === type;
      return (
        <button
          className={
            `c-toolbar__btn  u-text-capitalise ` +
            (isCurrent ? 'active' : '')
          }
          key={key}
          value={type}
          onClick={this.showColourTypePick}
        >
          <i className="fas fa-fw fa-paint-brush fa-lg u-padding-right-tiny" />{type}
        </button>
      );
    });




    return (
      <section className="o-section  u-padding">
        <header className="u-margin-bottom-large">
          <h2 className="u-margin-bottom-none">Colour</h2>
          <p>A tool that will display the correct colours.</p>
        </header>

        <div className="u-margin-bottom  c-toolbar">
          {colourTypeList}
        </div>

        <div className="u-margin-bottom">

          <h3 className="u-text-capitalise">{selectedColourType}</h3>
          <div className="o-grid  o-grid--centre  o-grid--start">
            {swatchesList}
          </div>
        </div>
      </section>
    );
  }
}

export default ColoursCard;
