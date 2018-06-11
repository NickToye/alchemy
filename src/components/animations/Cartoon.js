import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Cartoon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activateAnimation: false,
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
    const initialState = this.props.initialState;
    const animation = this.props.animation;

    let animationStatus;
    if (this.state.activateAnimation) {
      animationStatus = <FontAwesomeIcon icon="cog" spin />;
    } else {
      animationStatus = animation.animation;
    }

    return (
      <div>
        <div className={`a-animations_wrapper   u-margin-bottom`}>
          <div
            className={
              `a-animations  u-padding  u-alchemy-secondary2-bg  o-flex  ` +
              (this.state.activateAnimation ? ` ${animation.animateClass} animated ` : `${initialState}`)
            }
          >
            <img src={require('../../images/card-logo.png')} className="" />
          </div>
        </div>
        <button
          className="c-btn  c-btn--rounded  c-btn--secondary1  c-btn--block"
          key={animation.key}
          value={animation.animateClass}
          onClick={this.animateAction}
        >
          {animationStatus}
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
