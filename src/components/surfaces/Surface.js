import React from 'react';
import PropTypes from 'prop-types';

class Surface extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <div key={details.key} className="o-flex u-text">
        <div className={`o-surface  o-surface--l${details} u-margin-bottom`} />
        <small className="u-margin-bottom">Surface Level {details}</small>
      </div>
    );
  }
}

Surface.propTypes = {
  details: PropTypes.object,
};

export default Surface;
