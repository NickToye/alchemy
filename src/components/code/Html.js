import React from 'react';

import htmlGuidelines from '../data/htmlGuidelines';
import ContentsCard from '../common/ContentsCard';
import Sticky from '../common/Sticky';

class Html extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: htmlGuidelines,
      activeLink: '',
    };

    this.setActiveLink = this.setActiveLink.bind(this);
  }

  componentDidMount() {
    this.setState({
      activeLink: this.state.contents.section1.identifier,
    });
  }

  setActiveLink(e) {
    this.setState({ activeLink: e.target.dataset.value });
  }

  render() {
    return (
      <div className="o-flex o-flex--row">
        <aside className="u-1/5 u-margin-right-large">
          <Sticky className="sticky-one" enter="370">
            <ul className="o-list-bare u-margin-none a-contents-box">
              {Object.keys(this.state.contents).map(key => (
                <ContentsCard
                  key={key}
                  details={this.state.contents[key]}
                  activeLink={this.state.activeLink}
                  action={this.setActiveLink}
                />
              ))}
            </ul>
          </Sticky>
        </aside>
        <main className="u-4/5 a-page u-padding u-alchemy-white-bg">
          <div className="u-margin-bottom">
            <h2>Introduction</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default Html;
