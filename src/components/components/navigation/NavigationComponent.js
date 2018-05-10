import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollableAnchor id={'cards'}>
        <section className="u-margin-bottom u-relative">
          <div className="a-toolbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Navigation</h2>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default NavigationComponent;
