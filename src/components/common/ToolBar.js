import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import speeds from '../data/speeds';
import Speed from '../animations/Speed';

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speeds: speeds,
    };

  }



  render() {
    const mqIcon = this.props.mq;
    const mqIconRotate = this.props.mqRotate;
    const speed = this.props.animationSpeed;
    return (
      <div className="a-toolbar u-padding-tiny">
        <div className="a-toolbar__mq  u-margin-right-large">
          <small className="a-alchemy-secondary-colour">MQ</small>
          <div className="a-devices o-flex  o-flex--center u-padding-horizontal-tiny a-alchemy-tertiary-colour">
            <FontAwesomeIcon icon={mqIcon} rotation={mqIconRotate} />
          </div>
        </div>
          <div className="a-toolbar__tool">
            <small className="a-alchemy-secondary-colour">Animation Speed</small>
              {Object.keys(this.state.speeds).map(key => (
                <Speed
                  key={key}
                  details={this.state.speeds[key]}
                  action={this.props.action}
                  speedPick={speed}
                />
              ))}
          </div>

      </div>
    );
  }
}

ToolBar.propTypes = {
  mq: PropTypes.string,
  mqRotate: PropTypes.number,
  animationSpeed: PropTypes.string,
  action: PropTypes.func,
};

export default ToolBar;
