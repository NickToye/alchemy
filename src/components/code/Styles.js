import React from 'react';

import Introduction from './styles/Introduction';
import Syntax from './styles/Syntax';
import NamingConventions from './styles/NamingConventions';
import CssSelectors from './styles/CssSelectors';
import Specificity from './styles/Specificity';
import ArchitecturalPrinciples from './styles/ArchitecturalPrinciples';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.state.contentPick);
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h1>CSS/SCSS</h1>
          <p>Guidelines for writing efficient and extensive styles.</p>
        </header>
        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
          <Introduction />
          <Syntax />
          <NamingConventions />
          <CssSelectors />
          <Specificity />
          <ArchitecturalPrinciples />
        </section>
      </div>
    );
  }
}

export default Styles;
