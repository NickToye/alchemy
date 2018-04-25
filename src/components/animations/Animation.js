import React from 'react';
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
    return (
      <div key={details.key}>
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
          {details.animation}
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

{
  /* TODO Bounce In needs fixing */
}
