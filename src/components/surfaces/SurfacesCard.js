import React from 'react';
import Sticky from '../common/Sticky';
import Surface from './Surface';

class SurfacesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surfaces: ['0', '1', '2', '3', '4', '5'],
    };
  }
  render() {
    return (
      <section className="o-section u-padding u-relative">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-none">Surfaces</h1>
          <p>A tool to display various surfaces.</p>
        </header>
        <div className="o-flex  o-flex--row">
          <aside className="u-1/5 u-margin-right-large">
            <Sticky className="sticky-one a-alchemy-bg o-surface--l1" enter="370">
              <ul className="o-list-bare u-margin-bottom-none a-contents-box">
                <li>
                  <a href="#" className="u-padding-horizontal-small u-padding-vertical-tiny">
                    Fizz
                  </a>
                </li>
                <li>
                  <a href="#" className="u-padding-horizontal-small u-padding-vertical-tiny">
                    Fizz
                  </a>
                </li>
                <li>
                  <a href="#" className="u-padding-horizontal-small u-padding-vertical-tiny">
                    Fizz
                  </a>
                </li>
              </ul>
            </Sticky>
          </aside>
          <main className="u-4/5">
            <section className="o-section u-margin-bottom-huge o-surface--l2 a-alchemy-bg-dark">
              <div className="a-toolbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
                <h2 className="u-alchemy-white-colour u-margin-none">Surfaces palette</h2>
              </div>
              <div className="o-grid  o-grid--centre  o-grid--auto u-padding u-alchemy-pale-grey-bg">
                {Object.keys(this.state.surfaces).map(key => (
                  <div key={key}>
                    <Surface key={key} details={this.state.surfaces[key]} />
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </section>
    );
  }
}

export default SurfacesCard;

// TODO Add more elements to this card
