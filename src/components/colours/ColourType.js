import React from 'react';
import PropTypes from 'prop-types';

class ColourType extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <button
        className={`c-toolbar__btn  u-text-capitalise `}
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
};

export default ColourType;
