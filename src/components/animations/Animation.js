import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import PropTypes from 'prop-types';

import Cartoon from './Cartoon';

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAnimation: '',
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
    const details = this.props.details;

    let animationStatus;
    if (this.state.activateAnimation) {
      animationStatus = <FontAwesomeIcon icon={faCog} spin />;
    } else {
      animationStatus = details.animation;
    }

    return (
      <div key={details.key} className="u-margin-bottom">
        <Cartoon
          animateClass={this.state.activeAnimation}
          activateAnimation={this.state.activateAnimation}
          initialState={details.initialState}
        />
        <button
          className="c-btn c-btn--rounded  c-btn--secondary2"
          key={details.key}
          value={details.animateClass}
          onClick={this.animateAction}
        >
          {animationStatus}
        </button>
      </div>
    );
  }
}

Animation.propTypes = {
  details: PropTypes.object,
  action: PropTypes.func,
};

export default Animation;
