import React from 'react';
import PropTypes from 'prop-types';

class Cartoon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const animateClass = this.props.animateClass;
    const initialState = this.props.initialState;
    const activateAnimation = this.props.activateAnimation;
    const animation = this.props.animation;

    return (
      <div>
        <div className={`a-animations_wrapper  u-padding  u-alchemy-black-bg  u-margin-bottom`}>
          <div
            className={
              `a-animations  u-padding  u-alchemy-primary-bg  o-flex  ` +
              (activateAnimation ? ` ${animation.animateClass} animated ` : `${initialState}`)
            }
          >
            <img src={require('../../images/card-logo.png')} className="" />
          </div>
        </div>
        <button
          className="c-btn c-btn--rounded  c-btn--secondary2"
          key={animation.key}
          value={animation.animateClass}
          onClick={this.props.action}
        >
          {animation.animation}
        </button>
      </div>
    );
  }
}

Cartoon.propTypes = {
  animation: PropTypes.object,
  // animateClass: PropTypes.string,
  initialState: PropTypes.string,
  activateAnimation: PropTypes.bool,
  action: PropTypes.func,
};

export default Cartoon;
