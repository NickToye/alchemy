import React from 'react';
import LifeForce from './LifeCycle';

class PlaygroundCard extends React.Component {
  render() {
    return (
      <section className="o-section u-padding">
        <header>
          <h2>Playground</h2>
          <p>Place to test things.</p>
        </header>
        <div>
          <div className="u-padding u-alchemy-white-bg">
            <h3>Component Lifecycle</h3>
            <LifeForce />
          </div>
        </div>
      </section>
    );
  }
}

export default PlaygroundCard;
