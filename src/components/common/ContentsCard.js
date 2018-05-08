import React from 'react';
import PropTypes from 'prop-types';

class ContentsCard extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <li key={details.id}>
        <a href={`#` + details.identifier} className="u-padding-horizontal-small u-padding-vertical-tiny">
          {details.section}
        </a>
      </li>
    );
  }
}

ContentsCard.propTypes = {
  details: PropTypes.object,
};

export default ContentsCard;
