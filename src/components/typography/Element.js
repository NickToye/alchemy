import React from 'react';
import PropTypes from 'prop-types';

class Element extends React.Component {
  render() {
    const details = this.props.details;
    const element = this.props.elementPick;
    const isCurrent = element === details;

    return (
      <button
        className={'c-textbar_btn c-btn c-btn--small ' + (isCurrent ? 'active' : '')}
        value={details}
        key={details.key}
        onClick={this.props.action}
      >
        {details}
      </button>
    );
  }
}

Element.propTypes = {
  details: PropTypes.string,
  action: PropTypes.func,
  elementPick: PropTypes.string,
};

export default Element;
