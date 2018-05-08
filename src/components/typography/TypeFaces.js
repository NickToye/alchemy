import React from 'react';

import typefaces from '../data/typefaces';
import Element from './Element';
import Face from './Face';
import ScrollableAnchor from 'react-scrollable-anchor';

class TypeFaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleText: 'Alchemy Type Tester',
      exampleElement: 'p',
      elements: ['h1', 'h2', 'h3', 'p'],
      face: typefaces,
    };

    this.updateExampleText = this.updateExampleText.bind(this);
    this.updateExampleElement = this.updateExampleElement.bind(this);
  }

  updateExampleText(e) {
    this.setState({ exampleText: e.target.value });
  }

  updateExampleElement(e) {
    this.setState({ exampleElement: e.target.value });
  }

  render() {
    return (
      <ScrollableAnchor id="typefaces">
        <section className="u-margin-bottom u-relative">
          <div className="c-textbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Type Faces</h2>
            <div className="o-surface--l1">
              <div className="o-flex  o-flex--row  tools-wrapper">
                <input
                  className="c-textbar_input o-form__input"
                  type="text"
                  value={this.state.exampleText}
                  onChange={this.updateExampleText}
                  size="30"
                />
                {Object.keys(this.state.elements).map(key => (
                  <Element
                    key={key}
                    details={this.state.elements[key]}
                    elementPick={this.state.exampleElement}
                    action={this.updateExampleElement}
                  />
                ))}
              </div>
            </div>
          </div>
          <div key={this.key} className="u-alchemy-white-bg">
            <div className="o-pod  u-padding  u-margin-bottom  u-alchemy-white-bg">
              {Object.keys(this.state.face).map(key => (
                <Face
                  key={key}
                  details={this.state.face[key]}
                  exampleText={this.state.exampleText}
                  exampleElement={this.state.exampleElement}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default TypeFaces;
