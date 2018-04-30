import React from 'react';

import StyleGuidelines from '../data/styleGuidelines';
import ContentsCard from './ContentsCard';
import Introduction from './styles/Introduction';
import Syntax from './styles/Syntax';
import NamingConventions from './styles/NamingConventions';
import CssSelectors from './styles/CssSelectors';
import Specificity from './styles/Specificity';
import ArchitecturalPrinciples from './styles/ArchitecturalPrinciples';
import Sticky from '../common/Sticky';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: StyleGuidelines,
    };
  }

  render() {
    return (
      <div className="a-page  u-padding u-alchemy-white-bg  o-flex  o-flex--row">
        <aside className="u-1/5 u-margin-right-large">
          <Sticky className="sticky-one" enter="370">
            <ul className="o-list-bare  a-contents-box">
              {Object.keys(this.state.contents).map(key => (
                <ContentsCard key={key} details={this.state.contents[key]} />
              ))}
            </ul>
          </Sticky>
        </aside>
        <main className="u-4/5">
          <Introduction />
          <Syntax />
          <NamingConventions />
          <CssSelectors />
          <Specificity />
          <ArchitecturalPrinciples />
        </main>
      </div>
    );
  }
}

export default Styles;
