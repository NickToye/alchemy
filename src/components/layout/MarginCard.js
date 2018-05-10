import React from 'react';

import sizes from '../data/sizes';
import Box from './Box';
import ScrollableAnchor from 'react-scrollable-anchor';

class MarginCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: sizes,
    };
  }
  render() {
    return (
      <ScrollableAnchor id="margin">
        <section className="o-section u-relative o-surface--l2">
          <div className="a-toolbar o-flex o-flex--justify--between o-flex--align-center o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Margin</h2>
          </div>

          <div className="u-margin-bottom u-padding a-alchemy-bg-dark">
            {Object.keys(this.state.sizes).map(key => (
              <div key={key} className="u-margin-bottom">
                <Box key={key} property={'margin'} details={this.state.sizes[key]} />
              </div>
            ))}
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default MarginCard;
