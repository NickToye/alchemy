import React from 'react';

// import htmlGuidelines from '../data/htmlGuidelines';

class Html extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h1>HTML</h1>
          <p>Guidelines for writing efficient and extensive html.</p>
        </header>
        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
          <div className="u-margin-bottom">
            <h2>Introduction</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Html;
