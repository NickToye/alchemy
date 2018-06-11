import React from 'react';

class TextInputsCard extends React.Component {
  render() {
    return (
        <section className="o-section u-relative u-margin-bottom-large">
          <header className="o-flex o-flex--justify--between o-flex--align-center o-flex--row u-margin-bottom">
            <h2 className="u-alchemy-primary-colour u-margin-none">Text Inputs</h2>
          </header>

          <div className="u-margin-bottom ">
            <input className="o-form__input" type="text" placeholder="Input some text..." />
          </div>
        </section>
    );
  }
}

export default TextInputsCard;
