import React from 'react';

import animationTypes from '../data/animationTypes';
import Animation from './Animation';
import ContentsCard from '../common/ContentsCard';
import Sticky from '../common/Sticky';

class AnimationsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: animationTypes,
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
    return (
      <section className="o-section u-padding u-relative">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-bottom-none">Animations</h1>
          <p>A tool to display animations available to elements.</p>
        </header>
        <div className="o-flex  o-flex--row">
          <aside className="u-1/5 u-margin-right-large">
            <Sticky className="sticky-one a-alchemy-bg o-surface--l1" enter="370">
              <ul className="o-list-bare  u-margin-bottom-none a-contents-box">
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
          <main className="u-4/5">
            {Object.keys(this.state.contents).map(key => (
              <Animation key={key} animation={this.state.contents[key]} />
            ))}
          </main>
        </div>
      </section>
    );
  }
}

export default AnimationsCard;
