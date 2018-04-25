import React from 'react';
import PropTypes from 'prop-types';

class Cartoon extends React.Component {
  render() {
    const animateClass = this.props.animateClass;
    const initialState = this.props.initialState;
    const activateAnimation = this.props.activateAnimation;

    return (
      <div className={`a-animations_wrapper  u-padding  u-alchemy-black-bg  u-margin-bottom`}>
        {activateAnimation}
        <div
          className={
            `a-animations  u-padding  u-alchemy-primary-bg  o-flex  ` +
            (activateAnimation ? ` ${animateClass} animated ` : '') +
            initialState
          }
        >
          <img src={require('../../images/card-logo.png')} className="" />
        </div>
      </div>
    );
  }
}

Cartoon.propTypes = {
  animateClass: PropTypes.string,
  initialState: PropTypes.string,
  activateAnimation: PropTypes.bool,
};

export default Cartoon;
