import React from 'react';

class ColoursCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colourTypes: ['brand', 'neutral', 'utility'],
      colourTypePick: 'brand'
    };

    this.showColourTypePick = this.showColourTypePick.bind(this);
  }

  showColourTypePick(e) {
    this.setState({ colourTypePick: e.target.value });
  }

  showColourTonesAction(e) {
    this.setState({ showColourTones: e.target.value });
  }

  render() {
    const swatches = [
      {
        id: 1,
        usage:
          'This is the primary colour. Used mainly in the logo and accents.',
        colourClass: 'primary',
        colourTones: [this.state.colourTones],
        colourType: 'brand'
      },
      {
        id: 2,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'secondary1',
        colourTones: [this.state.colourTones],
        colourType: 'brand'
      },
      {
        id: 3,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'secondary2',
        colourTones: [this.state.colourTones],
        colourType: 'brand'
      },
      {
        id: 4,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'secondary3',
        colourTones: [this.state.colourTones],
        colourType: 'brand'
      },
      {
        id: 5,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'black',
        colourTones: [this.state.colourTones],
        colourType: 'neutral'
      },
      {
        id: 6,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'white',
        colourTones: [this.state.colourTones],
        colourType: 'neutral'
      },
      {
        id: 7,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'pale-grey',
        colourTones: [this.state.colourTones],
        colourType: 'neutral'
      },
      {
        id: 8,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'light-grey',
        colourTones: [this.state.colourTones],
        colourType: 'neutral'
      },
      {
        id: 9,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'grey',
        colourTones: [this.state.colourTones],
        colourType: 'neutral'
      },
      {
        id: 10,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'medium-grey',
        colourTones: [this.state.colourTones],
        colourType: 'neutral'
      },
      {
        id: 11,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'dark-grey',
        colourTones: [this.state.colourTones],
        colourType: 'neutral'
      },
      {
        id: 12,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'positive',
        colourTones: [this.state.colourTones],
        colourType: 'utility'
      },
      {
        id: 13,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'caution',
        colourTones: [this.state.colourTones],
        colourType: 'utility'
      },
      {
        id: 14,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'negative',
        colourTones: [this.state.colourTones],
        colourType: 'utility'
      },
      {
        id: 15,
        usage:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        colourClass: 'info',
        colourTones: [this.state.colourTones],
        colourType: 'utility'
      }
    ];

    const selectedColourType = this.state.colourTypePick;

    function ColourTones(props) {
      const colourClassName = props.colourClassName;
      const colourTonesMap = tones.map((tone, key) => (
        <div
          className={`c-swatch__tone  u-alchemy-${colourClassName}-${tone}-bg`}
          key={key}
        />
      ));
      return (
        <div className={`o-flex  o-flex__row  o-flex__wrap  c-swatch__tones`}>
          {colourTonesMap}
        </div>
      );
    }

    const tones = ['l1', 'l2', 'l3', 'l4', 'l5', 'd1', 'd2', 'd3', 'd4', 'd5'];

    const swatchesList = swatches
      .filter(function(filteredSwatches) {
        return filteredSwatches.colourType === selectedColourType;
      })
      .map((swatch, filteredSwatches) => (
        <div key={swatch.key}>
          <div
            className={`u-alchemy-${
              swatch.colourClass
            }-bg  c-swatch  o-grid__el  u-padding`}
            key={swatch.id}
          >
            <div className="o-flex">
              <div className="c-swatch__variants" />
              <span className="swatch-label">{swatch.usage}</span>
            </div>
          </div>
          <ColourTones colourClassName={swatch.colourClass} />
        </div>
      ));

    const colourTypePick = this.state.colourTypePick;

    const colourTypeList = this.state.colourTypes.map((type, key) => {
      const isCurrent = this.state.colourTypePick === type;
      return (
        <button
          className={
            `c-toolbar__btn  u-text-capitalise ` + (isCurrent ? 'active' : '')
          }
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
      <section className="o-section  u-padding">
        <div className="u-margin-bottom  u-margin-right  c-toolbar">
          {colourTypeList}
        </div>
        <header className="u-margin-bottom-large">
          <h2 className="u-margin-bottom-none">Colour</h2>
          <p>A tool that will display the correct colours.</p>
        </header>

        <div className="u-margin-bottom">
          <h3 className="u-text-capitalise">{selectedColourType}</h3>
          <div className="o-grid  o-grid--centre  o-grid--start o-grid--auto">
            {swatchesList}
          </div>
        </div>
      </section>
    );
  }
}

export default ColoursCard;
