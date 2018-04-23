import React from 'react';
import PropTypes from 'prop-types';

class Face extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <p className={`u-${details.faceClass} u-p u-margin-bottom-none`} key={details.key}>
        {details.faceName}
      </p>
    );
  }
}

Face.propTypes = {
  details: PropTypes.object,
};

export default Face;
