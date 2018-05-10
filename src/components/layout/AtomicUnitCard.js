import React from 'react';

import sizes from '../data/sizes';
import AtomicElement from './AtomicElement';
import ScrollableAnchor from 'react-scrollable-anchor';

class AtomicUnitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: sizes,
    };
  }
  render() {
    return (
      <ScrollableAnchor id="atomic-unit">
        <section className="o-section u-relative o-surface--l2">
          <div className="a-toolbar o-flex o-flex--justify--between o-flex--align-center o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Atomic Unit</h2>
          </div>

          <div className="u-margin-bottom u-padding a-alchemy-bg-dark">
            <div className="o-media u-margin-bottom">
              <div className="o-media__img  nucleus u-margin-right-small" />
              <p className="o-media__body  u-margin-none">
                <span className="u-margin-right-small">Nucleus Unit</span>
                <small className="u-alchemy-primary-colour">6px</small>
                <br />Nucleus Unit (6px) multiplied by a factor of 1.
              </p>
            </div>

            <div className="o-grid  o-grid--centre  o-grid--auto">
              {Object.keys(this.state.sizes).map(key => (
                <AtomicElement key={key} details={this.state.sizes[key]} />
              ))}
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default AtomicUnitCard;
