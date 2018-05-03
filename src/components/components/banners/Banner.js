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
              <h1>Fusce dapibus, tellus ac cursus commodo</h1>

              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, Fusce dapibus, tellus
                ac cursus commodo, tortor mauris condimentum nibh, Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh
              </p>
              <div className="u-4/5">
                <button className={`c-btn  c-btn--ghost c-btn--block u-margin-bottom-small`}>Click Me</button>
                <form className="o-form  o-flex  o-flex--row">
                  <input className="o-form__input o-flex__item-auto" type="text" placeholder="Type in here..." />
                  <button className="c-btn  c-btn--secondary2">Find</button>
                </form>
              </div>
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
