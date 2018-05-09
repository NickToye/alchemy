import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import PropTypes from 'prop-types';
import animations from '../data/animations';
import Cartoon from './Cartoon';

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAnimation: '',
      activateAnimation: false,
      animations: animations,
    };

    this.animateAction = this.animateAction.bind(this);
  }

  animateAction(e) {
    this.setState({ activeAnimation: e.target.value });
    this.setState({ activateAnimation: true });
    setTimeout(() => {
      this.setState({ activateAnimation: false });
    }, 3000);
  }

  render() {
    // debugger;
    const animation = this.props.animation;

    // let animationStatus;
    // if (this.state.activateAnimation) {
    //   animationStatus = <FontAwesomeIcon icon="cog" spin />;
    // } else {
    //   animationStatus = animation.animation;
    // }

    return (
      <section key={animation.key} className="o-section u-margin-bottom-huge o-surface--l2 a-alchemy-bg-dark">
        <div className="c-textbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
          <h2 className="u-alchemy-white-colour u-margin-none">{animation.section} palette</h2>
        </div>

        <div className="o-grid o-grid--centre o-grid--start o-grid--auto u-padding">
          {Object.keys(this.state.animations)
            .filter(function(filteredAnimations) {
              return animations[filteredAnimations].animationType === animation.section;
            })
            .map(key => (
              <Cartoon
                key={key}
                animation={this.state.animations[key]}
                activateAnimation={this.state.activateAnimation}
                action={this.animateAction[key]}
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
