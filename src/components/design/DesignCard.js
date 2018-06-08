import React from 'react';
import PropTypes from 'prop-types';

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Design Component</h1>
      </div>
    );
  }
}

Design.propTypes = {
  prop: PropTypes.string,
};

export default Design;
