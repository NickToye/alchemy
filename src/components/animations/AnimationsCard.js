import React from 'react';

import animations from '../data/animations';
import Animation from './Animation';

class AnimationsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationTypes: ['Fades', 'Bounces', 'Attention Seeking', 'Slides'],
      animationTypePick: 'Fades',
      animations: animations,
    };

    this.showAnimationTypePick = this.showAnimationTypePick.bind(this);
  }

  showAnimationTypePick(e) {
    this.setState({ animationTypePick: e.target.value });
  }

  render() {
    const selectedAnimationType = this.state.animationTypePick;
    const animationTypeList = this.state.animationTypes.map((type, key) => {
      const isCurrent = this.state.animationTypePick === type;
      return (
        <button
          className={`c-toolbar__btn  u-text-capitalise ` + (isCurrent ? 'active' : '')}
          key={key}
          value={type}
          onClick={this.showAnimationTypePick}
        >
          <i className="fas fa-fw fa-tag fa-lg u-padding-right-tiny" />
          {type}
        </button>
      );
    });

    return (
      <section className="o-section u-padding u-relative">
        <div className="u-margin-bottom  u-margin-right  c-toolbar">
          <div className="tools-wrapper">{animationTypeList}</div>
        </div>
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-none">Animations</h1>
          <p>A tool to display animations available to elements.</p>
        </header>

        <div className="u-margin-bottom">
          <h2>{this.state.animationTypePick}</h2>

          <div className="o-grid  o-grid--centre  o-grid--start o-grid--auto">
            {Object.keys(this.state.animations)
              .filter(function(filteredAnimations) {
                return animations[filteredAnimations].animationType === selectedAnimationType;
              })
              .map(key => (
                <div key={key}>
                  <Animation key={key} details={this.state.animations[key]} />
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default AnimationsCard;
