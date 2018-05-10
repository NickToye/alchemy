import React from 'react';
import PropTypes from 'prop-types';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }



  render() {
    const details = this.props.details;
    const layoutSize = this.props.layoutSize;

    let layoutSizeUnit;
    if (layoutSize === 'tiny') {
      layoutSizeUnit = 6;
    } else if (layoutSize === 'small') {
      layoutSizeUnit = 12;
    } else if (layoutSize === 'large') {
      layoutSizeUnit = 48;
    } else if (layoutSize === 'huge') {
      layoutSizeUnit = 96;
    } else {
      layoutSizeUnit = 24;
    }


    return (
      <div key={details.key} className={`o-layout__item  u-1/${details.gridColumns}`}>
        <div className="a-layout-item-debug o-flex  o-flex--center o-surface--x">
          <small className="u-alchemy-dark-grey-colour">{details.gridColumnsWidth}%</small>
          <span className="a-alchemy-gutter">{layoutSizeUnit}</span>
        </div>
      </div>
    );
  }
}

Column.propTypes = {
  details: PropTypes.object,
  layoutSize: PropTypes.string,
};

export default Column;
