import React from 'react';

import StyleGuidelines from '../data/styleGuidelines';
import ContentsCard from '../common/ContentsCard';
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
      contentsPick: 'introduction',
    };

    this.showContentsPick = this.showContentsPick.bind(this);
  }

  showContentsPick(e) {
    this.setState({ contentsPick: e.target.value });
  }

  render() {
    // console.log(this.state.contentPick);
    return (
      <div className="o-wrapper  o-wrapper--full u-padding-none u-margin-none">
        <div className="o-layout">
          <div className="u-1/5 o-layout__item">
            <aside className="a-aside">
              <Sticky className="sticky-one" enter="370">
                <ul className="o-list-bare  u-margin-none  a-contents-box">
                  {Object.keys(this.state.contents).map(key => (
                    <ContentsCard
                      key={key}
                      details={this.state.contents[key]}
                      contentsPick={this.state.contentsPick}
                      action={this.showContentsPick}
                    />
                  ))}
                </ul>
              </Sticky>
            </aside>
          </div>
          <div className="u-4/5 o-layout__item">
            <main className="a-page  u-padding u-alchemy-white-bg">
              <Introduction />
              <Syntax />
              <NamingConventions />
              <CssSelectors />
              <Specificity />
              <ArchitecturalPrinciples />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Styles;
