import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mqIcon = this.props.mq;
    const mqIconRotate = this.props.mqRotate;
    return (
      <div className="a-toolbar u-padding-tiny">
        <div className="a-toolbar__mq  u-margin-right-large">
          <small className="a-alchemy-secondary-colour">MQ</small>
          <div className="a-devices o-flex  o-flex--center u-padding-horizontal-tiny a-alchemy-tertiary-colour">
            <FontAwesomeIcon icon={mqIcon} rotation={mqIconRotate} />
          </div>
        </div>
        <i className="fa fa-cog" />
      </div>
    );
  }
}

ToolBar.propTypes = {
  mq: PropTypes.string,
  mqRotate: PropTypes.number,
  action: PropTypes.func,
};

export default ToolBar;
