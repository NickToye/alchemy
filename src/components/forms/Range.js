import React from 'react';
import PropTypes from 'prop-types';

class Range extends React.Component {
  constructor(props) {
    super(props);

    this.updateOpacity = this.updateOpacity.bind(this);
  }

  updateOpacity(e) {
    this.props.updateOpacity(e.target.value);
  }

  render() {
    const { range } = this.props;
    return (
      <div className="c-range  c-toolbar__range  o-flex  u-padding-small">
        <input
          id="range"
          type="range"
          value={range}
          min="0"
          max="10"
          step="1"
          onChange={this.updateOpacity}
        />
      </div>
    );
  }
}

Range.propTypes = {
  updateOpacity: PropTypes.func,
  range: PropTypes.string,
};

export default Range;
