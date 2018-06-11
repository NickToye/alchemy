import React from 'react';

import sizes from '../data/sizes';
import Box from './Box';

class PaddingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: sizes,
    };
  }
  render() {
    return (
        <section className="o-section u-relative u-margin-bottom-large">
          <div className="a-toolbar__inner o-flex o-flex--justify--between o-flex--align-center o-flex--row u-margin-bottom">
            <h2 className="u-alchemy-primary-colour u-margin-none">Padding</h2>
          </div>

          <div className="u-margin-bottom a-alchemy-bg-dark">
            {Object.keys(this.state.sizes).map(key => (
              <div key={key} className="u-margin-bottom">
                <Box key={key} property={'padding'} details={this.state.sizes[key]} />
              </div>
            ))}
          </div>
        </section>
    );
  }
}

export default PaddingCard;
