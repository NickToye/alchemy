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
      activeLink: '',
    };

    this.setActiveLink = this.setActiveLink.bind(this);
  }

  componentDidMount() {
    this.setState({
      activeLink: this.state.contents.section1.identifier,
    });
  }

  setActiveLink(e) {
    this.setState({ activeLink: e.target.dataset.value });
  }

  render() {
    // console.log(this.state.contentPick);
    return (
      <div className="o-flex o-flex--row">
        <aside className="u-1/5 u-margin-right-large">
          <Sticky className="sticky-one" enter="370">
            <ul className="o-list-bare  u-margin-none  a-contents-box">
              {Object.keys(this.state.contents).map(key => (
                <ContentsCard
                  key={key}
                  details={this.state.contents[key]}
                  activeLink={this.state.activeLink}
                  action={this.setActiveLink}
                />
              ))}
            </ul>
          </Sticky>
        </aside>

        <main className="u-4/5 a-page u-padding u-alchemy-white-bg">
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
