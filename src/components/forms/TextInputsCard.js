import React from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

class TextInputsCard extends React.Component {
  render() {
    return (
      <ScrollableAnchor id="text-inputs">
        <section className="o-section u-relative o-surface--l2">
          <div className="a-toolbar o-flex o-flex--justify--between o-flex--align-center o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Text Inputs</h2>
          </div>

          <div className="u-margin-bottom u-padding a-alchemy-bg-dark">
            <input className="o-form__input" type="text" placeholder="Input some text..." />
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default TextInputsCard;
