import React from 'react';

import TypeSizes from './TypeSizes';
import TypeFaces from './TypeFaces';

class TypographyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h1 className="u-margin-bottom-none">Typography</h1>
          <p>A tool that will display the correct typography.</p>
        </header>
        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
          <TypeSizes />
          <TypeFaces />
        </section>
      </div>
    );
  }
}

export default TypographyCard;
