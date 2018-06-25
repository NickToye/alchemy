import React from 'react';
import PropTypes from 'prop-types';

import Type from './Type';

const TypeSizeList = ({ typography }) => {
  return (
    <section className="u-margin-bottom u-relative">
      <header className="o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-margin-bottom">
        <h2 className="u-alchemy-primary-colour u-margin-none">Type Sizes</h2>
      </header>
      <div>{Object.keys(typography).map(key => <Type key={key} typography={typography[key]} />)}</div>
    </section>
  );
};

TypeSizeList.propTypes = {
  typography: PropTypes.array.isRequired,
};

export default TypeSizeList;
