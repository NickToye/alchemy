import React from 'react';
import PropTypes from 'prop-types';

class ContentsCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const details = this.props.details;
    // const contentPick = this.props.contentPick;

    return (
      <li key={details.key}>
        <a
          href={`#` + details.identifier}
          className={`u-padding-horizontal-small u-padding-vertical-tiny`}
          key={details.key}
          value={details.identifier}
          onClick={this.props.action}
        >
          {details.section}
        </a>
      </li>
    );
  }
}

ContentsCard.propTypes = {
  details: PropTypes.object,
  action: PropTypes.func,
  contentPick: PropTypes.string,
};

export default ContentsCard;
