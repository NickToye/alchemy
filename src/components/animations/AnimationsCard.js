import React from 'react';

import animationTypes from '../data/animationTypes';
import Animation from './Animation';

class AnimationsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: animationTypes,
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
    // const buzz = this.route.animationSpeed;
    // console.log(buzz);
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h1 className="u-margin-bottom-none">Animations</h1>
          <p>A tool to display animations available to elements.</p>
        </header>

          <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
            {Object.keys(this.state.contents).map(key => (
              <Animation key={key} animation={this.state.contents[key]} />
            ))}
          </section>
      </div>
    );
  }
}

export default AnimationsCard;
