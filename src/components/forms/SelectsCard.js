import React from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

class SelectsCard extends React.Component {
  render() {
    return (
      <ScrollableAnchor id="selects">
        <section className="o-section u-relative o-surface--l2">
          <div className="a-toolbar o-flex o-flex--justify--between o-flex--align-center o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Selects</h2>
          </div>

          <div className="u-margin-bottom u-padding a-alchemy-bg-dark">Content here</div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default SelectsCard;
