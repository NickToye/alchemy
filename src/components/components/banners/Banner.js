import React from 'react';
import PropTypes from 'prop-types';

class Banner extends React.Component {
  render() {
    const canvas = this.props.canvas;
    const textCanvas = this.props.textCanvas;
    const showImage = this.props.showImage;
    const showText = this.props.showText;
    const textPosition = this.props.textPosition;
    const showHalfLeft = this.props.showHalfLeft;
    const showHalfRight = this.props.showHalfRight;
    const opacity = this.props.opacity;

    return (
      <div
        className={
          `c-banner  c-banner--${textPosition}  u-alchemy-${canvas}-bg  o-flex  u-relative ` +
          (showHalfLeft ? 'c-banner--half-left ' : ' ') +
          (showHalfRight ? 'c-banner--half-right ' : ' ') +
          (showHalfLeft || showHalfRight ? '' : 'u-padding')
        }
      >
        {showImage ? <img className="c-banner__img" src="https://picsum.photos/1200/600/?random" /> : ''}
        {showText ? (
          <div className={`c-banner__text  u-alchemy-${textCanvas}-bg  u-padding u-relative`}>
            <div className={`c-banner__bg  u-alchemy-${textCanvas}-bg  u-alchemy-${opacity}`} />
            <div className={`c-banner__text__content  `}>
              <h2>Headline</h2>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, Fusce dapibus, tellus
                ac cursus commodo, tortor mauris condimentum nibh, Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh
              </p>
              <button className="c-btn  c-btn--ghost">Click Me</button>
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
  showImage: PropTypes.bool,
  showText: PropTypes.bool,
  textCanvas: PropTypes.string,
  textPosition: PropTypes.string,
  showHalfLeft: PropTypes.bool,
  showHalfRight: PropTypes.bool,
  opacity: PropTypes.string,
};

export default Banner;
