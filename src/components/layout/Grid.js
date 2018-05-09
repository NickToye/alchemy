import React from 'react';
import PropTypes from 'prop-types';

import Column from './Column';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const details = this.props.details;
    const colsArray = Array.from(Array(details.gridColumns), (_, x) => x);
    const layoutSize = this.props.layoutSize;

    return (
      <div>
        <div className="u-margin-bottom-large">
          <h3>{details.gridName}</h3>

          <div className={`o-layout a-layout-debug  o-layout--${layoutSize}`}>
            {Object.keys(colsArray).map(key => <Column key={key} details={details} />)}
          </div>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  details: PropTypes.object,
  layoutSize: PropTypes.string,
};

export default Grid;
