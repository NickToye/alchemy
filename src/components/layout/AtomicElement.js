import React from 'react';
import PropTypes from 'prop-types';

class AtomicElement extends React.Component {
  render() {
    const details = this.props.details;
    return (
      <div className="o-media" key={details.key}>
        <div className={`o-media__img  atomic-${details.sizeClass} u-margin-right-small`}>
          <div className="nucleus" />
        </div>
        <p className="o-media__body  u-margin-none">
          <span className="u-margin-right-small">Atomic Unit {details.sizeClass}</span>
          <small className="u-alchemy-primary-colour">{details.sizeUnit}px</small>
          <br />Nucleus Unit (6px) multiplied by a factor of {details.sizeFactor}.
        </p>
      </div>
    );
  }
}

AtomicElement.propTypes = {
  details: PropTypes.object,
};

export default AtomicElement;
