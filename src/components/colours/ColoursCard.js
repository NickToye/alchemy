import React from 'react';

class ColoursCard extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const swatches = [
      { id: 1, usage: 'This is the primary colour. Used mainly in the logo and accents.', colourClass: 'primary' },
      { id: 2, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'secondary1' },
      { id: 3, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'secondary2' },
      { id: 4, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'secondary3' },
      { id: 5, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'black' },
      { id: 6, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'white' },
      { id: 7, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'pale-grey' },
      { id: 8, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'light-grey' },
      { id: 9, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'grey' },
      { id: 10, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'medium-grey' },
      { id: 11, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'dark-grey' },
      { id: 12, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'positive' },
      { id: 13, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'caution' },
      { id: 14, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'negative' },
      { id: 15, usage: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.', colourClass: 'info' },
    ];
    const swatchesList = swatches.map(swatch => (
      <div
        className={`u-alchemy-${swatch.colourClass}-bg  c-swatch  o-grid__el  u-padding`}
        key={swatch.id}
      >
        <div className="o-flex">
          <div className="c-swatch__variants"/>
          <span className="swatch-label">{swatch.usage}</span>
        </div>
      </div>
    ));
    return (
      <section className="o-section  u-padding">
        <header>
          <h2>Colour</h2>
          <p>A tool that will display the correct colours.</p>
        </header>

        <div className="o-grid  o-grid--centre  o-grid--start">{swatchesList}</div>
      </section>
    );
  }
}

export default ColoursCard;
