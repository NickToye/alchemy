import React from 'react';
import PropTypes from 'prop-types';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const details = this.props.details;

    return (
      <div key={details.key} className={`o-layout__item  u-1/${details.gridColumns}`}>
        <div className="a-layout-item-debug o-flex  o-flex--center">
          <small className="u-alchemy-dark-grey-colour">{details.gridColumnsWidth}%</small>
        </div>
      </div>
    );
  }
}

Column.propTypes = {
  details: PropTypes.object,
};

export default Column;
