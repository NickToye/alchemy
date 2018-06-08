import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class ContentsCard extends React.Component {
  render() {
    const details = this.props.details;

    return (
      <Link
        to={`/` + details.identifier}
        className="u-padding-vertical-small"
        activeClassName="active"
        key={details.key}
      >
        <span className="u-h4 u-margin-none u-margin-left-tiny">{details.section}</span>
      </Link>
    );
  }
}

ContentsCard.propTypes = {
  details: PropTypes.object,
};

export default ContentsCard;
