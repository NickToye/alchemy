import React from 'react';

import typographyTypes from '../data/typographyTypes';
import TypeSizes from './TypeSizes';
import TypeFaces from './TypeFaces';

class TypographyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: typographyTypes,
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
      <section className="o-section  u-padding  u-relative">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-bottom-none">Typography</h1>
          <p>A tool that will display the correct typography.</p>
        </header>
        <main>
          <TypeSizes />
          <TypeFaces />
        </main>
      </section>
    );
  }
}

export default TypographyCard;
