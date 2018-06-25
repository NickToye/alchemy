import React from 'react';
import PropTypes from 'prop-types';

const Type = ({ typography }) => {
  return (
    <div className={`u-${typography.element} `}>
      {typography.label} - {typography.fontSize}px
    </div>
  );
};

Type.propTypes = {
  typography: PropTypes.object.isRequired,
};

export default Type;
