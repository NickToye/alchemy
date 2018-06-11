import React from 'react';

// import jsGuidelines from '../data/jsGuidelines';

class JavaScript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h1>JavaScript</h1>
          <p>Guidelines for writing efficient and extensive javascript.</p>
        </header>
        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
          <div className="u-margin-bottom">
            <h2>Introduction</h2>
          </div>

          <div className="u-margin-bottom">
            <h2>Syntax and Code Formatting</h2>
          </div>

          <div className="u-margin-bottom">
            <h3>Naming Conventions</h3>
          </div>

          <div className="u-margin-bottom">
            <h2>JS Classes</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default JavaScript;
