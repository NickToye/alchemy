import React from 'react';
import PropTypes from 'prop-types';

class ContentsCard extends React.Component {


  render() {
    const details = this.props.details;
    const activeLink = this.props.activeLink;
    const isCurrent = activeLink === details.identifier;
    // const contentPick = this.props.contentPick;

    return (
      <li key={details.key}>
        <a
          href={`#` + details.identifier}
          className={`u-padding-horizontal-small u-padding-vertical-tiny ` + (isCurrent ? 'active' : '')}
          key={details.key}
          data-value={details.identifier}
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
  activeLink: PropTypes.string
};

export default ContentsCard;

// TODO set active state on active link
