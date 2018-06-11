import React from 'react';
import PropTypes from 'prop-types';

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h2 className="u-alchemy-primary-colour u-margin-none">Design Elements</h2>
          <p>A collection of useful design elements.</p>
        </header>
        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">...</section>
      </div>
    );
  }
}

Design.propTypes = {
  prop: PropTypes.string,
};

export default Design;
