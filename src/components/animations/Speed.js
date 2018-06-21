import React from 'react';
import PropTypes from 'prop-types';

class Speed extends React.Component {
  render() {
    const details = this.props.details;
    const speedPick = this.props.speedPick;
    const isCurrent = speedPick === details.className;
    return (
      <button
        key={details.key}
        className={`a-toolbar__btn u-alchemy-secondary2-colour` + (isCurrent ? 'active' : '')}
        value={details.speed}
        onClick={this.props.action}
      >
        {details.speed}
      </button>
    );
  }
}

Speed.propTypes = {
  details: PropTypes.object,
  action: PropTypes.func,
  speedPick: PropTypes.string,
};

export default Speed;
