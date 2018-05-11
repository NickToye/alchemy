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
    const gutters = this.props.gutters;

    return (
      <div>
        <div className="u-margin-bottom-large">
          <h3>{details.gridName}</h3>

          <div className={`o-layout a-layout  o-layout--${layoutSize}`}>
            {Object.keys(colsArray).map(key => (
              <Column key={key} details={details} layoutSize={layoutSize} gutters={gutters} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  details: PropTypes.object,
  layoutSize: PropTypes.string,
  gutters: PropTypes.bool,
};

export default Grid;
