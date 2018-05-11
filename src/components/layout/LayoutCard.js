import React from 'react';

import ContentsCard from '../common/ContentsCard';
import layoutTypes from '../data/layoutTypes';
import AtomicUnitCard from './AtomicUnitCard';
import PaddingCard from './PaddingCard';
import MarginCard from './MarginCard';
import LayoutGrid from './LayoutGrid';
import Sticky from '../common/Sticky';

class LayoutCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: layoutTypes,
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
      <section className="o-section u-padding">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-none">Layout</h1>
          <p>A tool to display paddings and margins around elements.</p>
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
            <AtomicUnitCard />
            <PaddingCard />
            <MarginCard />
            <LayoutGrid />
          </main>
        </div>
      </section>
    );
  }
}

export default LayoutCard;
