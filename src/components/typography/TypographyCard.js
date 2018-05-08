import React from 'react';

// import colours from '../data/colours';

// import typography from '../data/typography';

import Sticky from '../common/Sticky';

import typographyTypes from '../data/typographyTypes';
import ContentsCard from '../common/ContentsCard';
import TypeSizes from './TypeSizes';
import TypeFaces from './TypeFaces';

class TypographyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typographyTypes: typographyTypes,
    };
  }

  render() {
    return (
      <section className="o-section  u-padding  u-relative">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-bottom-none">Typography</h1>
          <p>A tool that will display the correct typography.</p>
        </header>
        <div className="o-flex  o-flex--row">
          <aside className="u-1/5 u-margin-right-large">
            <Sticky className="sticky-one a-alchemy-bg o-surface--l1" enter="370">
              <ul className="o-list-bare  u-margin-bottom-none a-contents-box">
                {Object.keys(this.state.typographyTypes).map(key => (
                  <ContentsCard key={key} details={this.state.typographyTypes[key]} />
                ))}
              </ul>
            </Sticky>
          </aside>
          <main className="u-4/5">
            <TypeSizes />
            <TypeFaces />
          </main>
        </div>
      </section>
    );
  }
}

export default TypographyCard;
