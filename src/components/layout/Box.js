import React from 'react';
import PropTypes from 'prop-types';

class Box extends React.Component {
  render() {
    const details = this.props.details;
    const property = this.props.property;

    return (
      <div>
        {property === 'padding' ? (
          <div
            className={
              `atomic-${property}-unit-${details.sizeClass} ` +
              (details.sizeClass === `standard` ? `u-${property} ` : `u-${property}-${details.sizeClass} `)
            }
            key={details.key}
          >
            <div className={`atomic-${property}-unit-${details.sizeClass}-content`}>
              Content Area <br />with {details.sizeUnit} {property}
            </div>
          </div>
        ) : (
          <div className="atomic-canvas" key={details.key}>
            <div className={`atomic-${property}-unit-${details.sizeClass} `} key={details.key}>
              <div
                className={
                  `atomic-${property}-unit-${details.sizeClass}-content ` +
                  (details.sizeClass === `standard`
                    ? `u-${property} `
                    : `u-${property}-${details.sizeClass} `)
                }
              >
                Content Area with {details.sizeUnit} {property}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Box.propTypes = {
  details: PropTypes.object,
  property: PropTypes.string,
};

export default Box;
