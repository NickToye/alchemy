import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class CardComponent extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'cards'}>
        <section className="u-margin-bottom u-relative">
          <div className="c-textbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Cards</h2>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default CardComponent;
