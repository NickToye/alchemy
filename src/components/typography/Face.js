import React from 'react';
import PropTypes from 'prop-types';

class Face extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <div>
        <p className={`u-${details.faceClass} u-p u-margin-bottom-none`} key={details.key}>
          {details.faceName}
        </p>
      </div>
    );
  }
}

Face.propTypes = {
  details: PropTypes.object,
};

export default Face;
