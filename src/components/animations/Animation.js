import React from 'react';

// import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import PropTypes from 'prop-types';
import animations from '../data/animations';
import Cartoon from './Cartoon';

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAnimation: '',
      animations: animations,
      animationSpeed: 'base',
    };
  }

  render() {
    const animation = this.props.animation;

    return (
      <section key={animation.key} className="o-section u-margin-bottom-large">
        <header className="o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-margin-bottom">
          <h2 className="u-alchemy-primary-colour u-margin-none">{animation.section} palette</h2>
        </header>

        <div className="o-grid o-grid--centre o-grid--start o-grid--auto">
          {Object.keys(this.state.animations)
            .filter(function(filteredAnimations) {
              return animations[filteredAnimations].animationType === animation.section;
            })
            .map(key => (
              <Cartoon
                key={key}
                animation={this.state.animations[key]}
                animationSpeed={this.state.animationSpeed}
              />
            ))}
        </div>
      </section>
    );
  }
}

Animation.propTypes = {
  animation: PropTypes.object,
  action: PropTypes.func,
};

export default Animation;
