import React from 'react';
import PropTypes from 'prop-types';

import Face from './Face';

const TypeFaceList = ({ typefaces }) => {
  return (
    <section className="u-margin-bottom u-relative">
      <header className="o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-margin-bottom">
        <h2 className="u-alchemy-primary-colour u-margin-none">Type Faces</h2>
      </header>
      <div>{Object.keys(typefaces).map(key => <Face key={key} typefaces={typefaces[key]} />)}</div>
    </section>
  );
};

TypeFaceList.propTypes = {
  typefaces: PropTypes.array.isRequired,
};

export default TypeFaceList;
