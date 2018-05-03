import React from 'react';

import ComponentList from '../data/componentList';
import ContentsCard from '../common/ContentsCard';
import Sticky from '../common/Sticky';

import BannerComponent from './banners/BannerComponent';

class ComponentsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: ComponentList,
    };
  }
  render() {
    return (
      <section className="o-section u-padding">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-none">Components</h1>
          <p>A collection of components.</p>
        </header>
        <div className="o-flex  o-flex--row">
          <aside className="u-1/5  u-alchemy-white-bg u-margin-right-large">
            <Sticky className="sticky-one" enter="370">
              <ul className="o-list-bare  a-contents-box">
                {Object.keys(this.state.contents).map(key => (
                  <ContentsCard key={key} details={this.state.contents[key]} />
                ))}
              </ul>
            </Sticky>
          </aside>
          <main className="u-4/5">
            <BannerComponent />
          </main>
        </div>
      </section>
    );
  }
}

export default ComponentsCard;