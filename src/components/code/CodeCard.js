import React from 'react';

class CodeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h2 className="u-alchemy-primary-colour u-margin-none">Code Guidelines</h2>
          <p>A set of coding standards.</p>
        </header>
        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">...</section>
      </div>
    );
  }
}

export default CodeCard;
