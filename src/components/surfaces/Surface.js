import React from 'react';
import PropTypes from 'prop-types';

class Surface extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <div key={details.key} className="o-flex u-text">
        <div className={`o-surface  o-surface--l${details}  o-flex  u-margin-bottom u-alchemy-primary-bg`}>
          <img src={require('../../images/card-logo.png')} className="" />
        </div>
        <small className="u-margin-bottom">Surface Level {details}</small>
      </div>
    );
  }
}

Surface.propTypes = {
  details: PropTypes.string,
};

export default Surface;
