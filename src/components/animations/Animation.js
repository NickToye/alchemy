import React from 'react';

// import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import PropTypes from 'prop-types';
import animations from '../data/animations';
import Cartoon from './Cartoon';
import ScrollableAnchor from 'react-scrollable-anchor';

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAnimation: '',

      animations: animations,
    };
  }

  render() {
    // debugger;
    const animation = this.props.animation;

    return (
      <ScrollableAnchor id={animation.identifier}>
        <section
          key={animation.key}
          className="o-section u-margin-bottom-huge o-surface--l2 a-alchemy-bg-dark"
        >
          <div className="c-textbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">{animation.section} palette</h2>
          </div>

          <div className="o-grid o-grid--centre o-grid--start o-grid--auto u-padding">
            {Object.keys(this.state.animations)
              .filter(function(filteredAnimations) {
                return animations[filteredAnimations].animationType === animation.section;
              })
              .map(key => <Cartoon key={key} animation={this.state.animations[key]} />)}
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

Animation.propTypes = {
  animation: PropTypes.object,
  action: PropTypes.func,
};

export default Animation;
