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
      <section className="o-section u-padding u-relative">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-none">Surfaces</h1>
          <p>A tool to display various surfaces.</p>
        </header>

        <div className="o-grid  o-grid--centre  o-grid--auto  u-alchemy-light-grey-bg u-padding">
          {Object.keys(this.state.surfaces).map(key => (
            <div key={key}>
              <Surface key={key} details={this.state.surfaces[key]} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default SurfacesCard;
