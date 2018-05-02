import React from 'react';
import PropTypes from 'prop-types';

class Banner extends React.Component {
  render() {
    const canvas = this.props.canvas;
    const textCanvas = this.props.textCanvas;
    const showText = this.props.showText;
    const textPosition = this.props.textPosition;
    const showHalfLeft = this.props.showHalfLeft;
    const showHalfRight = this.props.showHalfRight;
    const opacity = this.props.opacity;

    return (
      <div
        className={
          `c-banner  c-banner--${textPosition}  u-alchemy-${canvas}-bg  o-flex ` +
          (showHalfLeft ? 'c-banner--half-left ' : ' ') +
          (showHalfRight ? 'c-banner--half-right ' : ' ') +
          (showHalfLeft || showHalfRight ? '' : 'u-padding')
        }
      >
        {showText ? (
          <div className={`c-banner__text   u-padding u-relative`}>
            <div className={`c-banner__bg  u-alchemy-${textCanvas}-bg  u-alchemy-${opacity}`} />
            <div className={`c-banner__text__content  u-alchemy-${textCanvas}-bg `}>
              <h2>Headline</h2>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, Fusce dapibus, tellus
                ac cursus commodo, tortor mauris condimentum nibh, Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh
              </p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

Banner.propTypes = {
  canvas: PropTypes.string,
  showText: PropTypes.bool,
  textCanvas: PropTypes.string,
  textPosition: PropTypes.string,
  showHalfLeft: PropTypes.bool,
  showHalfRight: PropTypes.bool,
  opacity: PropTypes.string,
};

export default Banner;
