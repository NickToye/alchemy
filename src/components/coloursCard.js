import React from 'react';

const links = (
  <a href className="u-block">
    <i className="fas fa-link" /> Link
  </a>
);

class ColoursCard extends React.Component {
  state = { showLinks: false };

  onClickHandler = () => {
    this.setState(prev => ({ showLinks: !prev.showLinks }));
  };

  render() {
    const swatches = [
      { id: 1, colour: 'Yellow', colourClass: 'yellow' },
      { id: 2, colour: 'Pink', colourClass: 'pink' },
      { id: 3, colour: 'Blue', colourClass: 'blue' },
      { id: 4, colour: 'Red', colourClass: 'red' },
      { id: 5, colour: 'Black', colourClass: 'black' },
      { id: 6, colour: 'White', colourClass: 'white' },
      { id: 7, colour: 'Pale Grey', colourClass: 'pale-grey' },
      { id: 8, colour: 'Light Grey', colourClass: 'light-grey' },
      { id: 9, colour: 'Grey', colourClass: 'grey' },
      { id: 10, colour: 'Medium Grey', colourClass: 'medium-grey' },
      { id: 11, colour: 'Dark Grey', colourClass: 'dark-grey' },
      { id: 12, colour: 'Positive', colourClass: 'positive' },
      { id: 13, colour: 'Caution', colourClass: 'caution' },
      { id: 14, colour: 'Negagtive', colourClass: 'negative' },
      { id: 15, colour: 'Info', colourClass: 'info' },
    ];
    const swatchesList = swatches.map(swatch => (
      <div
        className={`u-sofology-${swatch.colourClass}-bg  o-grid__el`}
        key={swatch.id}
      >
        <div className="o-flex">
          <span className="swatch-label">{swatch.colour}</span>
          {this.state.showLinks ? links : null}
        </div>
      </div>
    ));
    return (
      <section className="o-section">
        <header>
          <h2>Colour</h2>
          <p>A tool that will display the correct colours.</p>
        </header>

        <div className="options">
          <h3>Options</h3>
          <button
            className={
              'c-btn ' + (this.state.showLinks ? 'c-btn--active' : ' ')
            }
            onClick={this.onClickHandler}
          >
            <i className="fas fa-link" />{' '}
            {this.state.showLinks ? 'Hide' : 'Show'} Links
          </button>
        </div>

        <div className="o-grid  o-grid--centre">{swatchesList}</div>
      </section>
    );
  }
}

export default ColoursCard;
