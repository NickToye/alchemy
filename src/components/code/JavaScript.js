import React from 'react';

import jsGuidelines from '../data/jsGuidelines';
import ContentsCard from '../common/ContentsCard';
import Sticky from '../common/Sticky';

class JavaScript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: jsGuidelines,
    };
  }
  render() {
    return (
      <div className="o-flex o-flex--row">
        <aside className="u-1/5 u-margin-right-large">
          <Sticky className="sticky-one" enter="370">
            <ul className="o-list-bare u-margin-none a-contents-box">
              {Object.keys(this.state.contents).map(key => (
                <ContentsCard key={key} details={this.state.contents[key]} />
              ))}
            </ul>
          </Sticky>
        </aside>
        <main className="u-4/5 a-page u-padding u-alchemy-white-bg">
          <div className="u-margin-bottom">
            <h2>Introduction</h2>
          </div>

          <div className="u-margin-bottom">
            <h2>Syntax and Code Formatting</h2>
          </div>

          <div className="u-margin-bottom">
            <h2>Naming Conventions</h2>
          </div>

          <div className="u-margin-bottom">
            <h2>JS Classes</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default JavaScript;
