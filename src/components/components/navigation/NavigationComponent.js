import React from 'react';

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h2 className="u-alchemy-primary-colour u-margin-none">Navigation</h2>
        </header>
        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">Navigation content...</section>
      </div>
    );
  }
}

export default NavigationComponent;
