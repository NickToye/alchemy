import React from 'react';
import PropTypes from 'prop-types';

class ToolbarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const details = this.props.details;
    const activeSizeClass = this.props.activeSize;
    const isCurrent = activeSizeClass === details.sizeClass;

    return (
      <button
        className={`a-toolbar__btn  u-text-capitalise ` + (isCurrent ? 'active' : '')}
        key={details.key}
        value={details.sizeClass}
        onClick={this.props.action}
      >
        {details.sizeClass}
      </button>
    );
  }
}

ToolbarButton.propTypes = {
  details: PropTypes.object,
  action: PropTypes.func,
  activeSize: PropTypes.string,
  activeSizeUnit: PropTypes.number,
};

export default ToolbarButton;
