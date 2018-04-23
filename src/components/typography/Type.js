import React from 'react';
import PropTypes from 'prop-types';

class Type extends React.Component {
  render() {
    const details = this.props.details;
    const margin = this.props.margin;
    return (
      <div
        className={`u-${details.element} ` + (margin ? 'u-margin-bottom' : 'u-margin-bottom-none')}
        key={details.key}
      >
        {details.label} - {details.fontSize}px
      </div>
    );
  }
}

Type.propTypes = {
  details: PropTypes.object,
  margin: PropTypes.object,
};

export default Type;
