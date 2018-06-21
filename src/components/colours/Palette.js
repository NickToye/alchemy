import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';

const Palette = ({ colour }) => {

  return (

    <div className={`u-alchemy-${colour.title.replace(/\s+/g, '-').toLowerCase()}-bg  c-swatch  o-grid__el  u-padding  o-surface--l1`} />
  );
};

Palette.propTypes = {
  colour: PropTypes.object.isRequired,
};

export default Palette;
