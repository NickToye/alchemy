import React from 'react';
import Surface from './Surface';

class SurfacesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surfaces: ['0', '1', '2', '3', '4', '5'],
    };
  }
  render() {
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h1 className="u-margin-none">Surfaces</h1>
          <p>A tool to display various surfaces.</p>
        </header>

        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
          <header className="o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-margin-bottom">
            <h2 className="u-alchemy-primary-colour u-margin-none">Surfaces palette</h2>
          </header>
          <div className="o-grid  o-grid--centre  o-grid--auto">
            {Object.keys(this.state.surfaces).map(key => (
              <div key={key}>
                <Surface key={key} details={this.state.surfaces[key]} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default SurfacesCard;

// TODO Add more elements to this card
