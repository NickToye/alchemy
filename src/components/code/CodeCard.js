import React from 'react';

import Styles from './Styles';
import JavaScript from './JavaScript';
import Html from './Html';

class CodeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guidelinesType: ['CSS', 'JS', 'HTML'],
      guidelinesTypePick: 'CSS',
    };

    this.showGuidelinesTypePick = this.showGuidelinesTypePick.bind(this);
  }

  showGuidelinesTypePick(e) {
    this.setState({ guidelinesTypePick: e.target.value });
  }

  render() {
    let guidelines;
    if (this.state.guidelinesTypePick === 'CSS') {
      guidelines = <Styles />;
    } else if (this.state.guidelinesTypePick === 'JS') {
      guidelines = <JavaScript />;
    } else {
      guidelines = <Html />;
    }

    const guidelinesTypeList = this.state.guidelinesType.map((type, key) => {
      const isCurrent = this.state.guidelinesTypePick === type;
      return (
        <div className="tools-wrapper">
          <button
            className={`c-toolbar__btn  u-text-capitalise ` + (isCurrent ? 'active' : '')}
            key={key}
            value={type}
            onClick={this.showGuidelinesTypePick}
          >
            <i className="fas fa-fw fa-tag fa-lg u-padding-right-tiny" />
            {type}
          </button>
        </div>
      );
    });

    return (
      <section className="o-section  u-padding  u-relative">
        <div className="u-margin-bottom  u-margin-right  c-toolbar">{guidelinesTypeList}</div>
        <header className="u-margin-bottom-large">
          <h1 className="u-h1  u-margin-bottom-none">Code Guidelines</h1>
          <p>A set of coding standards.</p>
        </header>

        <h3>{this.state.guidelinesTypePick} Guide</h3>

        {guidelines}
      </section>
    );
  }
}

export default CodeCard;
