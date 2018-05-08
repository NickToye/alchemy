import React from 'react';
import PropTypes from 'prop-types';

class ColourType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const details = this.props.details;
    const colourTypePick = this.props.colourTypePick;
    const isCurrent = colourTypePick === details;
    return (
      <button
        className={`c-toolbar__btn  u-text-capitalise ` + (isCurrent ? 'active' : '')}
        key={details.key}
        value={details}
        onClick={this.props.action}
      >
        <i className="fas fa-fw fa-tag fa-lg u-padding-right-tiny" />
        {details}
      </button>
    );
  }
}

ColourType.propTypes = {
  details: PropTypes.string,
  action: PropTypes.func,
  colourTypePick: PropTypes.string,
};

export default ColourType;
